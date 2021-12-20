import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import classNames from 'classnames'

export default function DashboardCard(): JSX.Element {
  const cardDetails = [
    {
      name: 'Enquiry/Booking Form',
      icon: '',
    },
    {
      name: 'Rent/Payment Remainder',
      icon: '',
    },
    {
      name: 'Expenses',
      icon: '',
    },
    {
      name: 'Complaints',
      icon: '',
    },
  ]
  const [menuTab, setMenuTab] = React.useState('Complaints')

  const tabClick = (item: any) => {
    console.log(item)
    setMenuTab(item.name)
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        wrap="nowrap"
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        spacing={{ xs: 2, md: 2 }}
        columns={{ xs: 12, sm: 12, md: 12 }}
      >
        {cardDetails.map((item, index) => (
          <Grid item xs={12} sm={4} md={4} key={index}>
            <div
              onClick={() => tabClick(item)}
              className={classNames([
                'flex justify-center cursor-pointer items-center mb-5',
                menuTab === item.name ? 'selected-form-container' : 'form-container',
              ])}
            >
              <Typography variant="h6" margin={2}>
                {item.name}
              </Typography>
            </div>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
