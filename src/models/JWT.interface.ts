import type { UserDetail } from './User.interface'

export interface UserLoginInfo {
  username: string
  password: string
}

export interface JWT {
  access: string
  refresh?: string
}

export interface DecodedJWTPayload {
  exp: number
  jti: string
  token_type: string
  user_id: number
  username: string
  userDetail: UserDetail
}

export interface MultipleEmail {
  emails: string[]
}

export interface InviteAdmin {
  email: string
}

export interface InviteOwner {
  email: string
}

export interface InviteManager {
  email: string
  farm?: number
}

export interface EmailReset {
  email: string
}

export interface Activation {
  uid: string
  token: string
}

export interface ConfirmResetPassword extends Activation {
  newPassword: string
  reNewPassword: string
}
