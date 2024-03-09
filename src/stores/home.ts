import { defineStore } from 'pinia'

import API from '@/api/jwt'
import { LocalStorage } from 'quasar'
import router from '@/router'

export const useHomeStore = defineStore('home', {
  state: () => {
    return { UserDetails: {} }
  },
  getters: {},
  actions: {
    async registerSupplier() {}
  }
})
