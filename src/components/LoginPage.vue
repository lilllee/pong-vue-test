<template>
  <header-view></header-view>
  <main class="main-content" style=" text-align: center; background-color: lightgray;">
    <section>
      {{type}}
    </section>
    <!--
      type's changing flow
      1. login -> password, guest
      2. password -> login
      3. guest -> login, sign
      4. sign -> login
    -->
    <!-- nickname input filed -->
    <section class="join-section" v-if="type === 'login'">
      <input type="text" class="join-input" v-model="username" placeholder="USERNAME" />
      <button @click="handleLogin" class="join-btn">JOIN</button>
    </section>
    <!-- add password filed and login button -->
    <section class="join-section" v-else-if="type === 'password'">
      <input type="password" v-model="password"/>
      <button @click="type = 'login'"> back login</button>
      <button @click="sign()">login</button>
    </section>
    <!-- Ask Login & Guest Login -->
    <section class="join-section" v-else-if="type === 'guest'">
      GUEST
      <button @click="signGuest"> guest login </button>
      <button @click="type = 'sign'"> create </button>
      <button @click="type = 'login'"> back login </button>
    </section>
    <!-- create user form -->
    <section class="join-section" v-else-if="type === 'sign'">
      <input type="text" v-model="username"/>
      <input type="text" v-model="password"/>
      <input type="email" v-model="email"/>
      <button @click="type='login'"> back login </button>
      <button @click="createUser()"></button>
    </section>
  </main>
  <footer-view></footer-view>
</template>

<script>
import UserService from "@/service/UserService";
import HeaderView from "@/components/HeaderView.vue";
import FooterView from "@/components/FooterView.vue";
import router from "@/router";

export default {
  name: "LoginPage",
  data(){
    return {
      type : 'login'
      , username : ""
      , password : ""
      , email: ""
    }
  },
  methods: {
    async handleLogin() {
      try {
        const username = this.username.trim();
        if (!username) {
          await this.signGuest();
        } else {

          /** check user is exits
           *  true : type data 'password'
           *  false : type data 'guest'
           * */
          let response = await UserService.isExist(username);
          if (response === true) {
            this.type = 'password'
          } else if ( response === false) {
            this.type = 'guest';
          }
        }
      } catch (error) {
        console.error('Login failed:', error);
      }
    },
    async signGuest() {
      const nickname = localStorage.getItem('nickname') || "";
      let response = await UserService.guestLogin(nickname);
      localStorage.setItem('nickname', response);
      await router.push({name: "main", params: { nickname: nickname}});
    },
    async sign() {
     await UserService.userLogin(this.username, this.password);
    },
    createUser() {
      UserService.create(this.username, this.password, this.email);
    }
  },
  components: {FooterView, HeaderView},
}
</script>

<style scoped>

</style>