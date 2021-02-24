<template>
  <div class="cart">
    <!-- 标题栏 -->
    <nav-bar class="cart-nav">
      <div class="back" slot="left">&lt;</div>
      <div slot="center">购物车</div>
    </nav-bar>
    <!-- 地址 -->
    <!-- 购物车 -->
    <!-- 推荐商品 -->
    <!-- 结算模块 -->
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar"; //标题栏
export default {
  name: "Cart",
  components: {
    NavBar
  }
};
</script>

<style scoped>
.cart {
  width: 100%;
  height: 100%;
  background-color: #f2f2f2;
}
.cart-nav {
  position: relative;
  color: #000;
  background-color: #fff;
  z-index: 3;
}
.back {
  font-size: 26px;
}
</style>
