import React from 'react'
import { IFileInputProps } from '@modal/CommonComponent.modal'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { useFormContext } from 'react-hook-form'
import './common-file-input.scss'

export default function CommonFilesInput({
  name,
  id,
  label,
  multipleFiles = false,
}: IFileInputProps): JSX.Element {
  const {
    register,
    formState: { errors },
  } = useFormContext()
  return (
    <>
      <TextField
        error={!!errors[name]}
        id={id}
        helperText={errors[name]?.message ?? ''}
        type="file"
        {...register(name)}
        style={{ display: 'none' }}
        inputProps={{ multiple: multipleFiles }}
        fullWidth
      />
      <label htmlFor={id}>
        <Button fullWidth variant="outlined" component="span" size="large" color="primary">
          Drag and Drop your file Or Click to choose
        </Button>
      </label>
    </>
  )
}
