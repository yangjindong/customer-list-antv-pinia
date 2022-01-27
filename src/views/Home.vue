<template>
  <div class="container">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Vue 3 + TypeScript + Vite + Elemenet Plus" />
    <div class="buttons-container">
      <el-button
        class="ma-2"
        type="primary"
        elevation="0"
        dark
        @click="count++"
      >
        <span>Count: {{ count }}</span>
      </el-button>
      <el-button
        class="ma-2"
        type="primary"
        elevation="0"
        dark
        @click="store.dispatch('changeAuth', !auth)"
      >
        <span>{{ auth ? 'Log out' : 'Login' }}</span>
      </el-button>
      <el-button
        class="ma-2"
        type="primary"
        elevation="0"
        dark
        @click="store.dispatch('auth/handleAuth', !auth)"
      >
        <span>{{ auth ? 'Log out' : 'Login' }}</span>
      </el-button>
      <el-button
        class="ma-2"
        type="primary"
        elevation="0"
        @click="$router.push('/pagetwo')"
      >
        Go to protected page
      </el-button>
    </div>
    <div class="state-container">
      {{ auth ? 'Logged in' : 'Logged out' }}
      <el-icon v-if="auth"><ep-arrow-down-bold /></el-icon>
      <el-icon v-else><ep-arrow-up-bold /></el-icon>
    </div>
    <el-button @click="handleClick">
      <el-icon><ep-circle-check-filled /></el-icon>
      Hello world
    </el-button>
    <a href="https://github.com/yangjindong" target="_blank" class="creator">
      Jindong Yang
    </a>
  </div>
</template>
<script setup lang="ts">
  import { computed, ref } from '@vue/runtime-core'
  import HelloWorld from '../components/HelloWorld.vue'
  import { key } from '../store'
  import { useStore } from 'vuex'
  import { AllStateTypes } from '@/store/types'

  const count = ref(0)

  const store = useStore<AllStateTypes>(key)
  const auth = computed(() => {
    return store.getters['auth/getAuth']
  })
  console.log(store.state.auth.name)

  const handleClick = () => {
    ElMessage.success('Hello world')
  }
</script>
<style scoped lang="scss">
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-top: 60px;
    text-align: center;
  }
  .creator {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    text-decoration: none;
    color: black;
  }
  .icon {
    color: white;
  }
</style>
