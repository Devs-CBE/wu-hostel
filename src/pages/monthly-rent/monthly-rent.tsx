import React from 'react'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { monthlyRentFormSchema } from '@constant/validation-schema.constant'
import { yupResolver } from '@hookform/resolvers/yup'
import { IMonthlyRentForm } from '@modal/monthly-rent.modal'
import { monthlyRentCreationResponse } from './monthly-rent-utils'
import { getApiHandler, postApiHandler } from '@utils/apiHandler'
import { toast } from 'react-toastify'
import './monthly-rent.scss'
import { Box, Button, Grid, Typography } from '@mui/material'
import FormInputDatePicker from '@components/FormInputDatePicker/formInputDatePicker'
import FormInputToggle from '@components/FormInputToggle/formInputToggle'
import FormInputText from '@components/FormInputText/FormInputText'
import FormInputSelect from '@components/FormInputSelect/formInputSelect'
import { IApiHandlerReturn } from '@modal/CommonComponent.modal'
import FormInputAutocomplete from '@components/FormInputAutocomplete/formInputAutocomplete'

export default function MonthlyRent(): JSX.Element {
  const methods = useForm<IMonthlyRentForm>({
    resolver: yupResolver(monthlyRentFormSchema),
  })

  const [userList, setUser] = React.useState<Array<any>>([])

  React.useEffect(() => {
    async function fetchData() {
      const apiData = {
        apiUrl: '/v1/api/get/user',
      }
      const res: IApiHandlerReturn = await getApiHandler(apiData)
      if (res.isLoaded) {
        const user = res.responseData.entities
        setUser(user)
      }
    }
    fetchData()
  }, [])

  const onFieldChange = (e: any): void => {
    console.log(e)
  }

  const submitMonthlyRentForm: SubmitHandler<IMonthlyRentForm> = async (data: IMonthlyRentForm) => {
    console.log('data submitted', data)
    const monthlyRentResponseData = monthlyRentCreationResponse(data)
    console.log(monthlyRentResponseData)
    const apiData = {
      apiUrl: '/v1/api/rent/monthly/create',
      payload: monthlyRentResponseData,
    }
    const res = await postApiHandler(apiData)
    console.log(res)
    res && res.isLoaded
      ? toast.success('Data Submitted Successfully')
      : toast.error('Please contact our admin')
  }
  return (
    <>
      <div className="monthly--rent__header p-5 flex justify-center">
        <div className="section p-7">
          <div className="p-3 flex-1 flex-row justify-center align-center">
            <div className="text-center py-6">
              <Typography variant="h3" color="#6b5875">
                Monthly Rent Form
              </Typography>
            </div>
            <Box sx={{ flexGrow: 1 }}>
              <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(submitMonthlyRentForm)}>
                  <Grid item xs={12} sx={{ marginBottom: 2 }}>
                    <FormInputSelect
                      name="user"
                      label="User"
                      optionParam="name"
                      optionList={userList}
                      optionObject={true}
                    />
                  </Grid>
                  <Grid item xs={12} sx={{ marginBottom: 2 }}>
                    <FormInputText name="amount" label="Amount" />
                  </Grid>
                  <Grid item xs={12} sx={{ marginBottom: 2 }}>
                    <FormInputDatePicker label="Date" name="monthAndYear" />
                  </Grid>
                  <Grid item xs={12}>
                    <FormInputToggle label="Fully Paid" name="fullyPaid" />
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
    </>
  )
}
