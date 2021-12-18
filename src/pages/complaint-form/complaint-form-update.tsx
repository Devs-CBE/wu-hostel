import React, { useEffect, useState } from 'react'
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form'
import { IComplaintUpdateForm } from '@modal/complaint-form.modal'
import { Button, Grid, Typography } from '@mui/material'
import FormInputText from '@components/FormInputText/FormInputText'
import { yupResolver } from '@hookform/resolvers/yup'
import Box from '@mui/material/Box'
import './complaint-form.scss'
import CommonFilesInput from '@components/FormInputFiles/common-files-input'
import { toBase64 } from '@utils/filereader'
import { complaintUpdateFormSchema } from '@constant/validation-schema.constant'
import { patchApiHandler } from '@utils/apiHandler'
import { toast } from 'react-toastify'

export default function ComplaintFormUpdate(): JSX.Element {
  const methods = useForm<IComplaintUpdateForm>({
    resolver: yupResolver(complaintUpdateFormSchema),
  })

  const [fileName, setFileName] = useState<Array<string>>([])

  const { watch } = methods

  const fileInputWatch = watch('attachment')
  useEffect(() => {
    if (fileInputWatch) {
      setFileName([])
      for (let i = 0; i < fileInputWatch.length; i++) {
        const file: File = fileInputWatch[i]
        fileName.push(file.name)
      }
      console.log(fileName)
    }
    return () => {}
  }, [fileInputWatch, fileName])

  const submitComplaintForm: SubmitHandler<IComplaintUpdateForm> = async (
    data: IComplaintUpdateForm,
  ) => {
    console.log('data submitted', data)
    const documentString = await toBase64(data.attachment[0])
    const apiData = {
      apiUrl: `http://138.197.146.75:9050/v1/api/complaints/upload?complaintsId=${data.complaintId}`,
      payload: documentString,
    }
    const res = await patchApiHandler(apiData)
    res && res.isLoaded
      ? toast.success('Complaint/Request  updated successfully')
      : toast.error('Please contact our admin')
    console.log(res)
  }

  return (
    <div className="wrapper-complaint p-5 flex justify-center">
      <div className="form-container p-7">
        <div className="p-3 flex-1 flex-row justify-center align-center">
          <Typography className="text-center" variant="h3" color="initial">
            Complaint
          </Typography>
          <Box sx={{ mt: '1rem' }}>
            <Typography variant="h6" className="login-description text-center">
              Complaints are welcomed and we will short out soonly
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            <FormProvider {...methods}>
              <form onSubmit={methods.handleSubmit(submitComplaintForm)}>
                <Grid container spacing={{ xs: 2, md: 2 }} columns={12}>
                  <Grid item xs={12} md={12} sm={12}>
                    <FormInputText label="Complaint Id" name="complaintId" />
                  </Grid>
                  <Grid item xs={12} md={12} sm={12}>
                    <CommonFilesInput name="attachment" id="compaint-files" label="compaintFiles" />
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
          </Box>
        </div>
      </div>
    </div>
  )
}
