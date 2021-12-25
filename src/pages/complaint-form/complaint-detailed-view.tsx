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
      <div className="wrapper wrapper-complaint mt-4 justify-center">
        <div className="form-container p-7">
          <Typography className="text-center" variant="h3" color="initial">
            Complaint Detailed View
          </Typography>
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(submitComplaintDetailedForm)}>
              <Grid container spacing={{ xs: 2, md: 2 }} columns={12}>
                <Grid item xs={12} sm={6} md={4}>
                  <span>Name</span>
                  <Typography variant="subtitle2">{complaintDetail?.name}</Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <span>Complaints</span>
                  <Typography variant="subtitle2">
                    {complaintDetail?.complaintDescription}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <span>Mobile</span>
                  <Typography variant="subtitle2">{complaintDetail?.contactNumber}</Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <span>Remarks</span>
                  <Typography variant="subtitle2">{complaintDetail?.complaintStatus}</Typography>
                </Grid>
              </Grid>
              <Grid container spacing={2} columns={12}>
                <Grid item xs={12} sm={6} md={4}>
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
      </div>
    </>
  )
}
