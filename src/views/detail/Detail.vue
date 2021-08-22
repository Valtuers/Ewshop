<template>
  <div>商品详情{{ id }}</div>
</template>

<script>
import { ref } from "vue";
import { useRoute } from "vue-router";
export default {
  name: "Test",
  data() {
    return {};
  },
  props: {},
  setup() {
    const route = useRoute();
    let id = ref(route.query.id);
    return {
      id,
    };
  },
  created() {},
  methods: {},
};
</script>

<style lang="scss" scoped></style>
