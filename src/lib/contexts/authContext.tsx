/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { AuthContextType } from '@modal/auth.modal'
import { AxiosResponse } from 'axios'
import React from 'react'
import { authService, IApiResponse } from '../service/auth-service'

export const AuthContext = React.createContext<AuthContextType>(null!)

export function AuthProvider({ children }: { children: React.ReactNode }): JSX.Element {
  const [user, setUser] = React.useState<any>(localStorage.getItem('auth'))

  const signin = (newUser: { userName: string; password: string }, callback: any) => {
    authService.signUp(newUser, (res: AxiosResponse<IApiResponse, any>) => {
      if (res.data.entities[0]) {
        setUser(true)
      } else {
        setUser(false)
      }
      callback(res)
    })
  }

  const signout = (callback: any) => {
    authService.signOut((res: any) => {
      setUser(false)
      callback(res)
    })
  }

  const value = { user, signin, signout }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth(): AuthContextType {
  return React.useContext(AuthContext)
}
