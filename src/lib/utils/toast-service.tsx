import React, { useState } from 'react'
import Snackbar from '@mui/material/Snackbar'
import Slide from '@mui/material/Slide'
import MuiAlert, { AlertProps } from '@mui/material/Alert'

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

type ISeverity = 'success' | 'error' | 'warning' | 'info'

interface IcomponentProps {
  snackbarShowMessage: IsnackbarShowMessage
}

interface IsnackbarShowMessage {
  (messages: any, severitys: ISeverity, durations: number): void
}

export function withSnackBar(WrappedComponent: React.ComponentType<IcomponentProps>) {
  const displayName = WrappedComponent.displayName || WrappedComponent.name || 'Component'
  const ComponentWithSnackBar = (props: IcomponentProps) => {
    const [open, setOpen] = useState(false)
    const [message, setMessage] = useState("I'm a custom snackbar")
    const [duration, setDuration] = useState(2000)
    const [severity, setSeverity] = useState<ISeverity>('success')

    const showMessage: IsnackbarShowMessage = (
      messages,
      severitys = 'success',
      durations = 2000,
    ) => {
      setMessage(messages)
      setSeverity(severitys)
      setDuration(durations)
      setOpen(true)
    }

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
      if (reason === 'clickaway') {
        return
      }
      setOpen(false)
    }

    return (
      <>
        <WrappedComponent {...props} snackbarShowMessage={showMessage} />
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          autoHideDuration={duration}
          open={open}
          onClose={handleClose}
          TransitionComponent={Slide}
        >
          <Alert variant="filled" onClose={handleClose} severity={severity}>
            {message}
          </Alert>
        </Snackbar>
      </>
    )
  }

  ComponentWithSnackBar.displayName = `withSnackBar(${displayName})`

  return ComponentWithSnackBar
}
