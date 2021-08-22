<template>
  <div class="goods-list">
    <goods-item :good="item" v-for="item in goods" :key="item.id"></goods-item>
  </div>
</template>

<script>
import GoodsItem from "./GoodsItem.vue";
export default {
  name: "GoodsList",
  created() {},
  data() {
    return {};
  },
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {},
  components: {
    GoodsItem,
  },
};
</script>

<style lang="scss" scoped>
.goods-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 15px 5px 5px 5px;
}
</style>
