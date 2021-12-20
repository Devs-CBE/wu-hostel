import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import './complaint-form.scss'
import FormInputText from '@components/FormInputText/FormInputText'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { IEnquiryDetailForm } from '@modal/Enquiry-form.modal'
import { yupResolver } from '@hookform/resolvers/yup'
import { enquiryDetailFormSchema } from '@constant/validation-schema.constant'

export default function EnquiryDetailView(): JSX.Element {
  const methods = useForm<IEnquiryDetailForm>({
    resolver: yupResolver(enquiryDetailFormSchema),
  })

  const initialValue = {
    name: '',
    complaints: '',
    room: '',
    building: '',
    mobile: '',
    email: '',
    remarks: '',
    image: '',
  }
  const [complaintDetail, setComplaintDetail] = useState(initialValue)

  useEffect(() => {
    const complaintDetails = sessionStorage.getItem('complaint_detail')
    const parseData = complaintDetails ? JSON.parse(complaintDetails) : initialValue
    setComplaintDetail(parseData)
  }, [initialValue])

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
              <Typography variant="subtitle2">{complaintDetail?.name}</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <span>Complaints</span>
              <Typography variant="subtitle2">{complaintDetail.complaints}</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <span>Room</span>
              <Typography variant="subtitle2">{complaintDetail.room}</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <span>Email</span>
              <Typography variant="subtitle2">{complaintDetail.email}</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <span>Mobile</span>
              <Typography variant="subtitle2">{complaintDetail.mobile}</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <span>Remarks</span>
              <Typography variant="subtitle2">{complaintDetail.remarks}</Typography>
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
