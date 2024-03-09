import { defineStore } from 'pinia'
import { jwtDecode } from 'jwt-decode'

import type {
  UserLoginInfo,
  JWT,
  DecodedJWTPayload,
  EmailReset,
  ConfirmResetPassword,
  Activation
} from '@/models/JWT.interface'
import type { UserDetail } from '@/models/User.interface'
import API from '@/api/jwt'
import { LocalStorage } from 'quasar'
import router from '@/router'

export const useJwtStore = defineStore('jwt', {
  state: () => {
    return {
      AccessToken: '',
      DecodedPayload: {} as DecodedJWTPayload,
      isLoggedIn: false,
      RefreshingToken: true,
      UserDetail: {} as UserDetail
    }
  },
  getters: {
    loggedIn: (state) => {
      return state.isLoggedIn
    }
  },
  actions: {
    refreshingToken() {
      this.RefreshingToken = true
    },
    async setIsLoggedIn(value: boolean) {
      LocalStorage.set('isLoggedIn', value)
      this.isLoggedIn = value
    },
    async getJWT(user: UserLoginInfo) {
      const detail = (await API.getJWT(user)) as JWT
      const decodedPayload = jwtDecode(detail.access) as DecodedJWTPayload
      this.AccessToken = detail.access
      this.DecodedPayload = decodedPayload
      this.UserDetail = decodedPayload.userDetail
      this.isLoggedIn = true
    },
    async refreshAccessToken() {
      let detail = (await API.refreshAccessToken()) as JWT

      // eslint-disable-next-line
      let decodedPayload: DecodedJWTPayload = {} as DecodedJWTPayload
      let isLoggedIn = false
      if (!detail || !detail.access) {
        const loggedIn = this.isLoggedIn
        detail = {} as JWT
        detail.access = ''
        decodedPayload = {} as DecodedJWTPayload
        if (loggedIn) {
          router.push({ name: 'Home' })
        }
      } else {
        decodedPayload = jwtDecode(detail.access)
        isLoggedIn = true
      }
      this.AccessToken = detail.access
      this.DecodedPayload = decodedPayload
      this.isLoggedIn = isLoggedIn
      this.UserDetail = decodedPayload.userDetail
      this.RefreshingToken = false
    },
    async clearJWT() {
      await API.clearJWT()
      this.AccessToken = ''
      this.DecodedPayload = {} as DecodedJWTPayload
      this.isLoggedIn = false
    },
    async userActivation(data: Activation) {
      const response = await API.userActivation(data)
      return response
    },
    async resendActivation(data: EmailReset) {
      const response = await API.resendActivation(data)
      return response
    },
    async resetPassword(data: EmailReset) {
      const response = await API.resetPassword(data)
      return response
    },
    async confirmResetPassword(data: ConfirmResetPassword) {
      const response = await API.confirmResetPassword(data)
      return response
    }
  }
})
