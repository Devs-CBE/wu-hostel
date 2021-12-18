import React from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import './complaint-form.scss'
import FormInputText from '@components/FormInputText/FormInputText'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { IEnquiryDetailForm } from '@modal/Enquiry-form.modal'
import { yupResolver } from '@hookform/resolvers/yup'
import { enquiryDetailFormSchema } from '@constant/validation-schema.constant'

export default function EnquiryDetailView() {
  const methods = useForm<IEnquiryDetailForm>({
    resolver: yupResolver(enquiryDetailFormSchema),
  })

  const submitEnquiryDetailForm: SubmitHandler<IEnquiryDetailForm> = async (
    data: IEnquiryDetailForm,
  ) => {
    console.log(data)
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
                <form onSubmit={methods.handleSubmit(submitEnquiryDetailForm)}>
                  <FormInputText name="name" label="Name" />
                </form>
              </FormProvider>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  )
}
