import * as React from 'react'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { IoAccessibilityOutline } from 'react-icons/io5'
import { staffFormSchema } from '@constant/validation-schema.constant'
import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useEffect } from 'react'
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
    <Container component="main" maxWidth="xs">
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
    </Container>
  )
}
