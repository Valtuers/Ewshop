<template>
  <div>
    <nav-bar></nav-bar>
    <router-view></router-view>
    <van-tabbar class="tabbarShadow" v-model="tabber.active" route>
      <van-tabbar-item to="/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/category" icon="apps-o">分类</van-tabbar-item>
      <van-tabbar-item to="/shopcart" icon="shopping-cart-o">购物车</van-tabbar-item>
      <van-tabbar-item to="/profile" icon="friends-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
import NavBar from "@/components/common/navbar/NavBar";
export default {
  name: "App",
  setup() {},
  data() {
    return {
      tabber: {
        active: 0,
      },
    };
  },
  components: {
    NavBar,
  },
};
</script>
<style lang="scss">
@import "assets/css/base.css";
.van-tabbar.tabbarShadow {
  box-shadow: 0 0px 20px rgba(100, 100, 100, 0.13);
}
</style>
