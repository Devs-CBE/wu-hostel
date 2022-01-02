import CommonTable, { IActionButton } from '@components/common-table/common-table'
// import ComplaintTable from '@pages/mui-table/TableData'
import * as React from 'react'
import DashboardCard from './components/card'
import { useNavigate } from 'react-router-dom'
import FrappeCharts from './components/charts'
import {
  complaintActionList,
  enquiryActionList,
  chartData,
  color,
  complaintHeader,
  complaintStatus,
  enquiryHeader,
  lineOptions,
  loadComplaintData,
  loadEnquiryData,
} from './admin-dashboardUtils'
import FormInputDatePicker from '@components/FormInputDatePicker/formInputDatePicker'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { IDashBoardFilter } from '@modal/dashboard.modal'
import Grid from '@mui/material/Grid'
import { yupResolver } from '@hookform/resolvers/yup'
import { dashboardFormSchema } from '@constant/validation-schema.constant'
import FormInputSelect from '@components/FormInputSelect/formInputSelect'

const AdminDashboard = (): JSX.Element => {
  const methods = useForm<IDashBoardFilter>({
    resolver: yupResolver(dashboardFormSchema),
  })

  const navigate = useNavigate()
  const [tableList, setTableList] = React.useState<Array<any>>([])
  const [headerName, setHeadername] = React.useState<Array<any>>([])
  const [actionList, setActionList] = React.useState<Array<any>>([])
  const [tabName, setTabName] = React.useState<string>('Complaints')

  const tabChange = async (data: any) => {
    console.log('tab item', data)
    setTabName(data.name)
    if (data.name === 'Complaints') {
      const complaintData = await loadComplaintData()
      setTableList(complaintData)
      setHeadername(complaintHeader)
      setActionList(complaintActionList)
    } else if (data.name === 'Enquiry/Booking Form') {
      const enquiryData = await loadEnquiryData()
      setHeadername(enquiryHeader)
      setTableList(enquiryData)
      setActionList(enquiryActionList)
    } else if (data.name === 'Expenses') {
    } else if (data.name === 'Rent/Payment Remainder') {
    }
  }

  React.useEffect(() => {
    async function fetchData() {
      const complaintData = await loadComplaintData()
      setTableList(complaintData)
      setHeadername(complaintHeader)
      setActionList(complaintActionList)
    }
    fetchData()
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

  const pageAction = async (pageOffset: number, pageSize: number) => {
    if (tabName === 'Complaints') {
      const complaintData = await loadComplaintData(pageOffset, pageSize)
      setTableList(complaintData)
      setHeadername(complaintHeader)
    } else if (tabName === 'Enquiry/Booking Form') {
      const enquiryData = await loadEnquiryData(pageOffset, pageSize)
      setHeadername(enquiryHeader)
      setTableList(enquiryData)
    }
  }

  const submitDashboardFilter: SubmitHandler<IDashBoardFilter> = async (data: IDashBoardFilter) => {
    console.log('data submitted', data)
  }

  return (
    <div className="container m-5">
      <DashboardCard tabClick={tabChange}></DashboardCard>
      {tabName === 'Complaints' ?? <></>}
      {tabName === 'Enquiry/Booking Form' && (
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
              <Grid marginTop={1} item md={3} sm={6} xs={12}>
                <FormInputDatePicker label="Filter By Date" name="dateFilter" />
              </Grid>
              <Grid item md={3} sm={6} xs={12}>
                <FormInputSelect
                  label="Filter By Status"
                  name="status"
                  optionList={complaintStatus}
                  optionObject={false}
                />
              </Grid>
            </Grid>
          </form>
        </FormProvider>
      )}
      {(tabName === 'Enquiry/Booking Form' || tabName === 'Complaints') && (
        <CommonTable
          headerName={headerName}
          actionList={actionList}
          data={tableList}
          linkClicked={tableClick}
          pageAction={pageAction}
        />
      )}

      {tabName === 'Expenses' && (
        <FrappeCharts
          colors={color}
          lineOptions={lineOptions}
          data={chartData}
          type="bar"
          height={500}
          valuesOverPoints={1}
        />
      )}
    </div>
  )
}

export default AdminDashboard
