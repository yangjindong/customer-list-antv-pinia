import { Module } from 'vuex'
import axios, { AxiosRequestConfig } from 'axios'
import CustomerStateTypes from './types'
import RootStateTypes from '@/store/types'

export const customerModule: Module<CustomerStateTypes, RootStateTypes> = {
  namespaced: true,
  state: {
    customer: {
      first_name: '',
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
    }
  },
  mutations: {
    createCustomer(state, data) {
      if (data._id) {
        state.customers.data[data._id] = data
      }
    }
  },
  actions: {
    async createCustomer(context) {
      const { data } = await axios({
        url: '/customers',
        method: 'post'
      })
      context.commit('createCustomer', data)
    }
  }
}

export default customerModule
