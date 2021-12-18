import { expenseFormApiDeaultData } from '@constant/api-default-value'
import { IExpenseForm, IExpenseFormApi } from '@modal/Expense-form.modal'
import { boolean } from 'yup'

export function ExpenseCreationResponse(user: IExpenseForm): IExpenseFormApi {
  const responseData = expenseFormApiDeaultData
  responseData.amountToBePaid = user.amountToBePaid
  responseData.buildings = 0
  responseData.description = user.description
  responseData.expanseMonthYear = user.expanseMonthYear
  responseData.expanseName = user.expanseName
  responseData.expansesCategory = user.expansesCategory
  responseData.expansesStatus = user.expansesStatus
  responseData.id = 0
  responseData.recurring = user.recurring

  return responseData
}
