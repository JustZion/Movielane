import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Stack, Box, Button, Typography, Chip} from '@mui/material'
import Actors from './Actors'
import Loader from '../pages/Loader'

const Recommended = ({options, active, setActive, id , location, setLocation}) => {


        

    const [recon, setRecon] = useState([])

    const Recon = async () => {
        const response = await axios.get(`
        https://api.themoviedb.org/3/${options}/${id}/recommendations?api_key=f425220a350f55db2baf55f476610c56`)
        const {data} = response
       
        setRecon(data)
        console.log(data, 'reconnnn')
    }

    useEffect(() => {
        Recon()
    }, [id])


        

  return (
    <Box pb='70px'>
    {
        recon.results && recon.results.length ?
        <Box mb='40px' mt='0px' textAlign='center'>
        <Typography  className='whiteText' fontWeight='bold' fontFamily='monospace' variant='h4'>
            See also</Typography> 
    </Box> : ''
    }
       
        <Actors  location={location} active={active} setActive={setActive}
       setLocation={setLocation} options={options} data = {recon} />
    </Box>
  )
}

export default Recommended