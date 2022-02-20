import AuthStateTypes from './modules/auth/types'
import CustomerStateTypes from './modules/customer/types'

export default interface RootStateTypes {
  text: string
}

export interface AllStateTypes extends RootStateTypes {
  auth: AuthStateTypes
  customer: CustomerStateTypes
}
