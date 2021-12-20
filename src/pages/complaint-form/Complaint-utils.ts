import {
  complaintDetailedFormApiDeaultData,
  complaintFormApiDeaultData,
} from '@constant/api-default-value'
import { IcomplaintDetailedForm, IcomplaintDetailedFormApi } from '@modal/Complaint-Detailed-Form'
import { IComplaintForm, IComplaintApi } from '@modal/complaint-form.modal'

export function complaintCreationResponse(user: IComplaintForm, docs: any): IComplaintApi {
  const responseData = complaintFormApiDeaultData
  responseData.attachment = docs
  responseData.complaintDescription = user.complaintDescription
  responseData.complaintsType = user.complaintsType
  responseData.contactNumber = user.contactNumber
  responseData.user = 0

  return responseData
}

export function ComplaintDetailedFormCreationResponse(
  user: IcomplaintDetailedForm,
): IcomplaintDetailedFormApi {
  const responseData = complaintDetailedFormApiDeaultData
  responseData.complaintStatus = user.complaintStatus
  responseData.complaints = 0
  responseData.description = user.description
  responseData.id = 0
  return responseData
}
