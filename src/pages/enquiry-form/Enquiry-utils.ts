import { enquiryFormApiDeaultData, enquiryMappingDefaultData } from '@constant/api-default-value'
import {
  IEnquiryDetailsSession,
  IEnquiryMappingApi,
  IEnquiryMappingForm,
} from '@modal/enquiry-detailed-view.modal'
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

export function enquiryMappingCreationResponse(
  user: IEnquiryMappingForm,
  enquiryDetails: IEnquiryDetailsSession,
): IEnquiryMappingApi {
  const responseData = enquiryMappingDefaultData
  responseData.adminId = user.adminId.id
  responseData.address = enquiryDetails.address
  // responseData.buildings = enquiryDetails.buildings.id
  responseData.description = enquiryDetails.description
  // responseData.duration = enquiryDetails.duration
  responseData.email = enquiryDetails.email
  responseData.enquiryStatus = 'NEW'
  responseData.id = enquiryDetails.id
  // responseData.locations = enquiryDetails.locations.id
  responseData.name = enquiryDetails.name
  responseData.numberOfPeople = enquiryDetails.numberOfPeople
  responseData.phoneNumber = enquiryDetails.phoneNumber
  // responseData.referral = enquiryDetails.referal
  // responseData.roomChoice = enquiryDetails.roomChoice
  responseData.zipCode = enquiryDetails.zipCode
  return responseData
}
