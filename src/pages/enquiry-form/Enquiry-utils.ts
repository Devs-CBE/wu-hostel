import { enquiryFormApiDeaultData } from '@constant/api-default-value'
import { IEnquiryForm, IEnquiryApi } from '@modal/Enquiry-form.modal'

export function enquiryCreationResponse(user: IEnquiryForm): IEnquiryApi {
  const responseData = enquiryFormApiDeaultData
  responseData.address = user.address
  responseData.adminId = 0
  responseData.buildings = user.buildings.id
  responseData.description = user.description
  responseData.duration = user.duration
  responseData.email = user.email
  responseData.enquiryStatus = 'NEW'
  responseData.id = 0
  responseData.locations = user.locations.id
  responseData.name = user.name
  responseData.numberOfPeople = user.numberOfPeople
  responseData.phoneNumber = user.phoneNumber
  responseData.referral = user.referal
  responseData.roomChoice = user.roomChoice
  responseData.zipCode = user.zipCode

  return responseData
}

export const enquiryDetail = undefined
