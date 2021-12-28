import * as React from 'react'
import Button from '@mui/material/Button'
import './staff-attendance.scss'
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
import { DataGrid, GridColDef } from '@mui/x-data-grid'

export default function StaffAttendanceForm(): JSX.Element {
  const methods = useForm<IStaffAttendanceForm>({
    resolver: yupResolver(staffFormSchema),
  })

  const [userList, setUser] = React.useState([])

  // Attendance Table

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 300 },
    { field: 'user', headerName: 'Name', width: 200 },
  ]

  const rows = [
    { id: 1, user: 'Raja' },
    { id: 2, user: 'Kavi' },
    { id: 3, user: 'Karthi' },
    { id: 4, user: 'Vel' },
    { id: 5, user: 'Vetri' },
  ]
  // Attendance Table

  React.useEffect(() => {
    async function fetchData() {
      const apiData = {
        apiUrl: 'http://138.197.146.75:9050/v1/api/get/user',
      }
      const res: IApiHandlerReturn = await getApiHandler(apiData)
      if (res.isLoaded) {
        const user = res.responseData?.entites ? res.responseData.entites : []
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
      apiUrl: 'http://138.197.146.75:9050/v1/api/staff/attendance/create',
      payload: StaffAttendanceResponseData,
    }
    const res = await postApiHandler(apiData)
    console.log(res)
    res && res.isLoaded
      ? toast.success('Attendance Updated successfully')
      : toast.error('Please contact our admin')
  }

  return (
    <div className="wrapper-enquiry p-5 flex justify-center">
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
                    <FormInputDatePicker label="Date" name="presentDate" />
                  </Grid>
                </Grid>
                <div style={{ height: 400, width: '100%' }}>
                  <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                  />
                </div>
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
