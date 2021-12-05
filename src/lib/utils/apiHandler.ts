import axios from 'axios'
import { IApiRequestHook } from '@modal/customHook.modal'
import { IApiHandlerReturn } from '@modal/CommonComponent.modal'

export const postApiHandler = async (apiData: IApiRequestHook): Promise<any> => {
  let responseData = null
  let isLoaded = false
  let responseError = null
  try {
    const resData: any = await axios({
      method: 'POST',
      url: apiData.apiUrl,
      data: apiData.payload,
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
      url: apiData.apiUrl,
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

// await axios({
//   method: 'GET',
//   url: apiData.apiUrl,
// })
//   .then((res) => {
//     if (res.data) {
//       isLoaded = true
//       responseData = res.data
//     }
//     console.log(res.data)
//   })
//   .catch((error) => {
//     responseError = error
//     console.log(error)
//   })
