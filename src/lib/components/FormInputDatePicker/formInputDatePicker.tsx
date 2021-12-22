import * as React from 'react'
import TextField from '@mui/material/TextField'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import DatePicker from '@mui/lab/DatePicker'
import { Controller, useFormContext } from 'react-hook-form'

interface IFormDatePickerProps {
  label: string
  name: string
  inputFullWidth?: boolean
  initialValue?: Date | null
}

export default function FormInputDatePicker({
  label,
  name,
  inputFullWidth = true,
  initialValue = null,
}: IFormDatePickerProps): JSX.Element {
  const {
    control,
    formState: { errors },
  } = useFormContext()

  return (
    <Controller
      name={name}
      defaultValue={new Date()}
      control={control}
      render={({ field }) => {
        return (
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              value={field.value}
              onChange={(e) => field.onChange(e)}
              renderInput={(props) => (
                <TextField
                  {...props}
                  error={!!errors[name]}
                  helperText={errors[name]?.message ?? ''}
                  fullWidth={inputFullWidth}
                />
              )}
            />
          </LocalizationProvider>
        )
      }}
    />
  )
}
