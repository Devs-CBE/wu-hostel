/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import './kitchen-form.scss'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import { SubmitHandler, FormProvider, useForm } from 'react-hook-form'
import FormInputText from '@components/FormInputText/FormInputText'
import FormInputSelect from '@components/FormInputSelect/formInputSelect'
import { kitchenFormSchema } from '@constant/validation-schema.constant'
import { getApiHandler, postApiHandler } from '@utils/apiHandler'
import { IApiHandlerReturn } from '@modal/CommonComponent.modal'
import { IKitchenForm } from '@modal/kitchen-form.modal'
import { KitchenCreationResponse } from './kitchen-utils'

import { makeStyles } from '@mui/styles'
import { styled } from '@mui/styles'

import TextField from '@mui/material/TextField'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import DatePicker from '@mui/lab/DatePicker'

export default function KitchenExpenseForm(): JSX.Element {
  // const [value, onChange] = useState(new Date())
  const [value, setValue] = React.useState<Date | null>(null) //using from mui date component

  const methods = useForm<IKitchenForm>({
    resolver: yupResolver(kitchenFormSchema),
  })

  const [buildingList, setBuilding] = useState([])
  const expenseStatus = ['Paid', 'UnPaid', 'Hold']

  const { watch } = methods

  useEffect(() => {
    async function fetchData() {
      const apiData = {
        apiUrl: 'http://138.197.146.75:9050/v1/api/buildings/list',
      }
      const res: IApiHandlerReturn = await getApiHandler(apiData)
      if (res.isLoaded) {
        setBuilding(res.responseData.entities)
      }
    }

    fetchData()
  }, [])

  const submitKitchenForm: SubmitHandler<IKitchenForm> = async (data: IKitchenForm) => {
    console.log('data submitted', data)
    const kitchenResponseData = KitchenCreationResponse(data)
    console.log(kitchenResponseData)
    const apiData = {
      apiUrl: 'http://138.197.146.75:9050//v1/api/kitchen/expanses/create',
      payload: kitchenResponseData,
    }
    const res = await postApiHandler(apiData)
    console.log(res)
  }
  //refered by Enquiry Form
  return (
    <div className="wrapper-enquiry p-5 flex justify-center">
      <div className="form-containers p-7">
        <div className="p-3 flex-1 flex-row justify-center align-center">
          <Typography className="text-center" variant="h3" color="initial">
            Kitchen Expense
          </Typography>
          <Box sx={{ flexGrow: 1 }}>
            <FormProvider {...methods}>
              <form onSubmit={methods.handleSubmit(submitKitchenForm)}>
                <Grid container spacing={{ xs: 2, md: 2 }} columns={12}>
                  <Grid item xs={12} sm={6} md={6}>
                    <FormInputText name="name" label="Paid Amount" />
                  </Grid>
                  <Grid item xs={12} sm={6} md={6}>
                    <FormInputSelect
                      name="buildings"
                      label="Building"
                      optionList={buildingList}
                      optionObject={true}
                      optionParam="buildingName"
                    />
                  </Grid>

                  <Grid item xs={12} sm={6} md={6}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DatePicker
                        label="Expense Date"
                        value={value}
                        onChange={(newValue) => {
                          setValue(newValue)
                        }}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </LocalizationProvider>
                  </Grid>
                  <Grid item xs={12} sm={6} md={6}>
                    <FormInputText name="expenseName" label="ExpenseName" />
                  </Grid>
                  <Grid item xs={12} sm={6} md={6}>
                    <FormInputText name="expenseCategory" label="Expense Category" />
                  </Grid>

                  <Grid item xs={12} sm={6} md={6}>
                    <FormInputSelect
                      name="expensestatus"
                      label="Expense Status"
                      optionList={expenseStatus}
                      optionObject={false}
                    />
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
                <Box justifyContent="center" marginTop={5} display="flex" alignContent="center">
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
