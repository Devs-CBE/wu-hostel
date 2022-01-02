import LocationIcon from '@assests/icons/location.svg'
import BuildingIcon from '@assests/icons/buildings.svg'
import RoomIcon from '@assests/icons/rooms.svg'
import AddUserIcon from '@assests/icons/add-user.svg'
import CreateEnquiryIcon from '@assests/icons/create_enquiry.svg'

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
  {
    name: 'Staff Attendance',
    icon: AddUserIcon,
    url: '/staff-attendance',
  },
  {
    name: 'Create Enquiry',
    icon: CreateEnquiryIcon,
    url: '/enquiry-creation',
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
    url: '/complaint-update',
  },
  {
    name: 'Complaint/Request Status',
    icon: LocationIcon,
    url: '/complaint-creation',
  },
]

export const expenseRoute = [
  {
    name: 'Monthly Rent',
    icon: LocationIcon,
    url: '/monthly-rent',
  },
  {
    name: 'Kitchen Expenses',
    icon: LocationIcon,
    url: '/kitchen-expense',
  },
  {
    name: 'Expenses',
    icon: LocationIcon,
    url: '/expense',
  },
  {
    name: 'Expense Category',
    icon: LocationIcon,
    url: '/expense-category',
  },
]
