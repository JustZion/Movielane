import React from 'react'
import {Stack, Box, Button, Typography, Chip} from '@mui/material'
import {Link} from 'react-router-dom'
import logo from '../assets/14.JPG'

const ActorItems = ({data, location, setLocation}) => {

  const name = data.name

  

  const image_link = 'https://image.tmdb.org/t/p/w500'

  return (
    <Link onClick={() =>  {window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    
    } } className='image-actor'  to={`/actor/${name}/${data.id}`}>
      <Box  className='image-actor' textAlign='center'  width='200px' >
              <img className='profile' alt = 'Refresh page' src={data.profile_path ? `${image_link}${data.profile_path}`:
            logo
            } />
              <Box  className='whiteText' mt='7px'><Typography fontFamily='monospace'>{data.name}</Typography></Box>
      </Box>
      
    </Link>
   
  )
}

export default ActorItems