<template>
  <el-row>
    <el-col :span="12" :offset="6">
      <el-button type="primary" @click="$router.push('/customer')">
        View All Customers
      </el-button>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
  import { useRouter } from 'vue-router'

  const router = useRouter()
</script>
