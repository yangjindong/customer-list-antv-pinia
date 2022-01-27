<template>
  <h1>
    <span class="text-capitalize">{{ t('hello') + ' ' }}</span>

    <span>
      {{ t('description') }}
    </span>
  </h1>
  <div class="locales-container">
    <el-button
      class="mx-1"
      elevation="0"
      color="secondary"
      @click="locale = 'en'"
    >
      En
    </el-button>
    <el-button
      class="mx-1"
      elevation="0"
      color="background"
      @click="locale = 'kr'"
    >
      Kr
    </el-button>
    <el-button
      class="mx-1"
      elevation="0"
      color="success"
      @click="locale = 'fr'"
    >
      Fr
    </el-button>
    <el-button class="mx-1" elevation="0" color="info" @click="locale = 'sp'">
      Sp
    </el-button>
  </div>

  <el-button
    class="ma-2"
    color="#41B883"
    elevation="0"
    @click="$router.push('/')"
  >
    Go back
  </el-button>
</template>
<script setup lang="ts">
  import { useI18n } from 'vue-i18n'

  let { t, locale } = useI18n({
    inheritLocale: true,
    useScope: 'global' // Change to "local" if you want to add <i18n></i18n> locally
  })
</script>
