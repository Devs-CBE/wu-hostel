import ComplaintTable from '@pages/mui-table/TableData'
import * as React from 'react'
import DashboardCard from './components/card'

const AdminDashboard = (): JSX.Element => {
  return (
    <div className="container m-5">
      <DashboardCard></DashboardCard>
      <ComplaintTable></ComplaintTable>
    </div>
  )
}

export default AdminDashboard
