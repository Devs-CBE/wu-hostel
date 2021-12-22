import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import './Enquiry-Form.scss'
import FormInputText from '@components/FormInputText/FormInputText'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { IEnquiryMappingApi, IEnquiryMappingForm } from '@modal/enquiry-detailed-view.modal'
import { postApiHandler } from '@utils/apiHandler'
import { enquiryMappingCreationResponse } from './Enquiry-utils'
import { enquiryMappingFormSchema } from '@constant/validation-schema.constant'
import { Box } from '@mui/system'
import { Button } from '@mui/material'
import { toast } from 'react-toastify'

export default function EnquiryDetailView() {
  const methods = useForm<IEnquiryMappingForm>({
    resolver: yupResolver(enquiryMappingFormSchema),
  })

  const initialValue = {
    name: '',
    Phonenumber: '',
    email: '',
    noOfPeople: '',
    roomchoice: '',
    location: '',
    building: '',
    duration: '',
    referal: '',
    description: '',
    address: '',
    zipcode: '',
  }
  const [enquiryDetail, setEnquiryDetail] = useState(initialValue)

  useEffect(() => {
    const enquiryDetails = sessionStorage.getItem('enquiry_Detail')
    const parseData = enquiryDetails ? JSON.parse(enquiryDetails) : initialValue
    setEnquiryDetail(parseData)
  }, [initialValue])

  const submitEnquiryMappingForm: SubmitHandler<IEnquiryMappingForm> = async (
    data: IEnquiryMappingForm,
  ) => {
    console.log('data submitted', data)

    const enquiryResponseData: IEnquiryMappingApi = enquiryMappingCreationResponse(data)

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
      <div className="wrapper wrapper-enquiry mt-4 justify-center">
        <div className="form-container p-7">
          <div className="p-1 flex-1 flex-row justify-center align-center">
            <Box sx={{ flexGrow: 1 }}>
              <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(submitEnquiryMappingForm)}>
                  <Grid container spacing={{ xs: 2, md: 2 }} columns={12}>
                    <Grid item xs={12} sm={6} md={4}>
                      <span>Name</span>
                      <Typography variant="subtitle2">{enquiryDetail?.name}</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                      <span>Phone Number</span>
                      <Typography variant="subtitle2">{enquiryDetail.Phonenumber}</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                      <span>Email</span>
                      <Typography variant="subtitle2">{enquiryDetail.email}</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                      <span>No. of people</span>
                      <Typography variant="subtitle2">{enquiryDetail.noOfPeople}</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                      <span>Room Choice</span>
                      <Typography variant="subtitle2">{enquiryDetail.roomchoice}</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                      <span>Location</span>
                      <Typography variant="subtitle2">{enquiryDetail.location}</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                      <span>Building</span>
                      <Typography variant="subtitle2">{enquiryDetail.building}</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                      <span>Duration</span>
                      <Typography variant="subtitle2">{enquiryDetail.duration}</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                      <span>Referal</span>
                      <Typography variant="subtitle2">{enquiryDetail.referal}</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                      <span>Description</span>
                      <Typography variant="subtitle2">{enquiryDetail.description}</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                      <span>Address</span>
                      <Typography variant="subtitle2">{enquiryDetail.address}</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                      <span>Zipcode</span>
                      <Typography variant="subtitle2">{enquiryDetail.zipcode}</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} className="wrapper">
                      <FormInputText name="adminId" label="Admin Name" />
                    </Grid>
                    <Box marginTop={3} display="flex">
                      <div className="my-2.5 ml-10">
                        <Button type="submit" variant="contained" color="primary">
                          Submit
                        </Button>
                      </div>
                    </Box>
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
