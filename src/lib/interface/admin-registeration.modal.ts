export interface IAdminRegisteration {
  address: string
  email: string
  name: string
  password: string
  phoneNumber: string
  userType: string
  zipCode: string
}

export interface IAdminRegisterationPost {
  address: string
  email: string
  id: number
  name: string
  password: string
  phoneNumber: string
  userType: 'ADMIN' | 'SUPER_ADMIN' | 'USER' | 'STAFF' | 'KITCHEN_STAFF'
  zipCode: string
}
