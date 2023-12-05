<template>
  <div>
    <input type="text" id="username"  placeholder="USERNAME" />
    <button @click="handleLogin">JOIN</button>
  </div>
</template>

<script>
import UserService from "@/service/UserService";
import { useRouter } from "vue-router";

export default {
  name: "LoginPage",
  setup() {
    const router = useRouter(); // Ensure router is defined here

    const handleLogin = async () => {
      try {
        const username = document.getElementById('username').value.trim();

        if (!username) {
          let nickname = localStorage.getItem("nickname") || "";
          const response = await UserService.guestLogin(nickname);
          localStorage.setItem("nickname", response);
        } else {
          // const response = await UserService.userLogin(username);
          // localStorage.setItem("beforeId", response);
        }

        await router.push({name: "main"});
      } catch (error) {
        console.error('Login failed:', error);
      }
    };

    return { handleLogin };
  }
}
</script>

<style scoped>

</style>