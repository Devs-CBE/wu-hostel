import React from 'react'
import { expenseRoute } from '@constant/dashboard-routemap.constant'
import DashboardView from '@pages/dashboard-view/dashboard-view'

export default function ExpensesDashboard(): JSX.Element {
  return <DashboardView defaultRouteConfig={expenseRoute} />
}
