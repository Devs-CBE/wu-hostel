import { StaffAttendanceFormApiDeaultData } from '@constant/api-default-value'
import { IStaffAttendanceForm, IStaffAttendanceFormApi } from '@modal/staff-attendance-form'

export function StaffAttendanceCreationResponse(
  user: IStaffAttendanceForm,
): IStaffAttendanceFormApi {
  const responseData = StaffAttendanceFormApiDeaultData
  responseData.id = 0
  responseData.user = 0
  responseData.presentDate = user.presentDate
  responseData.present = user.present

  return responseData
}
