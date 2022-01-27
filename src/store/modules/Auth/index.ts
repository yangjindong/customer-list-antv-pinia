import { Module } from 'vuex'
import AuthStateTypes from './types'
import RootStateTypes from '@/store/types'

const authModule: Module<AuthStateTypes, RootStateTypes> = {
  namespaced: true,
  state: {
    name: 'auth-module',
    loggedIn: false
  },
  getters: {
    getAuth(state): boolean {
      return state.loggedIn
    }
  },
  actions: {
    changeAuth: {
      root: true,
      handler(namespacedContext, data: boolean): void {
        namespacedContext.commit('changeAuth', data)
      }
    },
    handleAuth(context, data: boolean): void {
      context.commit('changeAuth', data)
    }
  },
  mutations: {
    changeAuth(state, data: boolean): void {
      state.loggedIn = data
    }
  }
}

export default authModule
