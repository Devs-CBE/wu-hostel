import { kitchenFormApiDeaultData } from '@constant/api-default-value'
import { IKitchenApi, IKitchenForm } from '@modal/kitchen-form.modal'

export function KitchenCreationResponse(user: IKitchenForm): IKitchenApi {
  const responseData = kitchenFormApiDeaultData

  responseData.buildings = user.buildings
  responseData.amountToBePaid = user.amountToBePaid
  responseData.buildings = user.buildings
  responseData.description = user.description
  responseData.expanseMonthYear = user.expanseMonthYear
  responseData.expanseName = user.expanseName
  responseData.expansesCategory = user.expansesCategory
  responseData.expansesStatus = user.expansesStatus
  responseData.id = null
  responseData.recurring = user.recurring

  return responseData
}
