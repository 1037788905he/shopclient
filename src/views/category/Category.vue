<template>
  <div>
    <nav-bar class="home-nav">
      <div class="back" slot="left">&lt;</div>
      <div slot="center">分类</div>
    </nav-bar>
    <div class="contentc">
      <scroll class="scroll_left" ref="scroll" :probe-type="3" :pull-up-load="true">
        <cgy-bar></cgy-bar>
      </scroll>
      <scroll class="scroll_right" ref="scroll" :probe-type="3" :pull-up-load="true">
        <cgy-detail></cgy-detail>
      </scroll>
    </div>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/common/scroll/Scroll"; //滑动条
import CgyBar from "./childComps/CgyBar";
import CgyDetail from "./childComps/CgyDetail";
export default {
  name: "Category",
  components: {
    NavBar,
    CgyBar,
    CgyDetail,
    Scroll
  },
  data() {
    return {};
  },
  created() {},
  mounted() {}
};
</script>

<style scoped>
.home-nav {
  position: relative;
  color: #000;
  background-color: #fff;
  z-index: 3;
}
.contentc {
  display: flex;
}

.scroll_left {
  width: 20%;
  background-color: #f2f2f2;
  border-right: 1px solid #eee;
}
.scroll_right {
  left: 20%;
  width: 80%;
}
.back {
  font-size: 26px;
}
</style>
