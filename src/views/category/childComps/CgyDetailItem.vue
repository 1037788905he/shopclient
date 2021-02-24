<template>
  <div class="cgydetail_item clear-fix">
    <h4>分类名称</h4>
    <ul>
      <li v-for="(item,index) in cgyList" :key="index">
        <img src="~assets/img/common/jiake.jpg" alt />
        <p>夹克</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CgyDetailItem",
  data() {
    return {
      cgyList: ["夹克", "夹克", "夹克", "夹克", "夹克"]
    };
  }
};
</script>

<style scoped>
.cgydetail_item {
  margin-top: 10px;
}
.cgydetail_item ul {
  display: flex;
  flex-wrap: wrap;
  align-content: space-around;
}
.cgydetail_item ul li {
  float: left;
  margin: 3px;
  width: 30%;
  height: 90px;
  text-align: center;
}
.cgydetail_item ul li img {
  width: 100%;
  height: 70px;
}
</style>