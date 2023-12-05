<template>
  <div id="app" class="container">
    <ProfileCard data-image="mode.png" header-text="Mode" header-content="일반 모드입니다.">
    </ProfileCard>
    <ProfileCard data-image="learderboard.png" header-text="Board" header-content="정보를 확인할수 있는 리더 보드입니다.">
    </ProfileCard>
    <ProfileCard data-image="multi.png" header-text="Multi" header-content="멀티플레이 할수있는 모드입니다.">
    </ProfileCard>
    <ProfileCard data-image="single.png" header-text="Single" header-content="싱글플레이를 할수있는 모드입니다.">
    </ProfileCard>
  </div>
</template>

<script>
import ProfileCard from './components/ProfileCard.vue';

export default {
  name: 'App',
  components: {
    ProfileCard
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
</style>
