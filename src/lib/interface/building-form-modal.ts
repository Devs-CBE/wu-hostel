export interface IBuildingForm {
  buildingAddress: string
  buildingName: string
  locationsDTO: any
  zipCode: string
}

export interface ILocationsDto {
  location: {
    id?: number | null
  }
}

// api response modal
export interface IBuildingFormApi {
  buildingAddress: string
  buildingName: string
  createAt: string
  createdBy: string
  deleted: boolean
  id: number | null
  latitude: string
  locationsDTO: ILocationsDtoApi
  longitude: string
  publish: boolean
  updateAt: string
  updatedBy: string
  zipCode: string
}

export interface ILocationsDtoApi {
  createAt: string
  createdBy: string
  deleted: boolean
  id?: number | null
  locationName: string
  publish: boolean
  updateAt: string
  updatedBy: string
}
