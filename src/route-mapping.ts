import React from 'react'

export interface IRoute {
  path: string
  components: any
  children?: Array<IChildrenRoute>
}
interface IChildrenRoute {
  childPath: string
  childComponents: any
}

export const routesConfig: IRoute[] = [
  {
    path: 'admin-dashboard',
    components: React.lazy(() => import('./pages/admin-dashboard/AdminDashboard')),
  },
  {
    path: 'enquiry-creation',
    components: React.lazy(() => import('./pages/enquiry-form/Enquiry-Form')),
  },
  {
    path: 'complaint',
    components: React.lazy(() => import('./pages/complaint-form/complaint-dashboard')),
  },
  {
    path: 'complaint-creation',
    components: React.lazy(() => import('./pages/complaint-form/Complaint-form')),
  },
  {
    path: 'complaint-update',
    components: React.lazy(() => import('./pages/complaint-form/complaint-form-update')),
  },
  {
    path: 'user-creation',
    components: React.lazy(() => import('@pages/user-creation-form/user-creation-form')),
  },
  {
    path: 'room-creation',
    components: React.lazy(() => import('@pages/room-creation/room-creation')),
  },
  {
    path: 'location-creation',
    components: React.lazy(() => import('@pages/location-form/location-form')),
  },
  {
    path: 'master',
    components: React.lazy(() => import('@pages/master-home/master')),
  },
  {
    path: 'building-creation',
    components: React.lazy(() => import('@pages/building-creation/building-form')),
  },
  {
    path: 'expense-form',
    components: React.lazy(() => import('@pages/expanse-form/Expense-Form')),
  },
  {
    path: 'complaint-mapping',
    components: React.lazy(() => import('@pages/complaint-form/complaint-detailed-view')),
  },
  {
    path: 'enquiry-mapping',
    components: React.lazy(() => import('@pages/enquiry-form/enquiry-detailed-view')),
  },
  {
    path: 'staff-attendance',
    components: React.lazy(() => import('@pages/staff-attendance/staff-attendance-form')),
  },
  {
    path: 'kitchen-expense',
    components: React.lazy(() => import('@pages/kitchen-expanse-form/kitchen-expense-form')),
  },
]
