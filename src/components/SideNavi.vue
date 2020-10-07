<template>
  <div id="card">
    <div class="left-padding">
      <h1>Share Feelings</h1>
      <div class="flex icon-field" @click="$router.push('/sharehome')">
        <img class="icon" src="../assets/home.png" alt=""/>
      <p>ホーム</p>
      </div>
      <div class="flex icon-field" @click="$router.push('/profile')">
        <img class="icon" src="../assets/user-icon.png" alt="" />
        <p>プロフィール</p>
      </div>
      <div class="flex icon-field" @click="$store.dispatch('logout')">
        <img class="icon" src="../assets/logout.png" alt="" />
        <p>ログアウト</p>
      </div>
    </div>
    <hr />
    <ShareMessage />
  </div>
</template>

<script>
import ShareMessage from "../components/ShareMessage";
export default {
  components: {
    ShareMessage
  }
};
</script>

<style scoped>
.left-padding {
  margin: 20px;
}

.flex {
  display: flex;
}

.icon-field {
  margin-top: 15px;
  cursor: pointer;
}

.icon {
  width: 25px;
}

.icon-field p {
  font-size: 15px;
  padding-left: 15px;
}

hr {
  border-color: #c5e7ee;
  border-width: 3px;
}
</style>