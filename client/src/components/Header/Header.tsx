import { Box } from '@mui/material'
import React from 'react'
import Main from './components/Main'

export default function Header() {
  return (
    <Box
      style={{
        minWidth: '200px',
        minHeight: '95vh',
        backgroundColor: '#FFFFFF',
        borderRight: '1px solid #D1D1D1',
      }}
    >
      <Main />
    </Box>
  )
}
