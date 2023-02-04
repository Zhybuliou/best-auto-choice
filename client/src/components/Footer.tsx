import { Box } from '@mui/material'
import React from 'react'

export default function Footer() {
  return (
    <Box
      component='header'
      style={{
        height: '5vh',
        width: '100%',
        backgroundColor: '#ccc',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      BestAutoChoice CLL 2023
    </Box>
  )
}
