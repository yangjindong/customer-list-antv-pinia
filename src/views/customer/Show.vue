<template>
  <a-row>
    <a-col :md="{ span: 12, offset: 6 }" :xs="24">
      <a-button type="primary" @click="$router.push('/customer')">
        View All Customers
      </a-button>
    </a-col>
  </a-row>
</template>

<script setup lang="ts">
  import { useRouter } from 'vue-router'

  const router = useRouter()
</script>
