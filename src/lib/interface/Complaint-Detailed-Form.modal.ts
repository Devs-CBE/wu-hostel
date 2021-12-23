export interface IcomplaintDetailedForm {
  complaintStatus: string
  complaints: number
  description: string
}

export interface IcomplaintDetailedFormApi {
  complaintStatus: string
  complaints: number
  description: string
  id: number | null
}
