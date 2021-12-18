import CommonTable, { IActionButton } from '@components/common-table/common-table'
import ComplaintTable from '@pages/mui-table/TableData'
import * as React from 'react'
import DashboardCard from './components/card'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { Navigate, useNavigate } from 'react-router-dom'

const people = [
  {
    name: 'Karthikraja B',
    complaints: 'Power Complaint from yesterday.',
    room: 'A5',
    building: 'Whatsup',
    mobile: '8870604611',
    email: 'karthikrajab11@gmail.com',
    remarks: 'Resolved',
    image:
      'https://scontent-tir2-1.xx.fbcdn.net/v/t1.6435-9/67308822_1154163544784555_1040607212168282112_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=kECxmcJioHIAX8kWbv7&_nc_ht=scontent-tir2-1.xx&oh=cd3b40c3b6166f714fd1e265eb52f62a&oe=61CC1A0F',
  },
  {
    name: 'Velmurugan',
    complaints: 'Water problem',
    room: 'A6',
    building: 'Whatsup',
    mobile: '121212121',
    email: 'Velmurugan@gmail.com',
    remarks: 'Unresolved',
    image: 'https://i.pinimg.com/originals/ea/69/dc/ea69dc6226e72a33f82d3add20b470df.jpg',
  },
  {
    name: 'Kavi',
    complaints: 'Cot needed',
    room: 'A7',
    building: 'Messenger',
    mobile: '233554543',
    email: 'kavi@gmail.com',
    remarks: 'Ongoing',
    image:
      'https://scontent-tir2-1.xx.fbcdn.net/v/t1.6435-9/77214868_1245910805609088_5399916867768811520_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=QSQwJaBCCyQAX_vDnCr&_nc_ht=scontent-tir2-1.xx&oh=c7bb163d96e968b6241b849b4266ee34&oe=61C9DAC7',
  },
  {
    name: 'Karthickeyan',
    complaints: '2 Lights needed',
    room: 'A8',
    building: 'Whatsup',
    mobile: '+91028274949',
    email: 'Karthickeyan@gmail.com',
    remarks: 'Unresolved',
    image: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/D34A/production/_112809045_kid.chair.jpg',
  },
  {
    name: 'Mohan',
    complaints: 'Water leaking in washroom',
    room: 'A9',
    building: 'Messenger',
    mobile: '09493729433',
    email: 'Mohan@gmail.com',
    remarks: 'Ongoing',
    image:
      'https://e7.pngegg.com/pngimages/194/1022/png-clipart-mr-peabody-penny-peterson-animated-film-dreamworks-animation-cartoon-mr-peabody-sherman-comics-boy.png',
  },
]

const headerName = ['name', 'complaints', 'building', 'room', 'mobile', 'Action']
const actionList: IActionButton[] = [
  {
    icon: <ArrowForwardIcon />,
    action: 'detailed_view',
    route: 'complaint',
  },
]

const AdminDashboard = (): JSX.Element => {
  const navigate = useNavigate()

  const tableClick = (data: any, btnAction: IActionButton) => {
    console.log(data)
    console.log(btnAction)
    if (btnAction.route === 'complaint') {
      sessionStorage.setItem('complaint_detail', data)
      navigate('/complaint-mapping')
    } else if (btnAction.route === 'enquiry') {
      sessionStorage.setItem('enquiry_detail', data)
      navigate('/enquiry-mapping')
    }
  }
  return (
    <div className="container m-5">
      <DashboardCard></DashboardCard>
      {/* <ComplaintTable></ComplaintTable> */}
      <CommonTable
        headerName={headerName}
        actionList={actionList}
        data={people}
        linkClicked={tableClick}
      />
    </div>
  )
}

export default AdminDashboard
