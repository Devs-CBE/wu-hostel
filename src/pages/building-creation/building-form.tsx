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
import { BuildingFormCreationResponse } from './building-utils'

export default function BuildingForm(): JSX.Element {
  const methods = useForm<IBuildingForm>({
    resolver: yupResolver(buildingFormSchema),
  })

  const [buildingList, setBuilding] = useState([])

  const { watch } = methods

  const locationWatch = watch('locationsDTO')

  useEffect(() => {
    async function fetchData() {
      if (locationWatch) {
        const apiData = {
          apiUrl: `http://138.197.146.75:9050/v1/api/buildings/location/{locationId}`,
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
        apiUrl: 'http://138.197.146.75:9050/v1/api/user/buildings/list',
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
    const buildingFormResponseData = BuildingFormCreationResponse(data)
    console.log(buildingFormResponseData)
    const apiData = {
      apiUrl: 'http://138.197.146.75:9050/POST /v1/api/buildings/create',
      payload: buildingFormResponseData,
    }

    const res = await postApiHandler(apiData)
    console.log(res)
    res && res.isLoaded
      ? toast.success('User Created successfully')
      : toast.error('Please contact our admin')
  }

  return (
    <div className="wrapper-enquiry p-5 flex justify-center">
      <div className="form-containers p-7">
        <div className="p-3 flex-1 flex-row justify-center align-center ">
          <Typography className="text-center" variant="h3" color="initial">
            Building Form
          </Typography>
          <Box sx={{ flexGrow: 1 }}>
            <FormProvider {...methods}>
              <form onSubmit={methods.handleSubmit(submitBuildingForm)}>
                <Grid container spacing={{ xs: 2, md: 2 }} columns={12}>
                  <Grid item xs={12} sm={6} md={12}></Grid>
                  <Grid item xs={12} sm={6} md={6}>
                    <FormInputSelect
                      name="buildingName"
                      label="Building Name "
                      optionList={buildingList}
                      optionObject={false}
                      optionParam="buildingName"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={6}>
                    <FormInputSelect
                      name="buildingAddress"
                      label="Building Address "
                      optionList={locationList}
                      optionObject={false}
                      optionParam="locationName"
                    />
                  </Grid>

                  <Grid item xs={12} sm={6} md={6}>
                    <FormInputText name="location" label="Location" />
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
          </Box>
        </div>
      </div>
    </div>
  )
}
