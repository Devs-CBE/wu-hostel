/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import './Denquiry-form.scss'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import { SubmitHandler, FormProvider, useForm } from 'react-hook-form'
import { SchemaOf, string, object } from 'yup'
import FormInputText from '@components/FormInputText/FormInputText'
import { IDenquiry } from '@modal/Denquiry-form.modal'
import FormInputSelect from '@components/FormInputSelect/formInputSelect'

const formSchema: SchemaOf<IDenquiry> = object({
  name: string().required('Required'),
  phoneNumber: string().required('Required'),
  email: string().required('Required'),
  numberOfPeople: string().required('Required'),
  roomChoice: string().required('Required'),
  locations: object().required('Required'),
  buildings: object().required('Required'),
  address: string().required('Required'),
  description: string().required('Required'),
  zipCode: string().required('Required'),
  duration: string().required('Required'),
  referal: string().required('Required'),
})

export default function EnquiryForm(): JSX.Element {
  const methods = useForm<IDenquiry>({
    resolver: yupResolver(formSchema),
  })

  const buildingList = [
    {
      name: 'newBuilding',
      location: 'saravanan',
    },
    {
      name: 'newBuilding',
      location: 'saravanan1',
    },
    {
      name: 'newBuilding',
      location: 'saravanan2',
    },
  ]

  const submitEnquiryForm: SubmitHandler<IDenquiry> = async (data: IDenquiry) => {
    console.log('data submitted', data)
  }

  return (
    <div className="wrapper-enquiry p-5 flex justify-center">
      <div className="form-container p-7">
        <div className="p-3 flex-1 flex-row justify-center align-center">
          <Typography className="text-center" variant="h3" color="initial">
            Enquiry Form
          </Typography>
          <Box sx={{ flexGrow: 1 }}>
            <FormProvider {...methods}>
              <form onSubmit={methods.handleSubmit(submitEnquiryForm)}>
                <Grid container spacing={{ xs: 2, md: 2 }} columns={12}>
                  <Grid item xs={12} sm={6} md={4}>
                    <FormInputText name="name" label="Name" />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <FormInputText name="phoneNumber" label="Phone Number" />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <FormInputText name="email" label="Email" />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <FormInputText name="numberOfPeople" label="No of People" />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <FormInputText name="roomChoice" label="Room Choice" />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <FormInputSelect
                      name="locations"
                      label="Location"
                      optionList={buildingList}
                      optionObject={true}
                      optionParam="location"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <FormInputSelect
                      name="buildings"
                      label="Building"
                      optionList={buildingList}
                      optionObject={true}
                      optionParam="location"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <FormInputText name="duration" label="Duration" />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <FormInputText name="referal" label="Referal" />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <FormInputText
                      name="description"
                      label="Description"
                      inputMultiline={true}
                      inputRows={3}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <FormInputText
                      name="address"
                      label="Address"
                      inputMultiline={true}
                      inputRows={3}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <FormInputText name="zipCode" label="Zip Code" />
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
                      Create Enquiry
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
