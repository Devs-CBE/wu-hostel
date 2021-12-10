import { HTMLInputTypeAttribute } from 'react'
import { UseFormReturn } from 'react-hook-form'

export interface ITextFieldContainerProps {
  name: string
  label: string
}

export interface ITextFieldProps {
  methods: UseFormReturn
  label: string
  name: string
}

export interface IReactHookFormInputTextProps {
  label: string
  name: string
  inputType?: HTMLInputTypeAttribute
  inputFullWidth?: boolean
  inputMultiline?: boolean
  inputRows?: number
  inputRowsMax?: number
}
export interface IReactHookFormInputSelectProps {
  label: string
  name: string
  optionList: Array<any>
  optionParam?: string
  optionObject: boolean
  multiSelect?: boolean
}

export interface IFileInputProps {
  label: string
  name: string
  id: string
  multipleFiles?: boolean
}

export interface IApiHandlerReturn {
  responseData: any | null
  isLoaded: boolean
  responseError: any | null
}
