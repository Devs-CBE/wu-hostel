import * as React from 'react'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { staffFormSchema } from '@constant/validation-schema.constant'
import { yupResolver } from '@hookform/resolvers/yup'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { IStaffAttendanceForm, IStaffAttendanceFormApi } from '@modal/staff-attendance-form'
import { StaffAttendanceCreationResponse } from './staff-attendance-utils'
import { IApiHandlerReturn } from '@modal/CommonComponent.modal'
import { getApiHandler, postApiHandler } from '@utils/apiHandler'
import { toast } from 'react-toastify'
// Date & Time Import
import Stack from '@mui/material/Stack'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import DesktopDatePicker from '@mui/lab/DesktopDatePicker'
import { Grid } from '@mui/material'
import FormInputText from '@components/FormInputText/FormInputText'
import FormInputDatePicker from '@components/FormInputDatePicker/formInputDatePicker'

// Code Start
export default function StaffAttendanceForm(): JSX.Element {
  const methods = useForm<IStaffAttendanceForm>({
    resolver: yupResolver(staffFormSchema),
  })
  const { reset } = methods
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
      ? toast.success('User Created successfully')
      : toast.error('Please contact our admin')
  }
  // Date
  const [value, setValue] = React.useState<Date | null>(new Date('2014-08-18T21:11:54'))

  const handleChange = (newValue: Date | null) => {
    setValue(newValue)
  }

  return (
    <div className="wrapper-login p-5 flex justify-center">
      <div className="form-container p-7">
        <div className="p-3 flex-1 flex-row justify-center align-center">
          <Typography className="text-center" variant="h3" color="initial">
            Login
          </Typography>
          <Box sx={{ mt: '1rem' }}>
            <Typography variant="h6" className="text-center">
              Sign in and start managing your Hostellers!
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            <FormProvider {...methods}>
              <form onSubmit={methods.handleSubmit(submitStaffAttendanceForm)}>
                <Grid container spacing={{ xs: 2, md: 2 }} columns={12}>
                  {/* <Grid item xs={12} md={12} sm={12}>
                    <FormInputText label="Employee ID" name="emp_id" />
                  </Grid>
                  <Grid item xs={12} md={12} sm={12}>
                    <FormInputText label="Employee ID" name="emp_id" />
                  </Grid> */}
                  <Grid item xs={12} md={12} sm={12}>
                    <FormInputDatePicker label="Employee ID" name="presentDate" />
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
                      Login
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

{
  /* <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography>Staff Attendance Form</Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="emp_id"
            label="Employee ID"
            name="emp_id"
            autoComplete="emp_id"
            autoFocus
          />
          <Box>
            <FormControl fullWidth sx={{ mt: 2, mb: 2 }}>
              <InputLabel id="user-type-table">User Type</InputLabel>
              <Select labelId="user-type-table" id="user-type-table-list" label="User Type">
                <MenuItem value={20}>Kitchen</MenuItem>
                <MenuItem value={30}>Driver</MenuItem>
                <MenuItem value={40}>Technicians</MenuItem>
                <MenuItem value={50}>Temporary</MenuItem>
                <MenuItem value={60}>Other</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth sx={{ mt: 2, mb: 2 }}>
              <InputLabel id="attendance-status">Present</InputLabel>
              <Select labelId="Present" id="Present" label="Attendance Table">
                <MenuItem value={50}>Yes</MenuItem>
                <MenuItem value={60}>No</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth sx={{ mt: 2, mb: 2 }}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Stack spacing={3}>
                  <DesktopDatePicker
                    label="Date"
                    inputFormat="MM/dd/yyyy"
                    value={value}
                    onChange={handleChange}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </Stack>
              </LocalizationProvider>
            </FormControl>
          </Box>
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Submit
          </Button>
        </Box>
      </Box>
    </Container> */
}
