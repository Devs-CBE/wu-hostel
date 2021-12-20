// For Forms
export interface IStaffAttendanceForm {
  // present: boolean
  presentDate: Date
  // user: number
}

// For Sending API Response

export interface IStaffAttendanceFormApi {
  id: number
  present: boolean
  presentDate: Date
  user: number
}
