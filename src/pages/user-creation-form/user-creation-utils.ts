import { userCreationApiDefaultData } from '@constant/api-default-value'
import { IUserCreationForm, IUserCreationFormApi } from '@modal/user-creation.modal'

export function userCreationResponse(user: IUserCreationForm): IUserCreationFormApi {
  const responseData = userCreationApiDefaultData
  responseData.address = user.address
  responseData.email = user.email
  responseData.name = user.name
  responseData.password = user.password
  responseData.phoneNumber = user.phoneNumber
  responseData.userType = user.userType
  responseData.zipCode = user.zipCode
  responseData.roomsDTO.id = user.roomsDTO.roomName.id
  const defaultData = responseData.buildingsDTO[0]
  for (let index = 0; index < user.buildingsDTO.length; index++) {
    const element = user.buildingsDTO[index]
    responseData.buildingsDTO[index] = { ...defaultData, id: element.id }
  }

  return responseData
}
