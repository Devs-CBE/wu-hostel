import { masterRoute } from '@constant/dashboard-routemap.constant'
import DashboardView from '@pages/dashboard-view/dashboard-view'
import React from 'react'

export default function Master(): JSX.Element {
  return <DashboardView defaultRouteConfig={masterRoute} />
}
