<template>
  <swiper>
    <swiper-item v-for="(item,index) in banners" :key="index">
      <img class="swiperdetail" @load="test" :src="item" alt />
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";

export default {
  name: "DetialSwiper",
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      isLoad: true
    };
  },
  created() {},
  components: {
    Swiper,
    SwiperItem
  },
  methods: {
    test() {
      if (this.isLoad) {
        this.$bus.$emit("test1");
      }
      this.isLoad = false;
    }
  },
  mounted() {}
};
</script>

<style scoped>
.swiperdetail {
  height: 250px;
}
</style>