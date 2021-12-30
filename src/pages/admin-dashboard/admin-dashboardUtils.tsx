import { IActionButton } from '@components/common-table/common-table'
import { ChartData } from '@modal/charts.modal'
import { IApiHandlerReturn } from '@modal/CommonComponent.modal'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { getApiHandler } from '@utils/apiHandler'

export const complaintHeader = [
  {
    displayName: 'name',
    parameterName: 'createdBy',
  },
  {
    displayName: 'complaints',
    parameterName: 'complaintDescription',
  },
  {
    displayName: 'mobile',
    parameterName: 'contactNumber',
  },
  {
    displayName: 'Type',
    parameterName: 'complaintsType',
  },
  {
    displayName: 'Status',
    parameterName: 'complaintStatus',
  },
  {
    displayName: 'Action',
    parameterName: '',
  },
]

export const enquiryHeader = [
  {
    displayName: 'name',
    parameterName: 'name ',
  },
  {
    displayName: 'Email',
    parameterName: 'email',
  },
  {
    displayName: 'Phone Number',
    parameterName: 'phoneNumber',
  },
  {
    displayName: 'Number Of People',
    parameterName: 'numberOfPeople',
  },
  {
    displayName: 'Date',
    parameterName: 'date',
  },
  {
    displayName: 'Action',
    parameterName: '',
  },
]

export const complaintActionList: IActionButton[] = [
  {
    icon: <ArrowForwardIcon />,
    action: 'detailed_view',
    route: 'complaint',
  },
]

export const enquiryActionList: IActionButton[] = [
  {
    icon: <ArrowForwardIcon />,
    action: 'detailed_view',
    route: 'enquiry',
  },
]

export const chartData: ChartData = {
  labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [{ values: [18, 40, 30, 35, 8, 52, 17, 4], chartType: 'bar' }],
}

export const color = ['#ddd']

export const lineOptions = {
  dotSize: 3,
}

export const complaintStatus = ['NEW', 'APPROVED']

export async function loadExpenseData() {
  const apiData = {
    apiUrl: `/v1/api/expanses/list`,
  }
  const expenseDataRes: IApiHandlerReturn = await getApiHandler(apiData)
  return expenseDataRes
}

export async function loadEnquiryData(pageOffset = 0, pageSize = 5) {
  const apiData = {
    apiUrl: `/v1/api/enquiry/page/${pageOffset}/${pageSize}`,
  }
  const enquiryDataRes: IApiHandlerReturn = await getApiHandler(apiData)
  return enquiryDataRes.responseData.entities
}

export async function loadComplaintData(pageOffset = 0, pageSize = 5) {
  const apiData = {
    apiUrl: `/v1/api/complaints/page/${pageOffset}/${pageSize}`,
  }
  const complaintDataRes: IApiHandlerReturn = await getApiHandler(apiData)
  return complaintDataRes.responseData.entities
}

export async function loadRentData() {
  const apiData = {
    apiUrl: `/v1/api/complaints/list/all`,
  }
  const complaintDataRes: IApiHandlerReturn = await getApiHandler(apiData)
  return complaintDataRes
}

export async function loadKitchenData() {
  const apiData = {
    apiUrl: `/v1/api/kitchen/expanses/list`,
  }
  const kitchenDataRes: IApiHandlerReturn = await getApiHandler(apiData)
  return kitchenDataRes
}
