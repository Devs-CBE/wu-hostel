import { monthlyRentFormApiDefaultData } from '@constant/api-default-value'
import { IMonthlyRentForm, IMonthlyRentFormApi } from '@modal/monthly-rent.modal'

export function monthlyRentCreationResponse(user: IMonthlyRentForm): IMonthlyRentFormApi {
  const responseData = monthlyRentFormApiDefaultData
  responseData.amount = user.amount
  responseData.fullyPaid = user.fullyPaid
  responseData.monthAndYear = user.monthAndYear

  return responseData
}
