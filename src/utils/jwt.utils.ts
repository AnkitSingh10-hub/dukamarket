// import type { UserTypes } from "@/models/User.interface";
import type { UserTypes } from '@/models/User.interface'
import { useJwtStore } from '@/stores/jwt'

// export function roleChecker(roles: UserTypes[]): boolean {
//   const JwtStore = useJwtStore();
//   for (const role of roles) {
//     if (JwtStore.UserDetail.profile.role === role) {
//       return true;
//     }
//   }
//   return false;
// }
export function roleChecker(roles: UserTypes[]): boolean {
  const JwtStore = useJwtStore(); 
  if (JwtStore && JwtStore.UserDetail && JwtStore.UserDetail.groupsName) {
    const userRole = JwtStore.UserDetail.groupsName[0];
    for (const role of roles) {
      if (userRole === role) {
        return true; 
      }
    }
  }
  return false; 
}



export async function WaitUntilRefreshed(): Promise<void> {
  const JwtStore = useJwtStore()
  while (JwtStore.RefreshingToken) {
    await new Promise((resolve) => setTimeout(resolve, 100))
  }
}

export function HasJwtExpired(): boolean {
  const JwtStore = useJwtStore()
  const exp = JwtStore.DecodedPayload.exp
  const now = Math.floor(new Date().getTime() / 1000)
  if (exp <= now) {
    return true
  }
  return false
}
