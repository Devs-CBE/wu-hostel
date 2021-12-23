export interface IKitchenForm {
  amountToBePaid: number
  buildings: any
  description: string
  expanseMonthYear: string
  expanseName: string
  expansesCategory: any
  expansesStatus: string
  recurring: boolean
}

export interface IKitchenApi {
  amountToBePaid: number
  buildings: number
  description: string
  expanseMonthYear: string
  expanseName: string
  expansesCategory: number
  expansesStatus: string
  id: number | null
  recurring: boolean
}
