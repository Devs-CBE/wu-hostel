import { IActionButton } from '@components/common-table/common-table'
import { ChartData } from '@modal/charts.modal'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

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

export const actionList: IActionButton[] = [
  {
    icon: <ArrowForwardIcon />,
    action: 'detailed_view',
    route: 'complaint',
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
