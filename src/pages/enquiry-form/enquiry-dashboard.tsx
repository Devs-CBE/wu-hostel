import { enquiryRoute } from '@constant/dashboard-routemap.constant'
import DashboardView from '@pages/dashboard-view/dashboard-view'
import React from 'react'

export default function EnquiryDashboard(): JSX.Element {
  return <DashboardView defaultRouteConfig={enquiryRoute} />
}
