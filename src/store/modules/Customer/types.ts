export default interface CustomerStateTypes {
  customer: CustomerProps
  customers: { data: ListProps<CustomerProps> }
}

export interface CustomerProps {
  _id?: string
  first_name: string
  last_name: string
  email: string
  phone: string
  address: string
  description: string
  created_at: Date
}

export interface ListProps<P> {
  [id: string]: P
}
