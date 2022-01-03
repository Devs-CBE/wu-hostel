import React from 'react'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import CircularProgress from '@mui/material/CircularProgress'
import { Controller, useFormContext } from 'react-hook-form'

interface IFormAutocompleteProps {
  label: string
  name: string
  optionList: any
  optionParam: string
  inputEvent: (value: string) => void
}

export default function FormInputAutocomplete({
  label,
  name,
  optionList,
  optionParam,
  inputEvent,
}: IFormAutocompleteProps) {
  const [open, setOpen] = React.useState(false)
  const loading = open && optionList.length === 0
  const {
    control,
    formState: { errors },
  } = useFormContext()
  const onChangeHandle = (value: any) => {
    inputEvent(value)
  }

  // React.useEffect(() => {
  //   if (!open) {
  //     setOptions([])
  //   }
  // }, [open])

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={null}
      render={({ field }) => (
        <Autocomplete
          {...field}
          open={open}
          onOpen={() => {
            setOpen(true)
          }}
          onClose={() => {
            setOpen(false)
          }}
          renderOption={(props, option) => {
            return (
              <li {...props} key={option.id}>
                {option[optionParam]}
              </li>
            )
          }}
          onChange={(event, data) => {
            field.onChange(data)
          }}
          getOptionLabel={(option: any) => option[optionParam]}
          options={optionList}
          loading={loading}
          renderInput={(params: any) => (
            <TextField
              {...params}
              label={label}
              error={!!errors[name]}
              helperText={errors[name]?.message ?? ''}
              variant="outlined"
              // onChange={(ev: any) => {
              //   if (ev.target.value !== '' || ev.target.value !== null) {
              //     onChangeHandle(ev.target.value)
              //   }
              // }}
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <React.Fragment>
                    {loading ? <CircularProgress color="inherit" size={20} /> : null}
                    {params.InputProps.endAdornment}
                  </React.Fragment>
                ),
              }}
            />
          )}
        />
      )}
    />
  )

  // return (
  //   <Controller
  //     name={name}
  //     control={control}
  //     defaultValue={null}
  //     render={({ field: props }) => (
  //       <Autocomplete
  //         {...props}
  //         fullWidth
  //         options={optionList}
  //         getOptionLabel={(option: any) => option.name}
  //         renderInput={(params) => (
  //           <TextField variant="outlined" {...params} label={label}
  //                       error={!!errors[name]}
  //                       helperText={errors[name]?.message ?? ''} />
  //         )}
  //         onChange={(event, data) => {
  //           props.onChange(data);
  //         }}
  //       />
  //     )}
  //   />
  // );
}
