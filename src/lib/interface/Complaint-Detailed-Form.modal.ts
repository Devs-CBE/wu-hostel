export interface IcomplaintDetailedForm {
  complaintStatus: string
  description: string
}

export interface IcomplaintDetailedFormApi {
  complaintStatus: string
  complaints: number
  description: string
  id: number | null
}

export interface IComplaintDetailSession {
  id: number
}
