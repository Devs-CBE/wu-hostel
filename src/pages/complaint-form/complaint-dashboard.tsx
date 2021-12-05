import React from 'react'
import { complaintRoute } from '@constant/dashboard-routemap.constant'
import DashboardView from '@pages/dashboard-view/dashboard-view'

export default function ComplaintDashboard(): JSX.Element {
  return <DashboardView defaultRouteConfig={complaintRoute} />
}
