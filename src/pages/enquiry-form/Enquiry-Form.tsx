/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import './Enquiry-Form.scss'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import { SubmitHandler, FormProvider, useForm } from 'react-hook-form'
import { SchemaOf, string, object, number } from 'yup'
import FormInputText from '@components/FormInputText/FormInputText'
import { IEnquiry } from '@modal/Enquiry-form.modal'
import FormInputSelect from '@components/FormInputSelect/formInputSelect'
import { EnquiryCreationResponse } from './Enquiry-utils'
import { enquiryFormSchema } from '@constant/validation-schema.constant'
import { postApiHandler } from '@utils/apiHandler'

export default function EnquiryForm(): JSX.Element {
  const methods = useForm<IEnquiry>({
    resolver: yupResolver(enquiryFormSchema),
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

  const submitEnquiryForm: SubmitHandler<IEnquiry> = async (data: IEnquiry) => {
    console.log('data submitted', data)
    const enquiryResponseData = EnquiryCreationResponse(data)
    console.log(enquiryResponseData)
    const apiData = {
      apiUrl: 'http://138.197.146.75:9050//v1/api/enquiry/create',
      payload: enquiryResponseData,
    }
    const res = await postApiHandler(apiData)
    console.log(res)
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
