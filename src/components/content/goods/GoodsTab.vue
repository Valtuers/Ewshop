<template>
  <div class="goods-tab">
    <van-tabs v-model:active="active" @click-tab="tabClick">
      <van-tab :title="item" v-for="(item, i) in titles" :key="i"> </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "GoodsTab",
  setup(props, { emit }) {
    let active = ref(0);

    let tabClick = (tab, title) => {
      emit("tabClick", tab.name);
    };

    return {
      active,
      tabClick,
    };
  },
  data() {
    return {};
  },
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  created() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.goods-tab {
  position: sticky;
  top: 46px;
}
</style>
