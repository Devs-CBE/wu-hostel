import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import './dashboard-view.scss'
import { useNavigate } from 'react-router-dom'

interface IDefaultRouteConfig {
  defaultRouteConfig: {
    url: string
    icon: any
    name: string
  }[]
}

function DashboardView({ defaultRouteConfig }: IDefaultRouteConfig): JSX.Element {
  const navigate = useNavigate()
  return (
    <div className="wrapper-dashboard">
      <Box sx={{ flexGrow: 1, padding: '10px' }}>
        <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 12, sm: 12, md: 12 }}>
          {defaultRouteConfig.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <div
                onClick={(e) => {
                  navigate(item.url)
                }}
                className="form-container flex justify-center cursor-pointer items-center"
              >
                <img width="50px" src={item.icon} alt={item.name} />
                <Typography variant="h6" margin={2}>
                  {item.name}
                </Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  )
}

export default DashboardView
