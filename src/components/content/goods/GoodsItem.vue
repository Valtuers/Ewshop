<template>
  <div class="goods-item">
    <img :src="good.cover_url" alt="" />
    <div class="goods-info">
      <p>{{ good.title }}</p>
      <span class="price"><small>￥</small>{{ good.price }}</span>
      <span class="collect">{{ good.collects_count }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Test",
  created() {},
  data() {
    return {};
  },
  props: {
    good: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.goods-item {
  position: relative;
  width: 46%;
  padding-bottom: 20px;
  text-align: center;
  z-index: -1;

  img {
    width: 100%;
    border-radius: 5px;
  }

  .goods-info {
    position: absolute;
    bottom: -10px;
    left: 0;
    right: 0;
    font-size: 12px;
    padding: 10px;
    p {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin-bottom: 3px;
    }
    .price {
      color: red;
      margin-right: 20px;
    }
    .collect {
      position: relative;
      &::after {
        content: "";
        position: absolute;
        left: -14px;
        top: -1px;
        width: 14px;
        height: 14px;
        background: url("~assets/images/collect.png") 0 0 no-repeat;
      }
    }
  }
}
</style>
