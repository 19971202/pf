<template>
  <div class="flex">
    <div class="left">
      <SideNavi />
    </div>
    <div class="right">
      <div class="title">
        <img class="icon" src="../assets/home.png" alt="" />
        <p>ホーム</p>
      </div>
      <Message />
    </div>
  </div>
</template>

<script>
import SideNavi from "../components/SideNavi";
import Message from "../components/Message";
export default {
  components: {
    SideNavi,
    Message
  }
};
</script>

<style scoped>

.left {
  width: 22%;
  height: 100vh;
}

.right {
  width: 78%;
  height: 100vh;
}

.flex {
  display: flex;
}

.title {
  border-bottom: 3px solid #c5e7ee;
  border-left: 3px solid #c5e7ee;
  border-right: 3px solid #c5e7ee;
  padding: 15px;
}

.icon {
  width: 25px;
}

.title p {
  font-size: 20px;
  font-weight: bold;
}

</style>
