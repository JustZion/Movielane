import React , {useState, useEffect} from 'react'
import {Stack, Box, Button, Typography, Chip} from '@mui/material'
import logo from './assets/15.JPG'

const Footer = ({mode, setmode}) => {

  const [icon  , SetIcon] = useState('❤️')

  useEffect(()=> {
    if (mode) {
      SetIcon('❤️')
    }

    else {
      SetIcon('💙')
    }

   
  }, [mode])


  console.log(mode, 'jjjjjjjjjjjjjjjjjjjjjjjj')

  return (
    <>
     <Box  width='100%' className='footer' py='12px'>
      <Stack px='6px' alignItems='center' justifyContent='center'>
        <Typography className='whiteText' fontFamily='monospace'
         variant='h6' mt='16px' ml='8px'>
        Made with {!mode ? '💙' : '❤️'} by JustZion
      </Typography>
      </Stack>
    
    </Box>
    </>
  )
}

export default Footer