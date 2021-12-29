export interface IMonthlyRentForm {
  amount: number
  fullyPaid: boolean
  monthAndYear: string
  user: number
}

export interface IMonthlyRentFormApi {
  amount: number
  createAt: string
  createdBy: string
  deleted: boolean
  fullyPaid: boolean
  id: number | null
  monthAndYear: string
  publish: boolean
  updateAt: string
  updatedBy: string
  user: number
}
