import { locationApiDefaultData } from '@constant/api-default-value'
import { ILocation, ILocationApi } from '@modal/location-building-room.modal'

export function locationResponseDto(location: ILocation): ILocationApi {
  const responseData = locationApiDefaultData
  responseData.locationName = location.locationName
  if (location.buildings.length > 0) {
    for (let index = 0; index < location.buildings.length; index++) {
      const buildingDto = location.buildings[index]
      responseData.buildings[index].buildingName = buildingDto.buildingName
      responseData.buildings[index].buildingAddress = buildingDto.buildingAddress
      responseData.buildings[index].zipCode = buildingDto.zipCode
      responseData.buildings[index].createAt = ''
      responseData.buildings[index].createdBy = ''
      responseData.buildings[index].deleted = false
      responseData.buildings[index].id = null
      responseData.buildings[index].latitude = ''
      responseData.buildings[index].longitude = ''
      responseData.buildings[index].publish = true
      responseData.buildings[index].updateAt = ''
      responseData.buildings[index].updatedBy = ''
      for (let roomIndex = 0; roomIndex < buildingDto.rooms.length; roomIndex++) {
        const roomDto = buildingDto.rooms[roomIndex]
        responseData.buildings[index].rooms[roomIndex] = {
          id: null,
          createAt: '',
          createdBy: '',
          deleted: false,
          publish: false,
          roomCapacity: roomDto.roomCapacity,
          roomFloor: roomDto.roomFloor,
          roomName: roomDto.roomName,
          roomType: roomDto.roomType,
          updateAt: '',
          updatedBy: '',
        }
      }
    }
  } else {
    responseData.buildings = []
  }

  return responseData
}
