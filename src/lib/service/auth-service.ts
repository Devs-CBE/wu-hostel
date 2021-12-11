import { ILoginApi } from '@modal/auth.modal'
import axios from 'axios'

const baseUrl = `http://138.197.146.75:9050`
const authService = {
  isAuthenticated: false,

  async signUp({ userName, password }: ILoginApi, callback: CallableFunction): Promise<any> {
    const signupRes = await axios.post(`${baseUrl}/v1/api/auth/login`, {
      password: password,
      userName: userName,
    })
    localStorage.setItem('auth', 'true')
    callback(signupRes)
  },

  async signOut(callback: CallableFunction): Promise<any> {
    const signOutRes = await axios.get(`${baseUrl}/v1/api/auth/logout`)
    callback(signOutRes)
  },
}

export { authService }
