import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import { SubmitHandler, FormProvider, useForm } from 'react-hook-form'
import FormInputText from '@components/FormInputText/FormInputText'
import FormInputSelect from '@components/FormInputSelect/formInputSelect'
import { yupResolver } from '@hookform/resolvers/yup'
import React, { useEffect, useState } from 'react'
import { IExpenseForm, IExpenseFormApi } from '@modal/Expense-form.modal'
import { expenseFormSchema } from '@constant/validation-schema.constant'
import { IApiHandlerReturn } from '@modal/CommonComponent.modal'
import { getApiHandler, postApiHandler } from '@utils/apiHandler'
import { ExpenseCreationResponse } from './Expense-utils'
import { toast } from 'react-toastify'
import './Expense-Form.scss'

export default function ExpenseForm(): JSX.Element {
  const methods = useForm<IExpenseForm>({
    resolver: yupResolver(expenseFormSchema),
  })
  const [buildingList, setBuilding] = useState(['building1', 'building2', 1562, 7000])
  const expenseStatus = ['PAID', 'UNPAID', 'HOLD']
  const [expenseCategoryList, setExpenseCategory] = useState([])

  useEffect(() => {
    async function fetchData() {
      const apiData = {
        apiUrl: 'http://138.197.146.75:9050//v1/api/expanses/buildings/{buildingId}',
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
        apiUrl: 'http://138.197.146.75:9050/v1/api/expanses/list',
      }
      const res: IApiHandlerReturn = await getApiHandler(apiData)
      if (res.isLoaded) {
        setExpenseCategory(res.responseData.entities)
      }
    }
    fetchData()
  }, [])

  const submitExpenseForm: SubmitHandler<IExpenseForm> = async (data: IExpenseForm) => {
    console.log('data submitted', data)
    const expenseResponseData: IExpenseFormApi = ExpenseCreationResponse(data)
    console.log(expenseResponseData)
    const apiData = {
      apiUrl: 'http://138.197.146.75:9050POST /v1/api/expanses/create',
      payload: expenseResponseData,
    }
    const res = await postApiHandler(apiData)
    console.log(res)
    res && res.isLoaded
      ? toast.success('User Created successfully')
      : toast.error('Please contact our admin')
  }
  return (
    <div className="wrapper-enquiry p-5 flex justify-center">
      <div className="form-containers p-4">
        <div className="p-3 flex-1 flex-row justify-center align-center">
          <Typography className="text-center" variant="h3" color="initial">
            Expense Form
          </Typography>
          <Box sx={{ flexGrow: 1 }}>
            <FormProvider {...methods}>
              <form onSubmit={methods.handleSubmit(submitExpenseForm)}>
                <Grid container spacing={{ xs: 2, md: 2 }} columns={12}>
                  <Grid item xs={12} sm={6} md={6}>
                    <FormInputSelect
                      name="buildings"
                      label="Building"
                      optionList={buildingList}
                      optionObject={false}
                      optionParam="buildingName"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={6}>
                    <FormInputSelect
                      name="expenseCategory"
                      label="Expense Category"
                      optionList={expenseCategoryList}
                      optionObject={false}
                      optionParam="expenseCategory"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={6}>
                    <FormInputText name="expenseName" label="Expense name" />
                  </Grid>
                  <Grid item xs={12} sm={6} md={3}>
                    <FormInputText name="amountToBePaid" label="Amount to be paid" />
                  </Grid>

                  <Grid item xs={12} sm={6} md={3}>
                    <FormInputText name="expenseMonthYear" label="Expense month-year" />
                  </Grid>

                  <Grid item xs={12} sm={6} md={6}>
                    <FormInputText name="expenseType" label="Expense type" />
                  </Grid>

                  <Grid item xs={12} sm={6} md={6}>
                    <FormInputSelect
                      name="expenseStatus"
                      label="Expense status"
                      optionList={expenseStatus}
                      optionObject={false}
                      optionParam="expenseStatus"
                    />
                  </Grid>

                  <Grid item xs={12} sm={6} md={12}>
                    <FormInputText
                      name="description"
                      label="Description"
                      inputMultiline={true}
                      inputRows={3}
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
                      Create Expense
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
