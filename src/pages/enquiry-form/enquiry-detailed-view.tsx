/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import './Enquiry-Form.scss'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { IEnquiryMappingApi, IEnquiryMappingForm } from '@modal/enquiry-detailed-view.modal'
import { getApiHandler, postApiHandler } from '@utils/apiHandler'
import { enquiryMappingCreationResponse } from './Enquiry-utils'
import { enquiryMappingFormSchema } from '@constant/validation-schema.constant'
import { Box } from '@mui/system'
import { Button } from '@mui/material'
import FormInputSelect from '@components/FormInputSelect/formInputSelect'
import { IApiHandlerReturn } from '@modal/CommonComponent.modal'
import { toast } from 'react-toastify'

export default function EnquiryDetailView(): JSX.Element {
  const methods = useForm<IEnquiryMappingForm>({
    resolver: yupResolver(enquiryMappingFormSchema),
  })

  const [userList, setUser] = React.useState<Array<any>>([])

  React.useEffect(() => {
    async function fetchData() {
      const apiData = {
        apiUrl: '/v1/api/get/user',
      }
      const res: IApiHandlerReturn = await getApiHandler(apiData)
      if (res.isLoaded) {
        const user = res.responseData.entities
        setUser(user)
      }
    }
    fetchData()
  }, [])

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
  const [enquiryDetail, setEnquiryDetail] = useState<any>(initialValue)

  useEffect(() => {
    const enquiryDetails = sessionStorage.getItem('enquiry_detail')!
    const parseData = JSON.parse(enquiryDetails)
    setEnquiryDetail(parseData)
  }, [])

  const submitEnquiryMappingForm: SubmitHandler<IEnquiryMappingForm> = async (
    data: IEnquiryMappingForm,
  ) => {
    console.log('data submitted', data)

    const enquiryResponseData: IEnquiryMappingApi = enquiryMappingCreationResponse(
      data,
      enquiryDetail,
    )

    console.log(enquiryResponseData)
    const apiData = {
      apiUrl: '/v1/api/enquiry/mapping/create',
      payload: enquiryResponseData,
    }

    const res = await postApiHandler(apiData)
    res && res.isLoaded
      ? toast.success('Enquiry mapped successfully')
      : toast.error('Please contact our admin')
    console.log(res)
  }
  return (
    <>
      <div className="wrapper-enquiry mt-4 ">
        <Grid
          container
          spacing={1}
          direction="row"
          justifyContent="space-evenly"
          alignItems="flex-start"
          alignContent="stretch"
          wrap="nowrap"
        >
          <Grid item xs={10} sm={5} md={5}>
            <div className="form-container p-7">
              <Typography className="text-center" variant="h3" color="initial">
                Complaint Detailed View
              </Typography>
              <Grid
                container
                paddingTop={2}
                textAlign={'left'}
                spacing={{ xs: 2, md: 2 }}
                columns={12}
              >
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
              </Grid>
            </div>
          </Grid>
          <Grid item xs={10} sm={5} md={5}>
            <div className="form-container p-7">
              <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(submitEnquiryMappingForm)}>
                  <Grid container marginTop={2} spacing={2} columns={12}>
                    <Grid item xs={12} sm={12} md={12}>
                      <FormInputSelect
                        name="adminId"
                        label="Admin"
                        optionList={userList}
                        optionObject={true}
                        optionParam="name"
                      />
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
                        Update Complaint
                      </Button>
                    </div>
                  </Box>
                </form>
              </FormProvider>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  )
}
