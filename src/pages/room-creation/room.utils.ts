import { roomCreationApiDafaultData } from '@constant/api-default-value'
import { IRoomsApi, IRoomsForm } from '@modal/rooms.modal'

export function roomResponseDto(room: IRoomsForm): IRoomsApi {
  const responseData = roomCreationApiDafaultData
  responseData.buildingsDTO.buildingName = room.buildingsDTO.buildingName
  responseData.buildingsDTO.buildingAddress = room.buildingsDTO.buildingAddress
  responseData.buildingsDTO.id = room.buildingsDTO.id
  responseData.roomCapacity = room.roomCapacity
  responseData.roomFloor = room.roomFloor
  responseData.roomName = room.roomName
  responseData.roomType = room.roomType
  return responseData
}
