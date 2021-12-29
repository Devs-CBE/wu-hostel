import { buildingFormApiDefaultData } from '@constant/api-default-value'
import { IBuildingForm, IBuildingFormApi } from '@modal/building-form-modal'

export function buildingFormCreationResponse(user: IBuildingForm): IBuildingFormApi {
  const responseData = buildingFormApiDefaultData
  responseData.buildingName = user.buildingName
  responseData.zipCode = user.zipCode
  responseData.buildingAddress = user.buildingAddress
  responseData.locationsDTO.id = user.locationsDTO.id
  return responseData
}
