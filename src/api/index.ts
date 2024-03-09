import axios, { type AxiosRequestConfig } from 'axios'
import { Action } from '@/api/actions'
import router from '@/router'

import { Notify, LoadingBar } from 'quasar'
import { useJwtStore } from '@/stores/jwt'

let baseUrl = import.meta.env.VITE_BACKEND_API
if (!baseUrl || baseUrl == '/') {
  baseUrl = ''
}

export const baseURL = baseUrl

export const api = axios.create({
  baseURL: `${baseUrl}/${Action.API}`
})

// Make Axios play nice with Django CSRF
api.defaults.xsrfCookieName = 'csrftoken'
api.defaults.xsrfHeaderName = 'X-CSRFToken'
api.defaults.headers.common['App-Type'] = 'AdminWebUI'

export function JwtExpired(): boolean {
  const JwtStore = useJwtStore()
  const exp = JwtStore.DecodedPayload.exp
  const now = Math.floor(new Date().getTime() / 1000)
  if (exp <= now) {
    return true
  }
  return false
}

async function refreshing() {
  const JwtStore = useJwtStore()
  while (JwtStore.RefreshingToken) {
    await new Promise((resolve) => setTimeout(resolve, 100))
  }
  return false
}

api.interceptors.request.use(
  async (config) => {
    const JwtStore = useJwtStore()
    if (config.url != `/${Action.RefreshToken}/` && JwtStore.RefreshingToken) {
      await refreshing()
    }
    if (
      config.url != `/${Action.ClearToken}/` &&
      config.url != `/${Action.RefreshToken}/` &&
      config.url != `/${Action.Token}/` &&
      JwtStore.AccessToken &&
      JwtStore.AccessToken != ''
    ) {
      if (JwtExpired()) {
        JwtStore.refreshingToken()
        await JwtStore.refreshAccessToken()
      }
      if (config && config.headers) {
        config.headers.Authorization = 'Bearer ' + JwtStore.AccessToken
      }
    } else {
      if (config && config.headers) {
        delete config.headers.Authorization
      }
    }
    LoadingBar.start()
    LoadingBar.increment(0.5)

    return config
  },
  (error) => {
    LoadingBar.stop()
    LoadingBar.increment(1)
    Notify.create({
      type: 'negative',
      message: error
    })
    return new Promise(error)
  }
)

api.interceptors.response.use(
  (config) => {
    LoadingBar.stop()
    LoadingBar.increment(1)
    return config
  },
  (error) => {
    const JwtStore = useJwtStore()
    LoadingBar.stop()
    LoadingBar.increment(1)

    /** Handler for logging out if refresh token is expired */
    if (error.response.config.url == `/${Action.RefreshToken}/`) {
      if (error.response.status == 401) {
        if (error.response.data.message != 'NoError') {
          JwtStore.clearJWT().then(() => {
            router.push({ name: 'Home' })
            Notify.create({
              message: 'You have been logged out! Please login again',
              type: 'negative',
              position: 'top-right'
            })
          })
          return new Promise(error)
        }
      }
    }

    /** Handler for refreshing access token */
    if (error.response.config.url != `/${Action.RefreshToken}/`) {
      if (
        (error.response.status == 403 || error.response.status == 401) &&
        error.response.data.message == 'Token is invalid or expired'
      ) {
        JwtStore.refreshingToken()
        JwtStore.refreshAccessToken().then(() => {
          const config = error.response.config
          if (JwtStore.AccessToken && JwtStore.AccessToken != '') {
            config.headers.Authorization = `Bearer ${JwtStore.AccessToken}`
            api.request(config)
          }
          return config
        })
        return new Promise(error.response.config)
      }
    }

    /** Handler for error response with and without message */
    if (error.response.data.message) {
      if (error.response.data.message != 'NoError') {
        Notify.create({
          message: error.response.data.message,
          type: 'negative',
          position: 'top'
        })
      }
    } else {
      Notify.create({
        message: 'Network Error',
        type: 'negative',
        position: 'top'
      })
    }
    return new Promise(error)
  }
)

// eslint-disable-next-line
export async function postAPI(
  url: string,
  // eslint-disable-next-line
  data: any,
  config?: AxiosRequestConfig
  // eslint-disable-next-line
): Promise<any> {
  return new Promise((resolve, reject) => {
    const apiResponse = api.post(`/${url}/`, data, config)
    apiResponse.then(
      (result) => {
        resolve(result.data)
      },
      (error) => {
        if (url == Action.RefreshToken && (error.status_code == 400 || error.status_code == 401)) {
          resolve({})
        }
        reject(error)
      }
    )
  })
}

// eslint-disable-next-line
export async function putAPI(
  url: string,
  // eslint-disable-next-line
  data: any,
  config?: AxiosRequestConfig
  // eslint-disable-next-line
): Promise<any> {
  return new Promise((resolve, reject) => {
    const apiResponse = api.put(`/${url}/`, data, config)
    apiResponse.then(
      (result) => {
        resolve(result.data)
      },
      (error) => {
        if (url == Action.RefreshToken && (error.status_code == 400 || error.status_code == 401)) {
          resolve({})
        }
        reject(error)
      }
    )
  })
}

// eslint-disable-next-line
export async function patchAPI(
  url: string,
  // eslint-disable-next-line
  data: any,
  config?: AxiosRequestConfig
  // eslint-disable-next-line
): Promise<any> {
  return new Promise((resolve, reject) => {
    const apiResponse = api.patch(`/${url}/`, data, config)
    apiResponse.then(
      (result) => {
        resolve(result.data)
      },
      (error) => {
        if (url == Action.RefreshToken && (error.status_code == 400 || error.status_code == 401)) {
          resolve({})
        }
        reject(error)
      }
    )
  })
}

// eslint-disable-next-line
export async function deleteAPI(
  url: string,
  config?: AxiosRequestConfig
  // eslint-disable-next-line
): Promise<any> {
  return new Promise((resolve, reject) => {
    const apiResponse = api.delete(`/${url}/`, config)
    apiResponse.then(
      (result) => {
        resolve(result.data)
      },
      (error) => {
        if (url == Action.RefreshToken && (error.status_code == 400 || error.status_code == 401)) {
          resolve({})
        }
        reject(error)
      }
    )
  })
}

// eslint-disable-next-line
export function getAPI(url: string, query = ''): Promise<any> {
  return new Promise((resolve, reject) => {
    const apiResponse = api.get(`/${url}/${query}`)
    apiResponse.then(
      (result) => {
        resolve(result.data)
      },
      (error) => {
        reject(error)
      }
    )
  })
}
