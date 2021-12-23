import CommonTable, { IActionButton } from '@components/common-table/common-table'
// import ComplaintTable from '@pages/mui-table/TableData'
import * as React from 'react'
import DashboardCard from './components/card'
import { useNavigate } from 'react-router-dom'
// import FrappeCharts from './components/charts'
import { IApiHandlerReturn } from '@modal/CommonComponent.modal'
import { getApiHandler } from '@utils/apiHandler'
import { actionList, complaintHeader } from './admin-dashboardUtils'
import FormInputDatePicker from '@components/FormInputDatePicker/formInputDatePicker'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { IDashBoardFilter } from '@modal/dashboard.modal'
import Grid from '@mui/material/Grid'
import { yupResolver } from '@hookform/resolvers/yup'
import { dashboardFormSchema } from '@constant/validation-schema.constant'

const AdminDashboard = (): JSX.Element => {
  const methods = useForm<IDashBoardFilter>({
    resolver: yupResolver(dashboardFormSchema),
  })

  const { watch } = methods

  const navigate = useNavigate()
  const [tableList, setTableList] = React.useState<Array<any>>([])
  const [headerName, setHeadername] = React.useState<Array<any>>([])
  const [actionLists, setActionList] = React.useState<Array<any>>([])

  const tabChange = (data: any) => {
    console.log('tab item', data)
  }

  React.useEffect(() => {
    async function fetchData() {
      const apiData = {
        apiUrl: 'http://138.197.146.75:9050/v1/api/complaints/list/all',
      }
      const res: IApiHandlerReturn = await getApiHandler(apiData)
      if (res.isLoaded) {
        setTableList(res.responseData.entities)
      }
    }
    fetchData()
  }, [])

  React.useEffect(() => {
    setHeadername(complaintHeader)
    setActionList(actionList)
  }, [])

  const tableClick = (data: any, btnAction: IActionButton) => {
    console.log(data)
    console.log(btnAction)
    if (btnAction.route === 'complaint') {
      sessionStorage.setItem('complaint_detail', JSON.stringify(data))
      navigate('/complaint-mapping')
    } else if (btnAction.route === 'enquiry') {
      sessionStorage.setItem('enquiry_detail', JSON.stringify(data))
      navigate('/enquiry-mapping')
    }
  }

  const submitDashboardFilter: SubmitHandler<IDashBoardFilter> = async (data: IDashBoardFilter) => {
    console.log('data submitted', data)
  }

  return (
    <div className="container m-5">
      <DashboardCard tabClick={tabChange}></DashboardCard>
      {/* {
        conditional rendering here
      } */}
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(submitDashboardFilter)}>
          <Grid
            container
            spacing={1}
            direction="row"
            alignItems="flex-start"
            alignContent="stretch"
            marginBottom={3}
            wrap="nowrap"
          >
            <Grid item md={3} sm={12} xs={12}>
              <FormInputDatePicker label="Filter By Date" name="dateFilter" />
            </Grid>
          </Grid>
        </form>
      </FormProvider>
      <CommonTable
        headerName={headerName}
        actionList={actionLists}
        data={tableList}
        linkClicked={tableClick}
      />
      {/* <FrappeCharts colors={color} lineOptions={lineOptions} data={chartData} type='bar' height={500} valuesOverPoints={1}/> */}
    </div>
  )
}

export default AdminDashboard
