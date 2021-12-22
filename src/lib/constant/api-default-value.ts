import { IcomplaintDetailedFormApi } from '@modal/Complaint-Detailed-Form'
import { IComplaintApi } from '@modal/complaint-form.modal'
import { IEnquiryMappingApi } from '@modal/enquiry-detailed-view.modal'
import { IEnquiryApi } from '@modal/Enquiry-form.modal'
import { IKitchenApi } from '@modal/kitchen-form.modal'
import { IExpenseFormApi } from '@modal/Expense-form.modal'
import { ILocationApi } from '@modal/location-building-room.modal'
import { IRoomsApi } from '@modal/rooms.modal'
import { IStaffAttendanceFormApi } from '@modal/staff-attendance-form'
import { IUserCreationFormApi } from '@modal/user-creation.modal'

export const locationApiDefaultData: ILocationApi = {
  buildings: [
    {
      buildingAddress: '',
      buildingName: '',
      createAt: '',
      createdBy: '',
      deleted: false,
      id: 0,
      latitude: '',
      longitude: '',
      publish: true,
      rooms: [
        {
          createAt: '',
          createdBy: '',
          deleted: false,
          id: 0,
          publish: true,
          roomCapacity: 0,
          roomFloor: 0,
          roomName: '',
          roomType: '',
          updateAt: '',
          updatedBy: '',
        },
      ],
      updateAt: '',
      updatedBy: '',
      zipCode: '',
    },
  ],
  createAt: '',
  createdBy: '',
  deleted: false,
  id: 0,
  locationName: '',
  publish: true,
  updateAt: '',
  updatedBy: '',
}

export const userCreationApiDefaultData: IUserCreationFormApi = {
  address: '',
  buildingsDTO: [
    {
      buildingAddress: '',
      buildingName: '',
      createAt: '',
      createdBy: '',
      deleted: false,
      id: 0,
      latitude: '',
      locationsDTO: {
        createAt: '',
        createdBy: '',
        deleted: false,
        id: 0,
        locationName: '',
        publish: true,
        updateAt: '',
        updatedBy: '',
      },
      longitude: '',
      publish: true,
      updateAt: '',
      updatedBy: '',
      zipCode: '',
    },
  ],
  email: '',
  id: 0,
  name: '',
  password: '',
  phoneNumber: '',
  roomsDTO: {
    buildingsDTO: {
      buildingAddress: '',
      buildingName: '',
      createAt: '',
      createdBy: '',
      deleted: false,
      id: 0,
      latitude: '',
      locationsDTO: {
        createAt: '',
        createdBy: '',
        deleted: false,
        id: 0,
        locationName: '',
        publish: true,
        updateAt: '',
        updatedBy: '',
      },
      longitude: '',
      publish: true,
      updateAt: '',
      updatedBy: '',
      zipCode: '',
    },
    id: null,
    roomCapacity: 0,
    roomFloor: 0,
    roomName: '',
    roomType: '',
  },
  userType: '',
  zipCode: '',
}

export const roomCreationApiDafaultData: IRoomsApi = {
  buildingsDTO: {
    buildingAddress: '',
    buildingName: '',
    createAt: '',
    createdBy: '',
    deleted: false,
    id: 0,
    latitude: '',
    locationsDTO: {
      createAt: '',
      createdBy: '',
      deleted: false,
      id: 0,
      locationName: '',
      publish: true,
      updateAt: '',
      updatedBy: '',
    },
    longitude: '',
    publish: true,
    updateAt: '',
    updatedBy: '',
    zipCode: '',
  },
  id: 0,
  roomCapacity: 0,
  roomFloor: 0,
  roomName: '',
  roomType: 'BILLABLE',
}

export const enquiryFormApiDeaultData: IEnquiryApi = {
  address: '',
  adminId: 0,
  buildings: 0,
  description: '',
  duration: '',
  email: '',
  enquiryStatus: 'NEW',
  id: 0,
  locations: 0,
  name: '',
  numberOfPeople: 0,
  phoneNumber: '',
  referral: '',
  roomChoice: '',
  zipCode: '',
}

export const complaintFormApiDeaultData: IComplaintApi = {
  attachment: '',
  complaintDescription: '',
  compaintStatus: 'NEW',
  complaintsType: '',
  contactNumber: '',
  downloadPath: '',
  id: 0,
  user: 0,
}
export const expenseFormApiDeaultData: IExpenseFormApi = {
  amountToBePaid: 0,
  buildings: 0,
  description: '',
  expanseMonthYear: '',
  expanseName: '',
  expansesCategory: 0,
  expansesStatus: '',
  id: 0,
  recurring: true,
}

export const kitchenFormApiDeaultData: IKitchenApi = {
  amountToBePaid: 0,
  buildings: 0,
  description: '',
  expanseMonthYear: '',
  expanseName: '',
  expansesCategory: 0,
  expansesStatus: '',
  id: 0,
  recurring: true,
}

export const StaffAttendanceFormApiDeaultData: IStaffAttendanceFormApi = {
  id: 0,
  present: true,
  presentDate: new Date(),
  user: 0,
}

export const enquiryMappingDefaultData: IEnquiryMappingApi = {
  address: '',
  adminId: 0,
  buildings: 0,
  date: '',
  description: '',
  duration: '',
  email: '',
  enquiryStatus: '',
  id: 0,
  locations: 0,
  name: '',
  numberOfPeople: 0,
  phoneNumber: '',
  referral: '',
  roomChoice: '',
  zipCode: '',
}

export const complaintDetailedFormApiDefaultData: IcomplaintDetailedFormApi = {
  complaintStatus: '',
  complaints: 0,
  description: '',
  id: 0,
}
