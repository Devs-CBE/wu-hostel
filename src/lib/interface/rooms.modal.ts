export interface IRoomsApi {
  buildingsDTO: IBuildingsDtoApi
  id: number
  roomCapacity: number
  roomFloor: number
  roomName: string
  roomType: 'BILLABLE' | 'NON_BILLABLE'
}

export interface IBuildingsDtoApi {
  buildingAddress: string
  buildingName: string
  createAt: string
  createdBy: string
  deleted: boolean
  id: number
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
  id: number
  locationName: string
  publish: boolean
  updateAt: string
  updatedBy: string
}

export interface IRoomsForm {
  buildingsDTO: any | IBuildingsDtoApi
  roomCapacity: number
  roomFloor: number
  roomName: string
  roomType: 'BILLABLE' | 'NON_BILLABLE'
}
