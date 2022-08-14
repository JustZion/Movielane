import React from 'react'
import {Stack} from '@mui/material'
import { Oval, Rings } from 'react-loader-spinner'
import Spinner from 'react-spinner-material';

const Loaderr = () => {
  return (
    <Stack direction='row' justifyContent='center' alignItems='center' height='700px' width='100%'>
       
        <Spinner radius='100px' color=' #1976D2' />
    </Stack>
  )
}

export default Loaderr