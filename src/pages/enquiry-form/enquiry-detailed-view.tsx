import React from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import './Enquiry-Form.scss'
import FormInputText from '@components/FormInputText/FormInputText'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { IEnquiryMappingForm } from '@modal/enquiry-detailed-view.modal'
import { postApiHandler } from '@utils/apiHandler'
import { enquiryMappingCreationResponse } from './Enquiry-utils'
import { enquiryMappingFormSchema } from '@constant/validation-schema.constant'

export default function EnquiryDetailView(): JSX.Element {
  const methods = useForm<IEnquiryMappingForm>({
    resolver: yupResolver(enquiryMappingFormSchema),
  })

  const submitEnquiryMappingForm: SubmitHandler<IEnquiryMappingForm> = async (
    data: IEnquiryMappingForm,
  ) => {
    console.log(data)
    const enquiryResponseData = enquiryMappingCreationResponse(data)
    console.log(enquiryResponseData)
    const apiData = {
      apiUrl: 'http://138.197.146.75:9050/v1/api/enquiry/mapping/create',
      payload: enquiryResponseData,
    }

    const res = await postApiHandler(apiData)
    console.log(res)
  }
  return (
    <>
      <div className="wrapper mt-4">
        <div className="form-container p-7">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
              <span>Name</span>
              <Typography variant="subtitle2"></Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <span>Phone Number</span>
              <Typography variant="subtitle2"></Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <span>Email</span>
              <Typography variant="subtitle2"></Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <span>No of People</span>
              <Typography variant="subtitle2"></Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <span>Room Choice</span>
              <Typography variant="subtitle2"></Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <span>Location</span>
              <Typography variant="subtitle2"></Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <span>Building</span>
              <Typography variant="subtitle2"></Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <span>Duration</span>
              <Typography variant="subtitle2"></Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <span>Referal</span>
              <Typography variant="subtitle2"></Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <span>Description</span>
              <Typography variant="subtitle2"></Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <span>Address</span>
              <Typography variant="subtitle2"></Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <span>Zip Code</span>
              <Typography variant="subtitle2"></Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(submitEnquiryMappingForm)}>
                  <FormInputText name="name" label="Admin Name" />
                </form>
              </FormProvider>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  )
}
