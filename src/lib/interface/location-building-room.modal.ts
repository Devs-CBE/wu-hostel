export interface ILocation {
  buildings: IBuilding[]
  locationName: string
}

export interface IBuilding {
  buildingAddress: string
  buildingName: string
  rooms: IRoom[]
  zipCode: string
}

export interface IRoom {
  roomCapacity: number | undefined
  roomFloor: number | undefined
  roomName: string
  roomType: string
}

export interface ILocationApi {
  buildings: IBuildingApi[]
  createAt: string
  createdBy: string
  deleted: boolean
  id: number | null
  locationName: string
  publish: boolean
  updateAt: string
  updatedBy: string
}

export interface IBuildingApi {
  buildingAddress: string
  buildingName: string
  createAt: string
  createdBy: string
  deleted: boolean
  id: number | null
  latitude: string
  longitude: string
  publish: boolean
  rooms: IRoomApi[]
  updateAt: string
  updatedBy: string
  zipCode: string
}

export interface IRoomApi {
  createAt: string
  createdBy: string
  deleted: boolean
  id: number | null
  publish: boolean
  roomCapacity: number | undefined
  roomFloor: number | undefined
  roomName: string
  roomType: string
  updateAt: string
  updatedBy: string
}
