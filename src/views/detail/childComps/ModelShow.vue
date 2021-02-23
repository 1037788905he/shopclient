<template>
  <div class="modelshow">
    <div>穿着效果</div>
    <div class="model">
      <img v-for="(item,index) in detailPhoto" :key="index" @load="test" :src="item" alt />
    </div>
  </div>
</template>

<script>
export default {
  name: "ModelShow",
  props: {
    detailPhoto: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      isFalse: true
    };
  },
  mounted() {},
  methods: {
    test() {
      this.$bus.$emit("test1");
    }
  }
};
</script>

<style scoped>
.modelshow {
  margin-top: 30px;
  padding: 0 10px;
  color: #000;
  font-size: 14px;
}
.model img {
  width: 100%;
}
</style>