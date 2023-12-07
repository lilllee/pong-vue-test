<script setup>
  // import axios from "axios";

  // let roomList;
  // roomList = axios.get("/roomList", {}, {}, {});
  // console.log(roomList);
import HeaderView from "@/components/HeaderView.vue";
import FooterView from "@/components/FooterView.vue";
  import router from "@/router";
</script>

<template>
  <header-view></header-view>
  <h1> ROOM LIST </h1>
  <button @click="router.push({name:'createRoom'})"> create Room </button>
  <footer-view></footer-view>
</template>

<style scoped>

</style>