<template>
  <div class="share">
    <p>お悩み相談</p>
    <textarea placeholder="お悩みをお書きください" v-model="share"></textarea>
    <div @click="send">
      <button >投稿する</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      share: "",
    };
  },
  methods: {
    send() {
      if (this.share === "" ) {
        alert("あなたの悩みをお書きください");
      } else {
        axios
         .post("https://aqueous-fortress-05238.herokuapp.com/api/shares", {
           user_id: this.$store.state.user.id,
           share: this.share,
         })
         .then((response) => {
           console.log(response);
           alert("投稿しました");
           this.share = "";
           this.$router.go({
             path: this.$router.currentRoute.path,
             force: true,
           });
         });
      }
    },
  },
};
</script>

<style scoped>

.share {
  margin-left: 0px;
}

.share textarea {
  width: 95%;
  height: 120px;
  margin-top: 15px;
  margin-bottom: 15px;
  border-radius: 10px;
  border: 1px solid white;
  background-color: white;
  border: 1px solid #48a8cc;
  color: black;
  resize: none;
}

button {
  width: 100px;
  text-align: center;
  padding: 8px 0 10px;
  color: #fff;
  background-color: #f5b55b;
  border: 1px solid white;
  border-radius: 25px;
  display: block;
  margin: 0 0 0 auto;
}

</style>