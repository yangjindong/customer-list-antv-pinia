<template>
  <el-row>
    <el-col :span="12" :offset="6">
      <h2>Edit customer</h2>
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
        <el-button type="primary" @click="editCustomer">
          Edit Customer
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
  import { useRouter, useRoute } from 'vue-router'

  const router = useRouter()
  const route = useRoute()
  const store = useStore<AllStateTypes>(key)
  const customer = reactive<CustomerProps>(store.state.customer.customer)
  // const customer = toRefs(store.state.customer.customer)
  // console.log(customer.first_name.value)
  onMounted(async () => {
    const result = await store.dispatch('customer/getCustomer', route.params.id)
    customer.first_name = result.first_name
    customer.last_name = result.last_name
    customer.email = result.email
    customer.phone = result.phone
    customer.address = result.address
    customer.description = result.description
  })
  // console.log(customer)
  const editCustomer = () => {
    store
      .dispatch('customer/updateCustomer', {
        id: route.params.id,
        payload: customer
      })
      .then(() => {
        ElMessage.success('Customer is edited successfully')
        setTimeout(() => {
          router.push('/customer')
        }, 3000)
      })
      .catch((e) => {
        console.log(e)
      })
  }
</script>
