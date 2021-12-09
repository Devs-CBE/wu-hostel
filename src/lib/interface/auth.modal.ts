export interface AuthContextType {
  user: any
  signin: (user: { userName: string; password: string }, callback: any) => void
  signout: (callback: any) => void
}

export interface ILoginApi {
  userName: string
  password: string
}
