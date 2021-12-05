import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

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
            <div className="form-container flex justify-center mb-5">
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
