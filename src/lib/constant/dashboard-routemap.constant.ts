import LocationIcon from '@assests/icons/location.svg'
import BuildingIcon from '@assests/icons/buildings.svg'
import RoomIcon from '@assests/icons/rooms.svg'
import AddUserIcon from '@assests/icons/add-user.svg'

export const masterRoute = [
  {
    name: 'Location Master',
    icon: LocationIcon,
    url: '/location-creation',
  },
  {
    name: 'Building Master',
    icon: BuildingIcon,
    url: '/building-creation',
  },
  {
    name: 'Room Master',
    icon: RoomIcon,
    url: '/room-creation',
  },
  {
    name: 'User Creation',
    icon: AddUserIcon,
    url: '/user-creation',
  },
]

export const complaintRoute = [
  {
    name: 'Create Complaint/Request',
    icon: LocationIcon,
    url: '/complaint-creation',
  },
  {
    name: 'Update Complaint/Request',
    icon: LocationIcon,
    url: '/complaint-creation',
  },
  {
    name: 'Complaint/Request Status',
    icon: LocationIcon,
    url: '/complaint-creation',
  },
]

export const enquiryRoute = [
  {
    name: 'Create Enquiry',
    icon: LocationIcon,
    url: '/complaint-creation',
  },
  {
    name: 'Update Enquiry',
    icon: LocationIcon,
    url: '/complaint-creation',
  },
  {
    name: 'Enquiry Status',
    icon: LocationIcon,
    url: '/complaint-creation',
  },
]

export const expenseRoute = [
  {
    name: 'Add Expenses',
    icon: LocationIcon,
    url: '/expanses',
  },
]
