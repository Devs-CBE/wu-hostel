/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react'
import './App.scss'
import { ThemeProvider } from '@mui/material/styles/'
import { theme } from './theme/materialUI'
import { routesConfig } from './route-mapping'
import Login from '@pages/login/login'
import Layout from '@pages/layout/layout'
import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { AuthProvider, useAuth } from '@context/authContext'
import CommonTable from '@components/common-table/common-table'
import EnquiryDetailView from '@pages/enquiry-form/enquiry-detailed-view'
import KitchenExpenseForm from '@pages/kitchen-expanse-form/kitchen-expense-form'

export default function App(): JSX.Element {
  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/detail" element={<EnquiryDetailView />} />
            <Route path="/kitchen-expense-form" element={<KitchenExpenseForm />} />

            {routesConfig.map(({ path, components, children }, i) => {
              const NewComponents = components
              return (
                <Route key={i} element={<Layout />}>
                  <Route
                    path={path}
                    element={
                      <React.Suspense fallback={<>...</>}>
                        <RequireAuth>
                          <NewComponents />
                        </RequireAuth>
                      </React.Suspense>
                    }
                  ></Route>
                </Route>
              )
            })}
          </Routes>
        </AuthProvider>
      </ThemeProvider>
      <ToastContainer />
    </>
  )
}

function RequireAuth({ children }: { children: JSX.Element }) {
  const auth = useAuth()
  const location = useLocation()

  if (!auth.user) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} />
  }

  return children
}
