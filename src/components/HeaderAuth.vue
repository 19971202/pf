<template>
  <header>
    <div class="header flex">
      <div class="header-logo">
        <p @click="$router.push('/')">Share Feelings</p>
      </div>
      <div class="right flex">
        <p @click="$router.push('/signup')">新規登録</p>
        <p @click="$router.push('/login')">ログイン</p>
      </div>
    </div>
  </header>
</template>

<style scoped>
.right {
 align-items: center;
}

.right p {
 margin-right: 20px;
 margin-top: 20px;
 font-weight: lighter;
 color: white;
 cursor: pointer;
}

header {
 height: 70px;
 background: #48a8cc;
}

.header-logo p {
  font-weight: lighter;
  margin-top: 20px;
  margin-left: 20px;
  color: white;
  font-size: 30px;
}

.flex {
 display: flex;
 justify-content: space-between;
}
</style>