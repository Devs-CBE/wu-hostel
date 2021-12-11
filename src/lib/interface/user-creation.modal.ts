export interface IUserCreationForm {
  address: string
  buildingsDTO: IBuildingsDto[]
  email: string
  name: string
  password: string
  phoneNumber: string
  roomsDTO: IRoomsDto
  userType: string
  zipCode: string
}

export interface IBuildingsDto {
  buildingName: string
  id: number
  rooms: Array<any>
}

export interface IRoomsDto {
  roomName: {
    id?: number
  }
}

// api response modal
export interface IUserCreationFormApi {
  address: string
  buildingsDTO: IBuildingsDtoApi[]
  email: string
  id: number
  name: string
  password: string
  phoneNumber: string
  roomsDTO: IRoomsDtoApi
  userType: string
  zipCode: string
}

export interface IBuildingsDtoApi {
  buildingAddress: string
  buildingName: string
  createAt: string
  createdBy: string
  deleted: boolean
  id: number
  latitude: string
  locationsDTO: Partial<ILocationsDtoApi>
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
  id: number | undefined
  locationName: string
  publish: boolean
  updateAt: string
  updatedBy: string
}

export interface IRoomsDtoApi {
  buildingsDTO: IBuildingsDto2Api
  id?: number
  roomCapacity: number
  roomFloor: number
  roomName: string
  roomType: string
}

export interface IBuildingsDto2Api {
  buildingAddress: string
  buildingName: string
  createAt: string
  createdBy: string
  deleted: boolean
  id: number
  latitude: string
  locationsDTO: ILocationsDto2Api
  longitude: string
  publish: boolean
  updateAt: string
  updatedBy: string
  zipCode: string
}

export interface ILocationsDto2Api {
  createAt: string
  createdBy: string
  deleted: boolean
  id: number
  locationName: string
  publish: boolean
  updateAt: string
  updatedBy: string
}
