export interface IExpenseForm {
  amountToBePaid: number
  buildings: any
  description: string
  expanseMonthYear: string
  expanseName: string
  expansesCategory: number
  expansesStatus: string
  recurring: boolean
}
export interface IExpenseFormApi {
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
