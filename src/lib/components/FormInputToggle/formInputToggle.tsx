import React from 'react'
import Switch from '@mui/material/Switch'
import { useFormContext } from 'react-hook-form'
import { IFormInputToggle } from '@modal/CommonComponent.modal'
import { FormControl, FormControlLabel, FormGroup, FormHelperText } from '@mui/material'

export default function FormInputToggle({
  name,
  label,
  initialValue = true,
  labelPlacement = 'top',
}: IFormInputToggle): JSX.Element {
  const {
    register,
    formState: { errors },
  } = useFormContext()
  return (
    <FormControl component="fieldset" variant="outlined">
      <FormGroup>
        <FormControlLabel
          control={<Switch defaultChecked={initialValue} {...register(name)} />}
          label={label}
          labelPlacement={labelPlacement}
        />
      </FormGroup>
      {!!errors[name] ? <FormHelperText> {errors[name]?.message ?? ''}</FormHelperText> : ''}
    </FormControl>
  )
}
