import React, { useEffect, useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import Box from '@mui/material/Box'
import './user-creation.scss'
import { SubmitHandler, FormProvider, useForm } from 'react-hook-form'
import FormInputText from '@components/FormInputText/FormInputText'
import { IUserCreationForm, IUserCreationFormApi } from '@modal/user-creation.modal'
import { userCreationSchema } from '@constant/validation-schema.constant'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import { getApiHandler, postApiHandler } from '@utils/apiHandler'
import { userCreationResponse } from './user-creation-utils'
import FormInputSelect from '@components/FormInputSelect/formInputSelect'
import { IApiHandlerReturn } from '@modal/CommonComponent.modal'
import { toast } from 'react-toastify'

export default function UserCreationForm(): JSX.Element {
  const methods = useForm<IUserCreationForm>({
    resolver: yupResolver(userCreationSchema),
  })

  const [buildingList, setBuilding] = useState([])
  const [roomsList, setRooms] = useState<Array<any>>([])

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

  const { watch } = methods

  const buildingsWatch = watch('buildingsDTO')

  useEffect(() => {
    if (buildingsWatch !== [] && buildingsWatch) {
      const rooms = []
      for (let i = 0; i < buildingsWatch.length; i++) {
        const element = buildingsWatch[i]
        rooms.push(...element.rooms)
      }
      setRooms(rooms)
    }
  }, [buildingsWatch])

  const userTypeList = ['ADMIN', 'SUPER_ADMIN', 'USER', 'STAFF', 'KITCHEN_STAFF']

  const { reset } = methods

  const submitEnquiryForm: SubmitHandler<IUserCreationForm> = async (data: IUserCreationForm) => {
    console.log('data submitted', data)
    const userResponse: IUserCreationFormApi = userCreationResponse(data)
    console.log(userResponse)
    const apiData = {
      apiUrl: '/v1/api/location/create',
      payload: userResponse,
    }
    const res = await postApiHandler(apiData)
    console.log(res)
    res && res.isLoaded
      ? toast.success('User Created successfully')
      : toast.error('Please contact our admin')
    reset(
      {
        address: '',
        buildingsDTO: [],
        email: '',
        name: '',
        password: '',
        phoneNumber: '',
        roomsDTO: {},
        userType: '',
        zipCode: '',
      },
      {
        keepErrors: false,
        keepDirty: false,
      },
    )
  }

  return (
    <>
      <div className="wrapper-user-creation p-5 flex justify-center">
        <div className="form-container p-7">
          <div className="p-3 flex-1 flex-row justify-center align-center">
            <Typography className="text-center" variant="h3" color="initial">
              User Creation
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
                      <FormInputText label="Name" name="name" />
                    </Grid>
                    <Grid item xs={12} md={4} sm={4}>
                      <FormInputText label="Password" name="password" />
                    </Grid>
                    <Grid item xs={12} md={4} sm={4}>
                      <FormInputText label="Phone Number" name="phoneNumber" />
                    </Grid>
                    <Grid item xs={12} md={4} sm={4}>
                      <FormInputText label="Email" name="email" />
                    </Grid>
                    <Grid item xs={12} md={4} sm={4}>
                      <FormInputSelect
                        label="User Type"
                        name="userType"
                        optionList={userTypeList}
                        optionObject={false}
                      />
                    </Grid>
                    <Grid item xs={12} md={4} sm={4}>
                      <FormInputText label="Zipcode" name="zipCode" />
                    </Grid>
                    <Grid item xs={12} md={12} sm={12}>
                      <FormInputText
                        label="Address"
                        inputMultiline={true}
                        inputRows={3}
                        name="address"
                      />
                    </Grid>
                    <Grid item xs={12} md={4} sm={4}>
                      <FormInputSelect
                        label="Buildings"
                        name="buildingsDTO"
                        optionList={buildingList}
                        optionParam="buildingName"
                        optionObject={true}
                        multiSelect={true}
                      />
                    </Grid>
                    <Grid item xs={12} md={4} sm={4}>
                      <FormInputSelect
                        label="Room"
                        name="roomsDTO.roomName"
                        optionList={roomsList}
                        optionParam="roomName"
                        optionObject={true}
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
    </>
  )
}
