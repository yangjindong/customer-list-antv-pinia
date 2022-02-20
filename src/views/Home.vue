<template>
  <div class="container">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Vue 3 + TypeScript + Vite + Ant Design Vue + Pinia" />
    <div class="buttons-container">
      <a-button class="ma-2" type="primary" elevation="0" dark @click="count++">
        <span>Count: {{ count }}</span>
      </a-button>
      <a-button
        class="ma-2"
        type="primary"
        elevation="0"
        dark
        @click="authStore.changeAuth(!auth)"
      >
        <span>{{ auth ? 'Log out' : 'Login' }}</span>
      </a-button>
      <a-button
        class="ma-2"
        type="primary"
        elevation="0"
        dark
        @click="authStore.handleAuth(!auth)"
      >
        <span>{{ auth ? 'Log out' : 'Login' }}</span>
      </a-button>
      <a-button
        class="ma-2"
        type="primary"
        elevation="0"
        @click="$router.push('/pagetwo')"
      >
        Go to protected page
      </a-button>
    </div>
    <div class="state-container">
      {{ auth ? 'Logged in' : 'Logged out' }}
      <arrow-down-outlined v-if="auth" />
      <arrow-up-outlined v-else />
    </div>
    <a-button @click="handleClick">
      <check-circle-filled />
      Hello world
    </a-button>
    <a-button
      class="ma-2"
      elevation="0"
      @click="$router.push('/customer/create')"
    >
      Create Customer
    </a-button>
    <a href="https://github.com/yangjindong" target="_blank" class="creator">
      Jindong Yang
    </a>
  </div>
</template>
<script setup lang="ts">
  import { computed, ref } from '@vue/runtime-core'
  import HelloWorld from '../components/HelloWorld.vue'
  import { key } from '../store'
  import { useAuthStore } from '@/store/modules/auth'
  import { AllStateTypes } from '@/store/types'
  import {
    ArrowDownOutlined,
    ArrowUpOutlined,
    CheckCircleFilled
  } from '@ant-design/icons-vue'

  const count = ref(0)

  const authStore = useAuthStore()
  const auth = computed(() => {
    return authStore.getAuth
  })
  console.log(authStore.name)

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
