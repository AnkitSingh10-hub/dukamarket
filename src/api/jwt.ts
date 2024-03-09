import { postAPI } from '@/api'
import type {
  UserLoginInfo,
  Activation,
  EmailReset,
  ConfirmResetPassword
} from '@/models/JWT.interface'
import { Action } from '@/api/actions'

export default new (class JWTAPI {
  public async getJWT(user: UserLoginInfo) {
    const response = await postAPI(Action.Token, user, {
      withCredentials: true
    })
    return response
  }

  public async refreshAccessToken() {
    try {
      const response = await postAPI(
        Action.RefreshToken,
        {},
        {
          withCredentials: true
        }
      )
      return response
    } catch (error) {
      //pass
    }
  }

  public async clearJWT() {
    const response = await postAPI(
      Action.ClearToken,
      {},
      {
        withCredentials: true
      }
    )
    return response
  }

  public async userActivation(data: Activation) {
    const response = await postAPI(Action.Activation, data)
    return response
  }

  public async resendActivation(data: EmailReset) {
    const response = await postAPI(Action.ResendActivation, data)
    return response
  }

  public async resetPassword(data: EmailReset) {
    const response = await postAPI(Action.ResetPassword, data)
    return response
  }

  public async confirmResetPassword(data: ConfirmResetPassword) {
    const response = await postAPI(Action.ResetPasswordConfirm, data)
    return response
  }
})()
