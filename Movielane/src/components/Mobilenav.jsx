import React , {useState} from 'react'
import {Stack, Box, Button, Typography, Divider, Chip} from '@mui/material'
import {Link} from 'react-router-dom'
import StarRateIcon from '@mui/icons-material/StarRate';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import StadiumIcon from '@mui/icons-material/Stadium';

const Mobilenav = (setSearchMovie, location, setLocation,
    searchMovie
    ) => {


    const [mini,setMini] = useState('')

    return (
        <Box p='0px 0px 0px 0px' className='mininav' sx= {{ boxShadow:1, display: {sm: 'block', md: 'none'}}}>
            <Stack fontSize='17px'  fontFamily='monospace'
             textAlign='center' width='100%' direction='row'
             sx = {{ m: {
                xs: '-14px 0px 20px 0%', sm: '-6px 0px 20px 0%'
             }}} p='18px 0px 15px 0px'
             >
                <Box onClick={() => {setMini('popular'); setSearchMovie('') }} 
                textAlign='center' width='100%'>
                   
                <Link  className={ mini == 'popular' ? 
            'active-buttonn image-actorrr' : 'image-actorrr'}
             style = {{textDecoration:'none'}} to='/category/popular'>
             <PeopleAltIcon  className='mstars'/>
             
               Popular
               
                </Link>
                  </Box>
                
                  <Box onClick={() => {setMini('rated');setSearchMovie('')}} textAlign='center' width='100%'>
                <Link  className={ mini == 'rated' ? 
            'active-buttonn image-actorrr' : 'image-actorrr'}
             style = {{textDecoration:'none'}} to='/category/rated'>
              <StarRateIcon className='mstars'/>
                Rated
                </Link>
                  </Box>

                  <Box onClick={() => {setMini('theatres'); 
                setSearchMovie('')}} textAlign='center' width='100%'>
                <Link  className={ mini == 'theatres' ? 
            'active-buttonn image-actorrr' : 'image-actorrr'}
             style = {{textDecoration:'none'}} to='/category/theatres'>
              <StadiumIcon className='mstars'/>
                Theatres
                </Link>
                  </Box>
            </Stack>
        </Box>
    )

}


export default Mobilenav