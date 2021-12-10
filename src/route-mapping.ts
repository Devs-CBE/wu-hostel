/* eslint-disable @typescript-eslint/no-explicit-any */

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
    path: 'enquiry',
    components: React.lazy(() => import('@pages/enquiry-form/enquiry-dashboard')),
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
]
