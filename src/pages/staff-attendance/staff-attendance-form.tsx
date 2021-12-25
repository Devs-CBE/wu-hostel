import * as React from 'react'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { staffFormSchema } from '@constant/validation-schema.constant'
import { yupResolver } from '@hookform/resolvers/yup'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { IStaffAttendanceForm, IStaffAttendanceFormApi } from '@modal/staff-attendance-form'
import { StaffAttendanceCreationResponse } from './staff-attendance-utils'
import { IApiHandlerReturn } from '@modal/CommonComponent.modal'
import { getApiHandler, postApiHandler } from '@utils/apiHandler'
import { toast } from 'react-toastify'
import { Grid } from '@mui/material'
import FormInputDatePicker from '@components/FormInputDatePicker/formInputDatePicker'
import FormInputToggle from '@components/FormInputToggle/formInputToggle'
import FormInputSelect from '@components/FormInputSelect/formInputSelect'

export default function StaffAttendanceForm(): JSX.Element {
  const methods = useForm<IStaffAttendanceForm>({
    resolver: yupResolver(staffFormSchema),
  })

  const [userList, setUser] = React.useState<Array<any>>([])

  React.useEffect(() => {
    async function fetchData() {
      const apiData = {
        apiUrl: '/v1/api/get/user',
      }
      const res: IApiHandlerReturn = await getApiHandler(apiData)
      if (res.isLoaded) {
        const user = res.responseData.entities
        setUser(user)
      }
    }
    fetchData()
  }, [])

  const submitStaffAttendanceForm: SubmitHandler<IStaffAttendanceForm> = async (
    data: IStaffAttendanceForm,
  ) => {
    console.log('data submitted', data)
    const StaffAttendanceResponseData: IStaffAttendanceFormApi =
      StaffAttendanceCreationResponse(data)
    console.log(StaffAttendanceResponseData)
    const apiData = {
      apiUrl: '/v1/api/staff/attendance/create',
      payload: StaffAttendanceResponseData,
    }
    const res = await postApiHandler(apiData)
    console.log(res)
    res && res.isLoaded
      ? toast.success('Attendance Updated successfully')
      : toast.error('Please contact our admin')
  }

  return (
    <div className="wrapper-login p-5 flex justify-center">
      <div className="form-container p-7">
        <div className="p-3 flex-1 flex-row justify-center align-center">
          <Typography className="text-center" variant="h3" color="initial">
            Staff Attendance
          </Typography>
          <Box sx={{ flexGrow: 1 }}>
            <FormProvider {...methods}>
              <form onSubmit={methods.handleSubmit(submitStaffAttendanceForm)}>
                <Grid container spacing={{ xs: 2, md: 2 }} columns={12}>
                  <Grid item xs={12} md={12} sm={12}>
                    <FormInputSelect
                      optionList={userList}
                      optionParam="name"
                      optionObject={true}
                      label="User"
                      name="user"
                    />
                  </Grid>
                  <Grid item xs={12} md={12} sm={12}>
                    <FormInputDatePicker label="Date" name="presentDate" />
                  </Grid>
                  <Grid item xs={12} md={12} sm={12}>
                    <FormInputToggle label="Present / Absent" name="present" />
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
                      Submit
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
