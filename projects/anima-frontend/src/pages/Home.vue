<template>
  <div class="home">
    <!-- 导航栏 -->
    <van-nav-bar title="Aanime" left-arrow @click-left="onClickLeft">
      <template #right>
        <van-button type="primary" size="small" @click="createContent">+ Create</van-button>
        <van-button type="info" size="small" @click="signIn">Sign In</van-button>
      </template>
    </van-nav-bar>

    <!-- 主要内容区域 -->
    <div class="main-content">
      <h1>AI Powered Community for Anime Fans</h1>
      <p>Aanime is a place where anime fans gather, share and be inspired.</p>
      <van-button type="primary" @click="generateAnimeArt">Generate Anime Art</van-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Button as VanButton, NavBar as VanNavBar } from 'vant';

export default defineComponent({
  components: {
    VanNavBar,
    VanButton,
  },
  methods: {
    onClickLeft() {
      // 处理返回逻辑
    },
    createContent() {
      // 处理创建内容逻辑
    },
    signIn() {
      // 处理登录逻辑
    },
    generateAnimeArt() {
      // 处理生成动漫艺术逻辑
    },
  },
});
</script>

<style scoped>
.home {
  padding: 0;
  background-image: url('https://ainime.com/_next/static/media/default_banner.968beada.webp');
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.main-content {
  text-align: center;
  color: white;
  max-width: 800px;
  margin: 0 auto;
}

.main-content h1 {
  font-size: 48px;
  margin-bottom: 20px;
}

.main-content p {
  font-size: 20px;
  margin-bottom: 40px;
}

.van-button {
  width: 200px;
}
</style>
