import React from 'react'
import {Stack} from '@mui/material'
import { Oval, Rings } from 'react-loader-spinner'
import Spinner from 'react-spinner-material';

const Loader = () => {
  return (
    <Stack direction='row' justifyContent='center' alignItems='center' height='700px' width='100%'>
       
        <Spinner radius='100px' color='#D32F2F' />
    </Stack>
  )
}

export default Loader