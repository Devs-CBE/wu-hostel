export interface IComplaintForm {
  attachment: any
  complaintDescription: string
  complaintsType: string
  contactNumber: string
}

export interface IComplaintUpdateForm {
  attachment: any
  complaintId: number
}

export interface IComplaintApi {
  attachment: string
  complaintDescription: string
  complaintsType: string
  contactNumber: string
  compaintStatus: 'NEW' | 'ASSIGNED' | 'PENDING' | 'COMPLETED'
  downloadPath: string
  id: any
  user: any
}
