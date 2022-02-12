import { Module } from 'vuex'
import axios from '@/plugins/http'
import CustomerStateTypes, { CustomerProps } from './types'
import RootStateTypes from '@/store/types'

export const customerModule: Module<CustomerStateTypes, RootStateTypes> = {
  namespaced: true,
  state: {
    customer: {
      first_name: '进东',
      last_name: '',
      email: '',
      phone: '',
      address: '',
      description: '',
      created_at: new Date()
    },
    customers: { data: {} }
  },
  getters: {
    getCustomer(state: CustomerStateTypes) {
      return state.customer.last_name
    },
    getCustomers(state: CustomerStateTypes) {
      return state.customers.data
    }
  },
  mutations: {
    listCustomers(state, data) {
      state.customers.data = data
    },
    getCustomer(state, data) {
      state.customer = data
    },
    createCustomer(state, data) {
      if (data._id) {
        state.customers.data[data._id] = data
      }
    },
    updateCustomer(state, data) {
      if (data._id) {
        state.customers.data[data._id] = data
      }
    },
    deleteCustomer(state, data) {
      delete state.customers.data[data._id]
    }
  },
  actions: {
    async listCustomers(context) {
      const { data } = await axios({
        url: '/customers',
        method: 'get'
      })
      context.commit('listCustomers', data)
      return data
    },
    async getCustomer(context, id): Promise<CustomerProps> {
      const { data } = await axios({
        url: `/customers/${id}`,
        method: 'get'
      })
      context.commit('getCustomer', data)
      return data
    },
    async createCustomer(context, payload) {
      const { data } = await axios({
        url: '/customers',
        method: 'post',
        data: payload
      })
      context.commit('createCustomer', data)
    },
    async updateCustomer(context, { id, payload }) {
      const { data } = await axios({
        url: `/customers/${id}`,
        method: 'put',
        data: payload
      })
      context.commit('updateCustomer', data)
    },
    async deleteCustomer(context, id) {
      const { data } = await axios({
        url: `/customers/${id}`,
        method: 'delete'
      })
      context.commit('deleteCustomer', data)
    }
  }
}

export default customerModule
