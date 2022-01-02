/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import './Enquiry-Form.scss'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import { SubmitHandler, FormProvider, useForm } from 'react-hook-form'
import FormInputText from '@components/FormInputText/FormInputText'
import { IEnquiryForm } from '@modal/Enquiry-form.modal'
import FormInputSelect from '@components/FormInputSelect/formInputSelect'
import { enquiryCreationResponse } from './Enquiry-utils'
import { enquiryFormSchema } from '@constant/validation-schema.constant'
import { getApiHandler, postApiHandler } from '@utils/apiHandler'
import { IApiHandlerReturn } from '@modal/CommonComponent.modal'
import { toast } from 'react-toastify'

export default function EnquiryForm(): JSX.Element {
  const methods = useForm<IEnquiryForm>({
    resolver: yupResolver(enquiryFormSchema),
  })
  const [buildingList, setBuilding] = useState([])

  const { watch } = methods

  const locationWatch = watch('locations')

  useEffect(() => {
    async function fetchData() {
      if (locationWatch) {
        const apiData = {
          apiUrl: `/v1/api/buildings/location/${locationWatch.id}`,
        }
        const res: IApiHandlerReturn = await getApiHandler(apiData)
        if (res.isLoaded) {
          setBuilding(res.responseData.entities)
        }
      }
    }
    fetchData()
  }, [locationWatch])

  const [locationList, setLocation] = useState([])

  useEffect(() => {
    async function fetchData() {
      const apiData = {
        apiUrl: '/v1/api/location/list',
      }
      const res: IApiHandlerReturn = await getApiHandler(apiData)
      if (res.isLoaded) {
        setLocation(res.responseData.entities)
      }
    }
    fetchData()
  }, [])

  const submitEnquiryForm: SubmitHandler<IEnquiryForm> = async (data: IEnquiryForm) => {
    console.log('data submitted', data)
    const enquiryResponseData = enquiryCreationResponse(data)
    console.log(enquiryResponseData)
    const apiData = {
      apiUrl: '/v1/api/enquiry/create',
      payload: enquiryResponseData,
    }

    const res = await postApiHandler(apiData)
    console.log(res)
    res && res.isLoaded
      ? toast.success('Enquiry Created successfully')
      : toast.error('Please contact our admin')
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
                      optionList={locationList}
                      optionObject={true}
                      optionParam="locationName"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <FormInputSelect
                      name="buildings"
                      label="Building"
                      optionList={buildingList}
                      optionObject={true}
                      optionParam="buildingName"
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
