import { AuthContextType } from '@modal/auth.modal'
import React, { useEffect } from 'react'
import { authService } from '../service/auth-service'

export const AuthContext = React.createContext<AuthContextType>(null!)

export function AuthProvider({ children }: { children: React.ReactNode }): JSX.Element {
  const [user, setUser] = React.useState<any>(localStorage.getItem('auth'))

  const signin = (newUser: { userName: string; password: string }, callback: any) => {
    authService.signUp(newUser, (res: any) => {
      setUser(true)
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
