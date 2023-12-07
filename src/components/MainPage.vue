<template>
  <div>
    <HeaderView></HeaderView>
    <div id="app" class="container">
<!--      <GroupButton data-image="mode.png" header-text="Mode" header-content="일반 모드입니다.">-->
<!--      </GroupButton>-->
<!--      <GroupButton data-image="leaderboard.png" header-text="Board" header-content="정보를 확인할수 있는 리더 보드입니다.">-->
<!--      </GroupButton>-->
      <GroupButton data-image="multi.png" header-text="Multi" header-content="멀티플레이 할수있는 모드입니다.">
      </GroupButton>
      <GroupButton data-image="single.png" header-text="Single" header-content="싱글플레이를 할수있는 모드입니다.">
      </GroupButton>
    </div>
    <FooterView></FooterView>
  </div>
</template>

<script setup>
  import { onMounted, ref } from 'vue';
  import StompSocket from "@/service/StompSocket";
  import router from "@/router";

  const socket = ref(null);

  onMounted(() => {

    let nickname = router.currentRoute._value.params.nickname;
    console.log(nickname);
    StompSocket.initializeSocket(nickname);
    socket.value = StompSocket.getStompSocket();
    if (!socket.value) {
      console.error('WebSocket connection has not been established.');
      return;
    } else {
      console.info("Success WebSocket Connection")
    }
  });
</script>

<script>
import GroupButton from './MainPageGroupButtons.vue';
import HeaderView from './HeaderView.vue'
import FooterView from './FooterView.vue'

export default {
  name: 'MainPage',
  components: {
    GroupButton
    , HeaderView
    , FooterView
  }
}
</script>

<style>
.container {
  padding: 40px 80px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

header {
  background: #707070;
  grid-area: header;
}
footer {
  background: #707070;
  grid-area: footer;
}

</style>
