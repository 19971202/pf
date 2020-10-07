<template>
  <div>
    <HeaderAuth />
    <main>
      <div id="eyecatch">
        <p>その気持ちあなただけじゃない</p>
      </div>
      <div id="about">
        <h2 class="section-title">About</h2>

      </div>
      <div id="service" class="wrap">
        <h2 class="section-title">Service</h2>
        <div class="flex-around">
          <div class="service-left">
            <h3>あなたと同じ気持ちを持った人がここにいる</h3>
            <ul>
              <li>
                人に相談できない・・・
              </li>
              <li>
                いつも自分で抱えこんじゃう・・・
              </li>
              <li>
                自分だけなんじゃないか・・・
              </li>
            </ul>
            <h3>同じ境遇の人を探してみませんか？</h3>
            <button @click="$router.push('/signup')">新規登録</button>
          </div>
          <div class="service-right">
            <img class="foto" src="../assets/female-doctor.png" alt="">
          </div>
        </div>
      </div>
      
    </main>
    <Footer/>
  </div>
</template>

<script>
import HeaderAuth from "../components/HeaderAuth";
import Footer from "../components/Footer";
export default {
  components: {
    HeaderAuth,
    Footer
  }
};
</script>

<style scoped>
#eyecatch {
  height: 600px;
  background: url(../assets/aozora.jpeg) no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
}

#eyecatch p {
  position: absolute;
  margin-left: 10%;
  margin-top: 25%;
  font-size: 45px;
  font-weight: bold;
  color: #ff9502;
}

.flex-around {
  display: flex;
  justify-content: space-between;
  height: 300px;
}

.service-left  {
  line-height: 50px;
  margin-top: 30px;
  width: 100%;
  margin-left: 20px;
}

img.foto {
  height: 350px;
  margin-left: 20px;
}

.service-left ul {
  list-style-position: inside;
}

button {
 width: 100px;
 text-align: center;
 padding: 8px 0 10px;
 color: #fff;
 background-color: #f5b55b;
 border: 1px solid white;
 border-radius: 25px;
 cursor: pointer; 
}
</style>