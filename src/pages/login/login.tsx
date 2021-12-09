import React, { useContext } from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import './login.scss'
import { Link, useNavigate } from 'react-router-dom'
import FormInputText from '../../lib/components/FormInputText/FormInputText'
import { ILoginForm } from '@modal/login.modal'
import { object, SchemaOf, string } from 'yup'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { AuthContext } from '@context/authContext'

const loginFormSchema: SchemaOf<ILoginForm> = object({
  userName: string().required('Username required'),
  password: string().required('Password required'),
})

function Login(): JSX.Element {
  const methods = useForm<ILoginForm>({
    resolver: yupResolver(loginFormSchema),
  })

  const { signin } = useContext(AuthContext)
  const navigate = useNavigate()

  const submitLoginForm: SubmitHandler<ILoginForm> = async (data: ILoginForm) => {
    console.log('data submitted', data)
    signin(data, (res: any) => {
      console.log(res)
      navigate('/admin-dashboard')
    })
  }

  return (
    <div className="wrapper-login p-5 flex justify-center">
      <div className="form-container p-7">
        <div className="p-3 flex-1 flex-row justify-center align-center">
          <Typography className="text-center" variant="h3" color="initial">
            Login
          </Typography>
          <Box sx={{ mt: '1rem' }}>
            <Typography variant="h6" className="text-center">
              Sign in and start managing your Hostellers!
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            <FormProvider {...methods}>
              <form onSubmit={methods.handleSubmit(submitLoginForm)}>
                <Grid container spacing={{ xs: 2, md: 2 }} columns={12}>
                  <Grid item xs={12} md={12} sm={12}>
                    <FormInputText label="Username" name="userName" />
                  </Grid>
                  <Grid item xs={12} md={12} sm={12}>
                    <FormInputText label="Password" inputType="password" name="password" />
                  </Grid>
                </Grid>
                <Grid marginTop={3} container columns={12}>
                  <Grid item xs={6} md={6} sm={6}>
                    <label className="inline-flex items-center">
                      <input type="checkbox" className="form-checkbox" defaultChecked />
                      <span className="ml-2">Remember Me</span>
                    </label>
                  </Grid>
                  <Grid item xs={6} md={6} sm={6}>
                    <label className="inline-flex items-right">
                      <Link to="/">Forget Password?</Link>
                    </label>
                  </Grid>
                </Grid>
                <Box justifyContent="center" marginTop={3} display="flex" alignContent="center">
                  <div>
                    <Button type="reset" variant="outlined">
                      Cancel
                    </Button>
                  </div>
                  <div className="ml-5">
                    <Button type="submit" variant="contained">
                      Login
                    </Button>
                  </div>
                </Box>
              </form>
            </FormProvider>
          </Box>
        </div>
      </div>
    </div>
  )
}
export default Login
