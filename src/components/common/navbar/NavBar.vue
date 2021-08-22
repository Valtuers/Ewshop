<template>
  <div>
    <van-nav-bar title="图书商城" left-arrow @click-left="goback" fixed />
  </div>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  name: "NavBar",
  setup() {
    const router = useRouter();
    const goback = () => {
      router.go(-1);
    };
    return {
      goback,
    };
  },
  data() {
    return {};
  },
  props: {},
  created() {},
  methods: {},
};
</script>

<style lang="scss" scoped></style>
