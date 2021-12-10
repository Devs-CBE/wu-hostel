import { IComplaintForm, IComplaintUpdateForm } from '@modal/complaint-form.modal'
import { IEnquiryForm } from '@modal/Enquiry-form.modal'
import { ILocation } from '@modal/location-building-room.modal'
import { IRoomsForm } from '@modal/rooms.modal'
import { IUserCreationForm } from '@modal/user-creation.modal'
import * as Yup from 'yup'

export const userCreationSchema: Yup.SchemaOf<IUserCreationForm> = Yup.object({
  address: Yup.mixed().required(),
  email: Yup.mixed().required(),
  name: Yup.mixed().required(),
  password: Yup.mixed().required(),
  phoneNumber: Yup.mixed().required(),
  userType: Yup.mixed().required(),
  zipCode: Yup.mixed().required(),
  buildingsDTO: Yup.array(),
  roomsDTO: Yup.object({
    id: Yup.number(),
  }),
})

export const roomCreationSchema: Yup.SchemaOf<IRoomsForm> = Yup.object({
  buildingsDTO: Yup.mixed().required(),
  roomCapacity: Yup.number().required(),
  roomFloor: Yup.number().required(),
  roomName: Yup.string().required(),
  roomType: Yup.mixed().required(),
})

export const locationCreationSchema: Yup.SchemaOf<ILocation> = Yup.object({
  locationName: Yup.mixed().optional(),
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
  adminId: Yup.number().required('Required'),
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
