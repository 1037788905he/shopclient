<template>
  <div class="cgybar clear-fix">
    <ul>
      <li
        :class="{cgy_active : currentIndex == index}"
        @click="cgyItemClick(index)"
        v-for="(item,index) in cgyList"
        :key="index"
      >{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CgyBar",
  data() {
    return {
      currentIndex: 0,
      cgyList: [
        "热门推荐",
        "手机数码",
        "电脑办公",
        "家用电器",
        "美妆护肤",
        "个护清洁",
        "汽车生活",
        "男装",
        "女装",
        "男鞋",
        "女鞋",
        "超市百货",
        "母婴用品",
        "图书音像",
        "运动户外",
        "内衣配饰",
        "食品生鲜",
        "酒水饮料",
        "家具厨具",
        "礼品鲜花",
        "生活旅行",
        "二手商品",
        "金融好物",
        "国际名牌",
        "工业品"
      ]
    };
  },
  methods: {
    cgyItemClick(index) {
      this.currentIndex = index;
    }
  }
};
</script>

<style scoped>
.cgybar ul {
  width: 100%;
}
.cgybar ul li {
  display: block;
  width: 100%;
  height: 40px;
  font-size: 14px;
  line-height: 40px;
  list-style: none;
  text-align: center;
}
.cgy_active {
  background-color: #ff8198;
}
</style>