<script setup>
import HeaderView from "@/components/common/HeaderView.vue";
import FooterView from "@/components/common/FooterView.vue";
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