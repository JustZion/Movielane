import React from 'react'
import {Stack, Box, Typography} from '@mui/material'
import { Oval, Rings } from 'react-loader-spinner'
import Spinner from 'react-spinner-material';

const Noresultt = () => {
  return (
<Stack  direction='column' justifyContent='center' alignItems='center'
     height='400px' width='100%'>
       
       <Typography textAlign='center' px='40px' className='whiteText' fontFamily='monospace' letterSpacing='3px' mb='100px'
        sx={{fontSize: {lg: '50px', sm: '30px', xs: '25px'}}}>Sorry no results found</Typography>
       <Box>
       <Spinner radius='100px' color='#1976D2' />
       </Box>
        
    </Stack>
  )
}

export default Noresultt