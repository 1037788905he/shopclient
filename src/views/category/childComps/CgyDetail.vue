<template>
  <div class="clear-fix">
    <cgy-detail-item v-for="(item,index) in cgyList" :key="index"></cgy-detail-item>
  </div>
</template>

<script>
import CgyDetailItem from "./CgyDetailItem";
export default {
  name: "CgyDetail",
  props: {
    cgyName: {
      type: String,
      default() {
        return "夹克";
      }
    },
    cgyList: {
      type: Array,
      default() {
        return ["夹克", "夹克", "夹克", "夹克"];
      }
    }
  },
  components: {
    CgyDetailItem
  }
};
</script>

<style scoped>
</style>