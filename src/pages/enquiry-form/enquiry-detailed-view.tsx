import React from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import './Enquiry-Form.scss'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { IEnquiryMappingApi, IEnquiryMappingForm } from '@modal/enquiry-detailed-view.modal'
import { postApiHandler } from '@utils/apiHandler'
import { enquiryMappingCreationResponse } from './Enquiry-utils'
import { enquiryMappingFormSchema } from '@constant/validation-schema.constant'
import { Box } from '@mui/system'
import { Button } from '@mui/material'
import FormInputSelect from '@components/FormInputSelect/formInputSelect'

export default function EnquiryDetailView(): JSX.Element {
  const methods = useForm<IEnquiryMappingForm>({
    resolver: yupResolver(enquiryMappingFormSchema),
  })

  const adminType = ['ADMIN', 'SUPER_ADMIN', 'USER', 'STAFF', 'KITCHEN_STAFF']

  const submitEnquiryMappingForm: SubmitHandler<IEnquiryMappingForm> = async (
    data: IEnquiryMappingForm,
  ) => {
    console.log('data submitted', data)

    const enquiryResponseData: IEnquiryMappingApi = enquiryMappingCreationResponse(data)

    console.log(enquiryResponseData)
    const apiData = {
      apiUrl: '/v1/api/enquiry/mapping/create',
      payload: enquiryResponseData,
    }

    const res = await postApiHandler(apiData)
    console.log(res)
  }
  return (
    <>
      <div className=" wrapper-enquiry mt-4 justify-center">
        <Grid
          container
          spacing={1}
          direction="row"
          justifyContent="space-evenly"
          alignItems="flex-start"
          alignContent="stretch"
          wrap="nowrap"
        >
          <Grid item xs={12} sm={5} md={5}>
            <div className="form-container p-7">
              <Typography className="text-center" variant="h3" color="initial">
                Enquiry Detailed View
              </Typography>
              <Grid
                container
                paddingTop={2}
                textAlign={'left'}
                spacing={{ xs: 2, md: 2 }}
                columns={12}
              >
                <Grid item xs={12} sm={12} md={4} lg={4}>
                  <span>Address</span>
                  <Typography variant="subtitle2"></Typography>
                </Grid>

                <Grid item xs={12} sm={12} md={4} lg={4}>
                  <span>Buildings</span>
                  <Typography variant="subtitle2"></Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4}>
                  <span>Date</span>
                  <Typography variant="subtitle2"></Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4}>
                  <span>Description</span>
                  <Typography variant="subtitle2"></Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4}>
                  <span>Duration</span>
                  <Typography variant="subtitle2"></Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4}>
                  <span>E-mail</span>
                  <Typography variant="subtitle2"></Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4}>
                  <span>Enquiry status</span>
                  <Typography variant="subtitle2"></Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4}>
                  <span>Location</span>
                  <Typography variant="subtitle2"></Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4}>
                  <span>Name</span>
                  <Typography variant="subtitle2"></Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4}>
                  <span>No of people</span>
                  <Typography variant="subtitle2"></Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4}>
                  <span>Phone number</span>
                  <Typography variant="subtitle2"></Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4}>
                  <span>Referral</span>
                  <Typography variant="subtitle2"></Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4}>
                  <span>Room choice</span>
                  <Typography variant="subtitle2"></Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4}>
                  <span>Zipcode</span>
                  <Typography variant="subtitle2"></Typography>
                </Grid>
              </Grid>
            </div>
          </Grid>
          <Grid item xs={12} sm={5} md={5}>
            <div className="form-container p-7">
              <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(submitEnquiryMappingForm)}>
                  <Grid container marginTop={2} spacing={2} columns={12}>
                    <Grid item xs={12} sm={12} md={12}>
                      <FormInputSelect
                        name="enquiryStatus"
                        label="Admin Id"
                        optionList={adminType}
                        optionObject={false}
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
                        Update Enquiry
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
