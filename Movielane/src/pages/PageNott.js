import React from 'react'
import {Stack, Box, Typography} from '@mui/material'
import { Oval, Rings } from 'react-loader-spinner'
import Spinner from 'react-spinner-material';

const Noresult = () => {
  return (
    <Stack direction='column' justifyContent='center' alignItems='center'
     height='600px' width='100%'>
       
       <Typography textAlign='center' px='40px' className='whiteText' fontFamily='monospace' letterSpacing='3px' mb='100px'
        sx={{fontSize: {lg: '50px', sm: '30px', xs: '28px'}}}>
            Sorry page not found </Typography>
       <Box>
       <Spinner radius='100px' color='#D32F2F' />
       </Box>
        
    </Stack>
  )
}

export default Noresult