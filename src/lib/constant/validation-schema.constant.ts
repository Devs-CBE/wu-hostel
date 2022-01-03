import { IComplaintForm, IComplaintUpdateForm } from '@modal/complaint-form.modal'
import { IcomplaintDetailedForm } from '@modal/Complaint-Detailed-Form.modal'
import { IEnquiryMappingForm } from '@modal/enquiry-detailed-view.modal'
import { IEnquiryDetailForm, IEnquiryForm } from '@modal/Enquiry-form.modal'
import { IKitchenForm } from '@modal/kitchen-form.modal'
import { IExpenseForm } from '@modal/Expense-form.modal'
import { ILocation } from '@modal/location-building-room.modal'
import { IRoomsForm } from '@modal/rooms.modal'
import { IUserCreationForm } from '@modal/user-creation.modal'
import { IStaffAttendanceForm } from '@modal/staff-attendance-form'
import * as Yup from 'yup'
import { IMonthlyRentForm } from '@modal/monthly-rent.modal'
import { IBuildingForm } from '@modal/building-form-modal'
import { expenseStatus, roomType } from '@constant/constant'
import { IDashBoardFilter } from '@modal/dashboard.modal'
import { IExpenseCategoryForm } from '@modal/expense-category.modals'

export const userCreationSchema: Yup.SchemaOf<IUserCreationForm> = Yup.object({
  address: Yup.string().required(),
  email: Yup.string().required(),
  name: Yup.string().required(),
  password: Yup.string().required(),
  phoneNumber: Yup.string().required(),
  userType: Yup.string().required(),
  zipCode: Yup.string().required(),
  buildingsDTO: Yup.array(),
  roomsDTO: Yup.object(),
})

export const roomCreationSchema: Yup.SchemaOf<IRoomsForm> = Yup.object({
  buildingsDTO: Yup.object().required(),
  roomCapacity: Yup.number().required(),
  roomFloor: Yup.number().required(),
  roomName: Yup.string().required(),
  roomType: Yup.mixed().oneOf(roomType),
})

export const locationCreationSchema: Yup.SchemaOf<ILocation> = Yup.object({
  locationName: Yup.string().required('Required'),
  buildings: Yup.array().of(
    Yup.object({
      buildingAddress: Yup.mixed().optional(),
      buildingName: Yup.mixed().optional(),
      rooms: Yup.array().of(
        Yup.object({
          roomCapacity: Yup.mixed().optional(),
          roomFloor: Yup.mixed().optional(),
          roomName: Yup.mixed().optional(),
          roomType: Yup.mixed().optional(),
        }),
      ),
      zipCode: Yup.mixed().optional(),
    }),
  ),
})

export const enquiryFormSchema: Yup.SchemaOf<IEnquiryForm> = Yup.object({
  name: Yup.string().required('Required'),
  phoneNumber: Yup.string().required('Required'),
  email: Yup.string().required('Required'),
  numberOfPeople: Yup.number().required('Required'),
  roomChoice: Yup.string().required('Required'),
  locations: Yup.object().required('Required'),
  buildings: Yup.object().required('Required'),
  address: Yup.string().required('Required'),
  description: Yup.string().required('Required'),
  zipCode: Yup.string().required('Required'),
  duration: Yup.string().required('Required'),
  referal: Yup.string().required('Required'),
})

export const expenseFormSchema: Yup.SchemaOf<IExpenseForm> = Yup.object({
  amountToBePaid: Yup.number().required('Required'),
  buildings: Yup.object().required('Required'),
  description: Yup.string().required('Required'),
  expanseMonthYear: Yup.string().required('Required'),
  expanseName: Yup.string().required('Required'),
  expansesCategory: Yup.number().required('Required'),
  expansesStatus: Yup.string().required('Required'),
  recurring: Yup.boolean().required('Required'),
})

export const complaintFormSchema: Yup.SchemaOf<IComplaintForm> = Yup.object({
  attachment: Yup.mixed().required('Required'),
  complaintDescription: Yup.string().required('Required'),
  complaintsType: Yup.string().required('Required'),
  contactNumber: Yup.string().required('Required'),
})

export const complaintUpdateFormSchema: Yup.SchemaOf<IComplaintUpdateForm> = Yup.object({
  attachment: Yup.mixed().required('Required'),
  complaintId: Yup.number().required('Required'),
})

export const enquiryDetailFormSchema: Yup.SchemaOf<IEnquiryDetailForm> = Yup.object({
  adminId: Yup.number().required('Required'),
})

export const kitchenFormSchema: Yup.SchemaOf<IKitchenForm> = Yup.object({
  amountToBePaid: Yup.number().required('Required'),
  description: Yup.string().required('Required'),
  expanseMonthYear: Yup.string().required('Required'),
  expanseName: Yup.string().required('Required'),
  expansesCategory: Yup.object().required('Required'),
  expansesStatus: Yup.string().required('Required').oneOf(expenseStatus),
  recurring: Yup.boolean().required('Required'),
})
export const buildingFormSchema: Yup.SchemaOf<IBuildingForm> = Yup.object({
  buildingAddress: Yup.string().required('Required'),
  buildingName: Yup.string().required('Required'),
  zipCode: Yup.string().required('Required'),
  locationsDTO: Yup.object().shape({
    locationName: Yup.string().required('Required'),
    id: Yup.number().required('Required'),
  }),
})
export const staffFormSchema: Yup.SchemaOf<IStaffAttendanceForm> = Yup.object({
  present: Yup.boolean().required('Required'),
  presentDate: Yup.date().required('Required'),
  user: Yup.mixed().required('Required'),
})

export const enquiryMappingFormSchema: Yup.SchemaOf<IEnquiryMappingForm> = Yup.object({
  adminId: Yup.number().required('Required'),
})

export const complaintDetailedFormSchema: Yup.SchemaOf<IcomplaintDetailedForm> = Yup.object({
  complaintStatus: Yup.string().required('Required'),
  complaints: Yup.number().required('Required'),
  description: Yup.string().required('Required'),
})

export const monthlyRentFormSchema: Yup.SchemaOf<IMonthlyRentForm> = Yup.object({
  amount: Yup.number().required('Required'),
  fullyPaid: Yup.boolean().required('Required'),
  monthAndYear: Yup.string().required('Required'),
  user: Yup.object().test(
    'is_valid_object',
    'Please select the option',
    (value: any) => typeof value === 'object',
  ),
})

export const dashboardFormSchema: Yup.SchemaOf<IDashBoardFilter> = Yup.object({
  dateFilter: Yup.date().optional(),
  status: Yup.string().optional(),
})

export const expenseCategoryFormSchema: Yup.SchemaOf<IExpenseCategoryForm> = Yup.object({
  categoryName: Yup.string().required('required'),
  expanseCategoryType: Yup.string().required('required'),
})
