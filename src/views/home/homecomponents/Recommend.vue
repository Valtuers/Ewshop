<template>
  <div class="recommend">
    <div class="recommend-item" v-for="item in recommends.slice(0, 4)" :key="item.id">
      <a href="" @click.prevent="goDetail(item.id)">
        <img :src="item.cover_url" alt="" />
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  name: "Recommend",
  data() {
    return {};
  },
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  setup() {
    const router = useRouter();
    let goDetail = (id) => {
      router.push({ path: "/detail", query: { id } });
    };
    return {
      goDetail,
    };
  },
  created() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.recommend {
  display: flex;
  width: 100%;
  text-align: center;
  margin-top: 46px;
  padding: 15px 0 30px;
  border-bottom: 8px solid #eee;
  font-size: 14px;

  .recommend-item {
    flex: 1;

    img {
      width: 80px;
      margin-bottom: 8px;
    }
  }
}
</style>
