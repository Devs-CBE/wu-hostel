import { IReactHookFormInputSelectProps } from '@modal/CommonComponent.modal'
import { MenuItem } from '@mui/material'
import TextField from '@mui/material/TextField'
import React from 'react'
import { useFormContext } from 'react-hook-form'

export default function FormInputSelect({
  label,
  name,
  optionList,
  optionParam,
  optionObject,
  multiSelect = false,
}: IReactHookFormInputSelectProps): JSX.Element {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <>
      <TextField
        select
        label={label}
        variant="outlined"
        error={!!errors[name]}
        helperText={errors[name]?.message ?? ''}
        fullWidth
        margin="dense"
        {...register(name)}
        defaultValue={multiSelect ? [] : ''}
        SelectProps={{
          multiple: multiSelect,
        }}
      >
        {optionObject &&
          optionParam &&
          optionList.map((option, index) => (
            <MenuItem key={index} value={option}>
              {option[optionParam]}
            </MenuItem>
          ))}
        {!optionObject &&
          optionList.map((option, index) => (
            <MenuItem key={index} value={option}>
              {option}
            </MenuItem>
          ))}
      </TextField>
    </>
  )
}
