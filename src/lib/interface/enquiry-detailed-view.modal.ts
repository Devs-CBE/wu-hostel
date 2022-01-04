export interface IEnquiryMappingForm {
  adminId: any
}

export interface IEnquiryDetailsSession {
  address: string
  buildings: any
  description: string
  duration: string
  email: string
  id: number | null
  locations: any
  name: string
  numberOfPeople: number
  phoneNumber: string
  referal: string
  roomChoice: string
  zipCode: string
}

export interface IEnquiryMappingApi {
  address: string
  adminId: number
  buildings: number
  date: string
  description: string
  duration: string
  email: string
  enquiryStatus: string
  id: number | null
  locations: number
  name: string
  numberOfPeople: number
  phoneNumber: string
  referral: string
  roomChoice: string
  zipCode: string
}
