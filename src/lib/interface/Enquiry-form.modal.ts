export interface IEnquiryForm {
  duration: string
  referal: string
  roomChoice: string
  address: string
  buildings: any
  description: string
  email: string
  locations: any
  name: string
  numberOfPeople: number
  phoneNumber: string
  zipCode: string
}

export interface IEnquiryApi {
  address: string
  adminId: number
  buildings: number
  description: string
  duration: string
  email: string
  enquiryStatus: 'NEW' | 'ACKNOWLEDGED' | 'DECLINED' | 'APPROVED' | 'JOINED'
  id: number | null
  locations: number
  name: string
  numberOfPeople: number
  phoneNumber: string
  referral: string
  roomChoice: string
  zipCode: string
}

export interface IEnquiryDetailForm {
  adminId: any
}
