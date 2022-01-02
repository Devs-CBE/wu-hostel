import { expenseCategoryFormApiDefaultData } from '@constant/api-default-value'
import { IExpenseCategoryForm, IExpenseCategoryFormApi } from '@modal/expense-category.modals'

export function ExpenseCategoryCreationResponse(
  user: IExpenseCategoryForm,
): IExpenseCategoryFormApi {
  const responseData = expenseCategoryFormApiDefaultData
  responseData.categoryName = user.categoryName
  responseData.expanseCategoryType = user.expanseCategoryType
  responseData.id = null

  return responseData
}
