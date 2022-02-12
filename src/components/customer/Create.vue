<template>
  <el-row>
    <el-col :span="12" :offset="6">
      <h2>Create customer</h2>
      <el-form label-position="top" :model="customer">
        <el-form-item label="First Name">
          <el-input v-model="customer.first_name"></el-input>
        </el-form-item>
        <el-form-item label="Last Name">
          <el-input v-model="customer.last_name"></el-input>
        </el-form-item>
        <el-form-item label="Email">
          <el-input v-model="customer.email"></el-input>
        </el-form-item>
        <el-form-item label="Phone">
          <el-input v-model="customer.phone"></el-input>
        </el-form-item>
        <el-form-item label="Address">
          <el-input v-model="customer.address"></el-input>
        </el-form-item>
        <el-form-item label="Description">
          <el-input v-model="customer.description"></el-input>
        </el-form-item>
        <el-button type="primary" @click="createCustomer">
          Create Customer
        </el-button>
        <el-button type="primary" plain @click="$router.push('/customer')">
          View All Customers
        </el-button>
      </el-form>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
  import { key } from '@/store'
  import { useStore } from 'vuex'
  import { AllStateTypes } from '@/store/types'
  import { CustomerProps } from '@/store/modules/Customer/types'
  import { useRouter } from 'vue-router'

  const router = useRouter()
  const store = useStore<AllStateTypes>(key)
  const customer = reactive({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    address: '',
    description: ''
  })
  const createCustomer = () => {
    store
      .dispatch('customer/createCustomer', customer)
      .then(() => {
        ElMessage.success('Customer is created successfully')
        setTimeout(() => {
          router.push('/customer')
        }, 2000)
      })
      .catch((e) => {
        console.log(e)
      })
  }
</script>
