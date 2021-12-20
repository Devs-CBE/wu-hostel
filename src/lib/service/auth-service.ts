import { ILoginApi } from '@modal/auth.modal'
import axios from 'axios'

export interface IApiResponse {
  status: IStatus
  success: boolean
  errors: any
  entities: IEntity[]
  permissionJson: any
  count: number
}

export interface IStatus {
  statusCode: number
  statusMessage: string
  resolutionNeeded: string
}

export interface IEntity {
  publish: any
  createAt: string
  updateAt: string
  createdBy: any
  updatedBy: any
  jwt: string
  type: string
  username: string
  roles: string[]
  deleted: boolean
}

const baseUrl = `http://138.197.146.75:9050`
const authService = {
  isAuthenticated: false,

  async signUp({ userName, password }: ILoginApi, callback: CallableFunction): Promise<any> {
    const signupRes = await axios.post<IApiResponse>(`${baseUrl}/v1/api/auth/login`, {
      password: password,
      userName: userName,
    })
    if (signupRes.data.entities[0]) {
      localStorage.setItem('auth', 'true')
      localStorage.setItem('jwt', signupRes.data.entities[0].jwt)
      localStorage.setItem('role', signupRes.data.entities[0].roles.join(','))
      localStorage.setItem('username', signupRes.data.entities[0].username)
      callback(signupRes)
    } else {
      localStorage.setItem('auth', 'false')
      localStorage.setItem('jwt', '')
      localStorage.setItem('role', '')
      localStorage.setItem('username', '')
      callback(signupRes)
    }
  },

  async signOut(callback: CallableFunction): Promise<any> {
    const signOutRes = await axios.get(`${baseUrl}/v1/api/auth/logout`)
    callback(signOutRes)
  },
}

export { authService }
