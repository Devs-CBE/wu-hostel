export interface IDenquiry {
  duration: string
  referal: string
  roomChoice: string
  address: string
  buildings: any
  description: string
  email: string
  locations: any
  name: string
  numberOfPeople: string
  phoneNumber: string
  zipCode: string
}

export interface IPostEnquiry {
  address: string
  buildings: number
  description: string
  email: string
  enquiryStatus: string
  id: number
  locations: number
  name: string
  numberOfPeople: number
  phoneNumber: string
  zipCode: string
}
