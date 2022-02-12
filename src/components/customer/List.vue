<template>
  <el-row>
    <el-col :md="{ span: 16, offset: 4 }" :xs="24">
      <h3>Customers</h3>
      <ul>
        <li v-for="customer in customers" :key="customer._id">
          <router-link :to="`/customer/${customer._id}`">
            {{ customer.first_name }}{{ customer.last_name }}
          </router-link>
          {{ customer.email }}
          {{ customer.phone }}
        </li>
      </ul>
      <el-table :data="customers" stripe style="width: 100%">
        <el-table-column label="Name">
          <template #default="scope">
            <div>
              <router-link :to="`/customer/${scope.row._id}`">
                {{ scope.row.first_name }} {{ scope.row.last_name }}
              </router-link>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="email" label="Email"></el-table-column>
        <el-table-column prop="phone" label="Phone"></el-table-column>
        <el-table-column prop="address" label="Address"></el-table-column>
        <el-table-column
          prop="description"
          label="Description"
        ></el-table-column>
        <el-table-column prop="created_at" label="Created At"></el-table-column>
        <el-table-column
          fixed="right"
          label="Operation"
          className="text-nowrap"
          width="140"
        >
          <template #default="scope">
            <el-button
              size="small"
              @click="handleEdit(scope.$index, scope.row)"
            >
              Edit
            </el-button>
            <el-button
              type="danger"
              size="small"
              @click="handleDelete(scope.$index, scope.row)"
            >
              Delete
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <br />
      <el-button type="primary" @click="$router.push('/customer/create')">
        Create Customer
      </el-button>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
  import { useRouter } from 'vue-router'
  import { useStore } from '@/store'
  import { CustomerProps } from '@/store/modules/Customer/types'

  const store = useStore()
  const router = useRouter()
  const customers = reactive([]) as CustomerProps[]
  onMounted(async () => {
    await store
      .dispatch('customer/listCustomers')
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
  const handleEdit = (index: number, row: CustomerProps) => {
    router.push(`/customer/${row._id}/edit`)
  }
  const handleDelete = (index: number, row: CustomerProps) => {
    store.dispatch('customer/deleteCustomer', row._id).then(() => {
      window.location.reload()
    })
  }
  const customers2 = computed(
    () => store.getters['customer/getCustomers'] as CustomerProps[]
  )
  const customers3 = computed(() => {
    const result = store.dispatch('customer/listCustomers')
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
