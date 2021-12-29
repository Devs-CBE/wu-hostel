import { ILocation } from '@modal/location-building-room.modal'

export const roomDefaultValue = {
  roomCapacity: undefined,
  roomFloor: undefined,
  roomName: '',
  roomType: '',
}

export const buildingDefaultValue = {
  buildingAddress: '',
  buildingName: '',
  zipCode: '',
  rooms: [{ ...roomDefaultValue }],
}

export const locationDefaultValue: ILocation = {
  buildings: [],
  locationName: '',
}
