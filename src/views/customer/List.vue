<template>
  <a-row>
    <a-col :md="{ span: 16, offset: 4 }" :xs="24">
      <a-typography-title :level="3">Customers</a-typography-title>
      <ul>
        <li v-for="customer in customers" :key="customer._id">
          <router-link :to="`/customer/${customer._id}`">
            {{ customer.first_name }}{{ customer.last_name }}
          </router-link>
          {{ customer.email }}
          {{ customer.phone }}
        </li>
      </ul>
      <a-table
        bordered
        :data-source="customers"
        :columns="columns"
        :scroll="{ x: 1000 }"
      >
        <template #bodyCell="{ column, index, record }">
          <template v-if="column.key === 'name'">
            <div>{{ record.last_name }}{{ record.first_name }}</div>
          </template>
          <template v-if="column.key === 'operation'">
            <a-button size="small" @click="handleEdit(index, record)">
              Edit
            </a-button>
            <a-button
              type="primary"
              danger
              size="small"
              @click="handleDelete(index, record)"
            >
              Delete
            </a-button>
          </template>
        </template>
      </a-table>
      <br />
      <div>
        <a-button type="primary" @click="$router.push('/customer/create')">
          Create Customer
        </a-button>
        <a-button type="primary" @click="$router.push('/')">Home</a-button>
      </div>
    </a-col>
  </a-row>
</template>

<script lang="ts" setup>
  import { useRouter } from 'vue-router'
  import { useCustomerStore } from '@/store/modules/customer'
  import { CustomerProps } from '@/store/modules/customer/types'

  const customerStore = useCustomerStore()
  const router = useRouter()
  const columns = customerStore.columns
  const customers = reactive([]) as CustomerProps[]
  onMounted(async () => {
    await customerStore
      .listCustomers()
      .then((res: CustomerProps[]) => {
        res.forEach((customer) => {
          customers.push(customer)
        })
        // console.log(res)
      })
      .catch((e) => {
        console.log(e)
      })
  })
  const handleEdit = (index: number, record: CustomerProps) => {
    router.push(`/customer/${record._id}/edit`)
  }
  const handleDelete = (index: number, record: CustomerProps) => {
    customerStore.deleteCustomer(record._id).then(() => {
      window.location.reload()
    })
  }
  const customers2 = computed(
    () => customerStore.getCustomers as CustomerProps[]
  )
  const customers3 = computed(() => {
    const result = customerStore.listCustomers()
    return result
  })
  // console.log(customers2.value)
  // console.log(customers3)
</script>

<style>
  .text-nowrap div.cell {
    white-space: nowrap;
  }
</style>
