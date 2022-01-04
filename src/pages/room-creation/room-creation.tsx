import React, { useEffect, useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import Box from '@mui/material/Box'
import './room-creation.scss'
import { SubmitHandler, FormProvider, useForm } from 'react-hook-form'
import FormInputText from '@components/FormInputText/FormInputText'
import { roomCreationSchema } from '@constant/validation-schema.constant'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import { IRoomsApi, IRoomsForm } from '@modal/rooms.modal'
import { IApiHandlerReturn } from '@modal/CommonComponent.modal'
import { getApiHandler, postApiHandler } from '@utils/apiHandler'
import FormInputSelect from '@components/FormInputSelect/formInputSelect'
import { roomResponseDto } from './room.utils'
import { toast } from 'react-toastify'
import FormInputAutocomplete from '@components/FormInputAutocomplete/formInputAutocomplete'

export default function RoomCreation(): JSX.Element {
  const [buildings, setBuilding] = useState([])
  const methods = useForm<IRoomsForm>({
    resolver: yupResolver(roomCreationSchema),
  })

  useEffect(() => {
    async function fetchData() {
      const apiData = {
        apiUrl: '/v1/api/buildings/list',
      }
      const res: IApiHandlerReturn = await getApiHandler(apiData)
      if (res.isLoaded) {
        setBuilding(res.responseData.entities)
      }
    }
    fetchData()
  }, [])

  const submitEnquiryForm: SubmitHandler<IRoomsForm> = async (data: IRoomsForm) => {
    console.log('data submitted', data)
    const userResponse: IRoomsApi = roomResponseDto(data)
    console.log(userResponse)
    const apiData = {
      apiUrl: '/v1/api/rooms/create',
      payload: userResponse,
    }
    const res = await postApiHandler(apiData)
    res && res.isLoaded
      ? toast.success('Room Created successfully')
      : toast.error('Please contact our admin')
  }

  return (
    <div className="wrapper-user-creation p-5 flex justify-center">
      <div className="form-container p-7">
        <div className="p-3 flex-1 flex-row justify-center align-center">
          <Typography className="text-center" variant="h3" color="initial">
            Room Creation
          </Typography>
          <Box sx={{ mt: '1rem' }}>
            <Typography variant="h6" className="text-center">
              Create a user and maintain your hostel inside your hands
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            <FormProvider {...methods}>
              <form onSubmit={methods.handleSubmit(submitEnquiryForm)}>
                <Grid container spacing={2} columns={12}>
                  <Grid item xs={12} md={4} sm={4}>
                    <FormInputAutocomplete
                      label="Building"
                      name="buildingsDTO"
                      optionParam="buildingName"
                      optionList={buildings}
                    />
                  </Grid>
                  <Grid item xs={12} md={4} sm={4}>
                    <FormInputText label="Room Capacity" name="roomCapacity" />
                  </Grid>
                  <Grid item xs={12} md={4} sm={4}>
                    <FormInputText label="Room Floor" name="roomFloor" />
                  </Grid>
                  <Grid item xs={12} md={4} sm={4}>
                    <FormInputText label="Room Name" name="roomName" />
                  </Grid>
                  <Grid item xs={12} md={4} sm={4}>
                    <FormInputSelect
                      label="Room Type"
                      name="roomType"
                      optionObject={false}
                      optionList={['BILLABLE', 'NON_BILLABLE']}
                    />
                  </Grid>
                </Grid>
                <Box justifyContent="center" marginTop={3} display="flex" alignContent="center">
                  <div>
                    <Button type="reset" variant="outlined">
                      Cancel
                    </Button>
                  </div>
                  <div className="ml-5">
                    <Button type="submit" variant="contained">
                      Create
                    </Button>
                  </div>
                </Box>
              </form>
            </FormProvider>
          </Box>
        </div>
      </div>
    </div>
  )
}
