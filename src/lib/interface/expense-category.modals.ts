export interface IExpenseCategoryForm {
  categoryName: string
  expanseCategoryType: string
}
export interface IExpenseCategoryFormApi {
  categoryName: string
  createAt: string
  createdBy: string
  deleted: boolean
  expanseCategoryType: string
  id: number | null
  publish: boolean
  updateAt: string
  updatedBy: string
}
