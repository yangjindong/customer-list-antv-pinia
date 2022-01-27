import AuthStateTypes from './modules/Auth/types'
import CustomerStateTypes from './modules/Customer/types'

export default interface RootStateTypes {
  text: string
}

export interface AllStateTypes extends RootStateTypes {
  auth: AuthStateTypes
  customer: CustomerStateTypes
}
