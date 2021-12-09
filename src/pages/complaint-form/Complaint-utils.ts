import { complaintFormApiDeaultData } from '@constant/api-default-value'
import { IComplaintForm, IComplaintApi } from '@modal/complaint-form.modal'

export function complaintCreationResponse(user: IComplaintForm, docs: any): IComplaintApi {
  const responseData = complaintFormApiDeaultData
  responseData.attachment = docs
  responseData.complaintDescription = user.complaintDescription
  responseData.compaintStatus = user.compaintStatus
  responseData.complaintsType = user.complaintsType
  responseData.contactNumber = user.contactNumber
  responseData.downloadPath = user.downloadPath
  responseData.id = 0
  responseData.user = 0

  return responseData
}
