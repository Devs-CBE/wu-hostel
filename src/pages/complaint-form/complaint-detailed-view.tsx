import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import './complaint-form.scss'

import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import FormInputText from '@components/FormInputText/FormInputText'

import { yupResolver } from '@hookform/resolvers/yup'
import { complaintDetailedFormSchema } from '@constant/validation-schema.constant'
import {
  IcomplaintDetailedForm,
  IcomplaintDetailedFormApi,
} from '@modal/Complaint-Detailed-Form.modal'
import { getApiHandler, postApiHandler } from '@utils/apiHandler'
import { toast } from 'react-toastify'
import { ComplaintDetailedFormCreationResponse } from './Complaint-utils'
import { IApiHandlerReturn } from '@modal/CommonComponent.modal'

export default function ComplaintDetailedView(): JSX.Element {
  const methods = useForm<IcomplaintDetailedForm>({
    resolver: yupResolver(complaintDetailedFormSchema),
  })

  const [complaintDetail, setComplaintDetail] = useState<any>()
  const [complaintMapping, setComplaintMapping] = useState<any>()

  useEffect(() => {
    const complaintDetails = sessionStorage.getItem('complaint_detail')
    const parseData = complaintDetails ? JSON.parse(complaintDetails) : null
    setComplaintDetail(parseData)
  }, [])

  useEffect(() => {
    async function fetchData() {
      if (complaintDetail?.id) {
        const apiData = {
          apiUrl: `/v1/api/complaints/mapping/list/${complaintDetail.id}`,
        }
        const res: IApiHandlerReturn = await getApiHandler(apiData)
        if (res.isLoaded) {
          setComplaintMapping(res.responseData.entities)
        }
      }
    }
    fetchData()
  }, [complaintDetail])

  const submitComplaintDetailedForm: SubmitHandler<IcomplaintDetailedForm> = async (
    data: IcomplaintDetailedForm,
  ) => {
    console.log('data submitted', data)
    console.log('complaint mapping', complaintMapping)

    const complaintResponseData: IcomplaintDetailedFormApi = ComplaintDetailedFormCreationResponse(
      data,
      complaintDetail,
    )

    console.log(complaintResponseData)
    const apiData = {
      apiUrl: '/v1/api/complaints/mapping/create',
      payload: complaintResponseData,
    }
    const res = await postApiHandler(apiData)
    console.log(res)
    res && res.isLoaded
      ? toast.success('Complaint Updated successfully')
      : toast.error('Please contact our admin')
  }
  return (
    <>
      <div className="wrapper-complaint mt-4 ">
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
                <Grid item xs={12} sm={12} md={4} lg={6}>
                  <span>Name</span>
                  <Typography variant="subtitle2">{complaintDetail?.name}</Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={6}>
                  <span>Complaints Description</span>
                  <Typography variant="subtitle2">
                    {complaintDetail?.complaintDescription}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={6}>
                  <span>Complaints Type</span>
                  <Typography variant="subtitle2">{complaintDetail?.complaintsType}</Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={6}>
                  <span>Mobile</span>
                  <Typography variant="subtitle2">{complaintDetail?.contactNumber}</Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={6}>
                  <span>Remarks</span>
                  <Typography variant="subtitle2">{complaintDetail?.complaintStatus}</Typography>
                </Grid>
              </Grid>
            </div>
          </Grid>
          <Grid item xs={10} sm={5} md={5}>
            <div className="form-container p-7">
              <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(submitComplaintDetailedForm)}>
                  <Grid container marginTop={2} spacing={2} columns={12}>
                    <Grid item xs={12} sm={12} md={12}>
                      <FormInputText name="complaintStatus" label="Complaint Status" />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
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
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  )
}
