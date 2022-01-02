import FormInputSelect from '@components/FormInputSelect/formInputSelect'
import FormInputText from '@components/FormInputText/FormInputText'
import { buildingFormSchema } from '@constant/validation-schema.constant'
import { yupResolver } from '@hookform/resolvers/yup'
import { IBuildingForm } from '@modal/building-form-modal'
import { IApiHandlerReturn } from '@modal/CommonComponent.modal'
import { Box, Button, Grid, Typography } from '@mui/material'
import { getApiHandler, postApiHandler } from '@utils/apiHandler'
import React, { useEffect, useState } from 'react'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import './building-form.scss'
import { buildingFormCreationResponse } from './building-utils'

export default function BuildingForm(): JSX.Element {
  const methods = useForm<IBuildingForm>({
    resolver: yupResolver(buildingFormSchema),
  })

  const [locationList, setLocation] = useState<Array<any>>([])

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

  const submitBuildingForm: SubmitHandler<IBuildingForm> = async (data: IBuildingForm) => {
    console.log('data submitted', data)
    const buildingFormResponseData = buildingFormCreationResponse(data)
    console.log(buildingFormResponseData)
    const apiData = {
      apiUrl: '/v1/api/buildings/create',
      payload: buildingFormResponseData,
    }

    const res = await postApiHandler(apiData)
    res && res.isLoaded
      ? toast.success('Building Created successfully')
      : toast.error('Please contact our admin')
  }

  return (
    <div className="wrapper-enquiry p-5 flex justify-center">
      <div className="form-containers p-7">
        <div className="p-3 flex-1 flex-row justify-center align-center ">
          <Typography className="text-center" variant="h3" color="initial">
            Building Form
          </Typography>
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(submitBuildingForm)}>
              <Grid container spacing={{ xs: 2, md: 2 }} columns={12}>
                <Grid item xs={12} sm={6} md={6}>
                  <FormInputSelect
                    name="locationsDTO"
                    label="Location"
                    optionList={locationList}
                    optionParam="locationName"
                    optionObject={true}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <FormInputText name="buildingName" label="Building Name" />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <FormInputText name="buildingAddress" label="Building Address " />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
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
                    Submit
                  </Button>
                </div>
              </Box>
            </form>
          </FormProvider>
        </div>
      </div>
    </div>
  )
}
