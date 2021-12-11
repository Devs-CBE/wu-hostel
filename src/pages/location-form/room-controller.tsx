import React from 'react'
import FormInputText from '@components/FormInputText/FormInputText'
import IconButton from '@mui/material/IconButton'
import Grid from '@mui/material/Grid'
import Box from '@mui/system/Box'
import { useFieldArray } from 'react-hook-form'
import DeleteIcon from '@mui/icons-material/Delete'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import { roomDefaultValue } from '@constant/form-default-value'

interface IRoomControllerProps {
  nestIndex: number
  control: any
}

export default function RoomController({ nestIndex, control }: IRoomControllerProps): JSX.Element {
  const { fields, append, remove } = useFieldArray({
    control,
    name: `buildings[${nestIndex}].rooms`,
  })

  return (
    <>
      <label>Rooms</label>
      {fields.map((item, k) => {
        return (
          <Grid container spacing={{ xs: 2, md: 2 }} columns={12} key={item.id}>
            <Grid item xs={12} md={4} sm={4}>
              <FormInputText
                label="Room Capacity"
                name={`buildings[${nestIndex}].rooms[${k}].roomCapacity`}
              />
            </Grid>
            <Grid item xs={12} md={4} sm={4}>
              <FormInputText
                label="Room Floor"
                name={`buildings[${nestIndex}].rooms[${k}].roomFloor`}
              />
            </Grid>
            <Grid item xs={12} md={4} sm={4}>
              <FormInputText
                label="Room Name"
                name={`buildings[${nestIndex}].rooms[${k}].roomName`}
              />
            </Grid>
            <Grid item xs={12} md={4} sm={4}>
              <FormInputText
                label="Room Type"
                name={`buildings[${nestIndex}].rooms[${k}].roomType`}
              />
            </Grid>
            <Box justifyContent="center" marginTop={3} display="flex" alignContent="center">
              <IconButton onClick={() => remove(k)} aria-label="delete">
                <DeleteIcon />
              </IconButton>
              <IconButton onClick={() => append(roomDefaultValue)} aria-label="add">
                <AddCircleOutlineIcon />
              </IconButton>
            </Box>
          </Grid>
        )
      })}
    </>
  )
}
