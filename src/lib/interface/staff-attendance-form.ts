// For Forms
export interface IStaffAttendanceForm {
  id: number
  present: boolean
  presentDate: string
  user: number
}

// For Sending API Response

export interface IStaffAttendanceFormApi {
  id: number
  present: boolean
  presentDate: string
  user: number
}
