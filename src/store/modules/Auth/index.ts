import { defineStore } from 'pinia'
import AuthStateTypes from './types'
import RootStateTypes from '@/store/types'

export const useAuthStore = defineStore({
  id: 'auth',
  state: (): AuthStateTypes => ({
    name: 'auth-module',
    loggedIn: false
  }),
  getters: {
    getAuth(state): boolean {
      return state.loggedIn
    }
  },
  actions: {
    changeAuth(data: boolean): void {
      this.loggedIn = data
    },
    handleAuth(data: boolean): void {
      this.loggedIn = data
    }
  }
})
