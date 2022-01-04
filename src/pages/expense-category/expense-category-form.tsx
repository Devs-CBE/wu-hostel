import React from 'react'
import { Box, Typography } from '@mui/material'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import { FormProvider } from 'react-hook-form'
import './expense-category-form.scss'
import { SubmitHandler, useForm } from 'react-hook-form'
import FormInputText from '@components/FormInputText/FormInputText'
import FormInputSelect from '@components/FormInputSelect/formInputSelect'
import { postApiHandler } from '@utils/apiHandler'
import { IApiHandlerReturn } from '@modal/CommonComponent.modal'
import { toast } from 'react-toastify'
import { IExpenseCategoryForm, IExpenseCategoryFormApi } from '@modal/expense-category.modals'
import { expenseCategoryFormSchema } from '@constant/validation-schema.constant'
import { yupResolver } from '@hookform/resolvers/yup'
import { ExpenseCategoryCreationResponse } from './expense-category-utils'

export default function ExpenseCategoryForm(): JSX.Element {
  const methods = useForm<IExpenseCategoryForm>({
    resolver: yupResolver(expenseCategoryFormSchema),
  })
  const categoryList = ['KITCHEN', 'GENERAL']

  const submitExpenseCategoryForm: SubmitHandler<IExpenseCategoryForm> = async (
    data: IExpenseCategoryForm,
  ) => {
    console.log('data submitted', data)
    const expenseCategoryResponseData: IExpenseCategoryFormApi =
      ExpenseCategoryCreationResponse(data)
    console.log(expenseCategoryResponseData)
    const apiData = {
      apiUrl: '/v1/api/category/create',
      payload: expenseCategoryResponseData,
    }
    const res: IApiHandlerReturn = await postApiHandler(apiData)
    console.log(res)
    res && res.isLoaded
      ? toast.success('Expenses category Added Successfully')
      : toast.error('Please contact admin !')
  }
  //refered by Enquiry Form
  return (
    <div className="wrapper wrapper-enquiry p-5 flex justify-center">
      <div className="form-containers p-7">
        <div className="p-3 flex-1 flex-row justify-center align-center">
          <Typography className="text-center" variant="h3" color="initial">
            Expense Category
          </Typography>
          <Box sx={{ flexGrow: 1 }}>
            <FormProvider {...methods}>
              <form onSubmit={methods.handleSubmit(submitExpenseCategoryForm)}>
                <Grid container spacing={{ xs: 2, md: 2 }} columns={12}>
                  <Grid item xs={12} sm={12} md={12}>
                    <FormInputText name="categoryName" label="Category Name" />
                  </Grid>
                  <Grid item xs={12} sm={12} md={12}>
                    <FormInputSelect
                      name="expanseCategoryType"
                      label="Expense Category"
                      optionList={categoryList}
                      optionObject={false}
                      optionParam="categoryName"
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
