import React from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import './complaint-form.scss'

import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import FormInputText from '@components/FormInputText/FormInputText'

import { yupResolver } from '@hookform/resolvers/yup'
import { complaintDetailedFormSchema } from '@constant/validation-schema.constant'
import { IcomplaintDetailedForm, IcomplaintDetailedFormApi } from '@modal/Complaint-Detailed-Form'
import { postApiHandler } from '@utils/apiHandler'
import { toast } from 'react-toastify'
import { ComplaintDetailedFormCreationResponse } from './Complaint-utils'
import { Box } from '@mui/system'

export default function ComplaintDetailedView(): JSX.Element {
  const methods = useForm<IcomplaintDetailedForm>({
    resolver: yupResolver(complaintDetailedFormSchema),
  })

  const submitComplaintDetailedForm: SubmitHandler<IcomplaintDetailedForm> = async (
    data: IcomplaintDetailedForm,
  ) => {
    console.log('data submitted', data)

    const complaintResponseData: IcomplaintDetailedFormApi =
      ComplaintDetailedFormCreationResponse(data)

    console.log(complaintResponseData)
    const apiData = {
      apiUrl: 'http://138.197.146.75:9050POST /v1/api/complaints/mapping/create',
      payload: complaintResponseData,
    }
    const res = await postApiHandler(apiData)
    console.log(res)
    res && res.isLoaded
      ? toast.success('User Created successfully')
      : toast.error('Please contact our admin')
  }
  return (
    <>
      <div className="wrapper wrapper-complaint mt-4 justify-center">
        <div className="form-container p-7">
          <div className="p-1 flex-1 flex-row justify-center align-center">
            <Typography className="text-center" variant="h3" color="initial">
              Complaint Detailed View
            </Typography>
            <Box sx={{ flexGrow: 1 }}>
              <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(submitComplaintDetailedForm)}>
                  <Grid container spacing={{ xs: 2, md: 2 }} columns={12}>
                    <Grid item xs={12} sm={6} md={12}></Grid>
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
                    <Grid item xs={12} sm={6} md={4} className=" wrapper-complaints">
                      <FormInputText name="complaints" label="Complaint" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} className=" wrapper-complaints">
                      <FormInputText name="complaint Status" label="Complaint Status" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={9.3} className=" wrapper-complaints">
                      <FormInputText
                        name="description"
                        label="Description"
                        inputMultiline={true}
                        inputRows={3}
                      />
                    </Grid>
                  </Grid>
                </form>
              </FormProvider>
            </Box>
          </div>
        </div>
      </div>
    </>
  )
}
