import { complaintFormApiDeaultData } from '@constant/api-default-value'
import { IComplaintForm, IComplaintApi } from '@modal/complaint-form.modal'

export function complaintCreationResponse(user: IComplaintForm, docs: string): IComplaintApi {
  const responseData = complaintFormApiDeaultData
  responseData.attachment = docs
  responseData.complaintDescription = user.complaintDescription
  responseData.complaintsType = user.complaintsType
  responseData.contactNumber = user.contactNumber
  responseData.user = 0

  return responseData
}
