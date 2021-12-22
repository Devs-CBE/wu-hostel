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
import { IKitchenApi, IKitchenForm } from '@modal/kitchen-form.modal'
import { KitchenCreationResponse } from './kitchen-utils'
import FormInputDatePicker from '@components/FormInputDatePicker/formInputDatePicker'
import { toast } from 'react-toastify'

export default function KitchenExpenseForm(): JSX.Element {
  const methods = useForm<IKitchenForm>({
    resolver: yupResolver(kitchenFormSchema),
  })

  const [buildingList, setBuilding] = useState([])
  const [CategoryId, setCategory] = useState([])

  const expenseStatus = ['Paid', 'UnPaid', 'Hold']

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
  useEffect(() => {
    async function fetchData() {
      const apiData = {
        apiUrl: 'http://138.197.146.75:9050/v1/api/kitchen/expanses/category/{categoryId}',
      }
      const res: IApiHandlerReturn = await getApiHandler(apiData)
      if (res.isLoaded) {
        setCategory(res.responseData.entities)
      }
    }
    fetchData()
  }, [])

  useEffect(() => {
    async function fetchData() {
      const apiData = {
        apiUrl: 'http://138.197.146.75:9050//v1/api/kitchen/expanses/month/{monthYear}',
      }
      const res: IApiHandlerReturn = await getApiHandler(apiData)
      if (res.isLoaded) {
        setCategory(res.responseData.entities)
      }
    }
    fetchData()
  }, [])

  const { watch } = methods

  const submitKitchenForm: SubmitHandler<IKitchenForm> = async (data: IKitchenForm) => {
    console.log('data submitted', data)
    const kitchenResponseData: IKitchenApi = KitchenCreationResponse(data)
    console.log(kitchenResponseData)
    const apiData = {
      apiUrl: 'http://138.197.146.75:9050//v1/api/kitchen/expanses/create',
      payload: kitchenResponseData,
    }
    const res = await postApiHandler(apiData)
    console.log(res)
    res && res.isLoaded ? toast.success('updated') : toast.error('not found')
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
                    <FormInputText name="amountToBePaid" label="Paid Amount" />
                  </Grid>
                  <Grid item xs={12} sm={6} md={6}>
                    <FormInputSelect
                      name="buildings"
                      label="Building"
                      optionList={buildingList}
                      optionParam="buildingName"
                      optionObject={true}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6} md={6}>
                    <FormInputDatePicker label="Date" name="expanseMonthYear" />
                  </Grid>
                  <Grid item xs={12} sm={6} md={6}>
                    <FormInputText name="expanseName" label="ExpenseName" />
                  </Grid>
                  <Grid item xs={12} sm={6} md={6}>
                    <FormInputText name="expansesCategory" label="Expense Category" />
                  </Grid>

                  <Grid item xs={12} sm={6} md={6}>
                    <FormInputSelect
                      name="expansesStatus"
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
