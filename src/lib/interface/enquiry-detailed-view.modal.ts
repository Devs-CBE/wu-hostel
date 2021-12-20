export interface IEnquiryMappingForm {
  adminId: number
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
  id: number
  locations: number
  name: string
  numberOfPeople: number
  phoneNumber: string
  referral: string
  roomChoice: string
  zipCode: string
}
