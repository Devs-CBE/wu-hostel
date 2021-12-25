import axios from 'axios'
import { IApiRequestHook } from '@modal/customHook.modal'
import { IApiHandlerReturn } from '@modal/CommonComponent.modal'

const baseUrl = `http://138.197.146.75:9050`

const headers = {
  Accept: '*/*',
  Authorization: `Bearer ${localStorage.getItem('jwt')}`,
}

export const postApiHandler = async (apiData: IApiRequestHook): Promise<any> => {
  let responseData = null
  let isLoaded = false
  let responseError = null
  try {
    const resData: any = await axios({
      method: 'POST',
      url: `${baseUrl}${apiData.apiUrl}`,
      data: apiData.payload,
      headers: headers,
    })
    if (resData) {
      isLoaded = true
      responseData = resData
    }
  } catch (e: any) {
    responseError = e
  }

  return { responseData, isLoaded, responseError }
}

export async function getApiHandler(apiData: IApiRequestHook): Promise<IApiHandlerReturn> {
  let responseData = null
  let isLoaded = false
  let responseError = null
  try {
    const res = await axios({
      method: 'GET',
      url: `${baseUrl}${apiData.apiUrl}`,
      headers: headers,
    })
    if (res.data) {
      isLoaded = true
      responseData = res.data
    }
  } catch (error) {
    responseError = error
  }
  return { responseData, isLoaded, responseError }
}

export const patchApiHandler = async (apiData: IApiRequestHook): Promise<any> => {
  let responseData = null
  let isLoaded = false
  let responseError = null
  try {
    const resData: any = await axios({
      method: 'PATCH',
      url: `${baseUrl}${apiData.apiUrl}`,
      data: apiData.payload,
      headers: headers,
    })
    if (resData) {
      isLoaded = true
      responseData = resData
    }
  } catch (e: any) {
    responseError = e
  }

  return { responseData, isLoaded, responseError }
}
