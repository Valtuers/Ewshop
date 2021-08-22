<template>
  <div class="home">
    <recommend :recommends="recommends"></recommend>
    <goods-tab :titles="['畅销', '新书', '精选']" @tabClick="tabClick"></goods-tab>
    <goods-List :goods="showGoods"></goods-List>
  </div>
</template>

<script>
import { computed, onMounted, reactive, ref } from "vue";
import { getHomeAllData, getHomeGoods } from "@/network/Home";
import Recommend from "./homecomponents/Recommend.vue";
import GoodsTab from "@/components/content/goods/GoodsTab";
import GoodsList from "@/components/content/goods/GoodsList";

export default {
  name: "Home",
  setup() {
    let recommends = ref([]);
    let currentTab = ref("sales");
    let goods = reactive({
      sales: { page: 1, list: [] },
      new: { page: 1, list: [] },
      recommend: { page: 1, list: [] },
    });
    onMounted(() => {
      getHomeAllData().then((res) => {
        recommends.value = res.goods.data;
      });
      getHomeGoods("sales").then((res) => {
        goods.sales.list = res.goods.data;
      });
      getHomeGoods("new").then((res) => {
        goods.new.list = res.goods.data;
      });
      getHomeGoods("recommend").then((res) => {
        goods.recommend.list = res.goods.data;
      });
    });

    let showGoods = computed(() => {
      return goods[currentTab.value].list;
    });

    let tabClick = (index) => {
      if (index === 0) {
        currentTab.value = "sales";
      } else if (index === 1) {
        currentTab.value = "new";
      } else if (index === 2) {
        currentTab.value = "recommend";
      }
    };
    return {
      recommends,
      currentTab,
      goods,
      showGoods,
      tabClick,
    };
  },
  data() {
    return {};
  },
  props: {},
  created() {},
  methods: {},
  components: { Recommend, GoodsTab, GoodsList },
};
</script>

<style lang="scss" scope>
.home {
  padding-bottom: 50px;
}
</style>
