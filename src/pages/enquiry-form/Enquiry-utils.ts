import { enquiryFormApiDeaultData } from '@constant/api-default-value'
import { IEnquiryForm, IEnquiryApi } from '@modal/Enquiry-form.modal'

export function EnquiryCreationResponse(user: IEnquiryForm): IEnquiryApi {
  const responseData = enquiryFormApiDeaultData
  responseData.address = user.address
  responseData.adminId = 0
  responseData.buildings = user.buildings
  responseData.description = user.description
  responseData.duration = user.duration
  responseData.email = user.email
  responseData.enquiryStatus = 'new'
  responseData.id = 0
  responseData.locations = user.locations
  responseData.name = user.name
  responseData.numberOfPeople = user.numberOfPeople
  responseData.phoneNumber = user.phoneNumber
  responseData.referral = user.referal
  responseData.roomChoice = user.roomChoice
  responseData.zipCode = user.zipCode

  return responseData
}
