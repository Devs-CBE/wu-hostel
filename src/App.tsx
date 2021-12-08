/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react'
import './App.scss'
import { ThemeProvider } from '@mui/material/styles/'
import { theme } from './theme/materialUI'
import { routesConfig } from './route-mapping'
import Home from '@pages/home/home'
import Login from '@pages/login/login'
import Layout from '@pages/layout/layout'
import Denquiry from '@pages/Denquiry-form/Denquiry-form'
import Dialogue from '@pages/Denquiry-form/Dialogue'
import { Routes, Route, useLocation, Navigate } from 'react-router-dom'

export default function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/denquiry" element={<Denquiry />} />
          <Route path="/dialogue" element={<Dialogue />} />
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
  )
}

interface AuthContextType {
  user: any
  signin: (user: string, callback: VoidFunction) => void
  signout: (callback: VoidFunction) => void
}

const AuthContext = React.createContext<AuthContextType>(null!)

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = React.useState<any>(true)

  const signin = (newUser: string, callback: VoidFunction) => {
    // return fakeAuthProvider.signin(() => {
    //   setUser(newUser)
    //   callback()
    // })
    setUser(true)
  }

  const signout = (callback: VoidFunction) => {
    // return fakeAuthProvider.signout(() => {
    //   setUser(null)
    //   callback()
    // })
    setUser(false)
  }

  const value = { user, signin, signout }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

function useAuth() {
  return React.useContext(AuthContext)
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
