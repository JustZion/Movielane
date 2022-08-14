import React , {useEffect, useState} from 'react'
import axios from 'axios'
import {Card, Box, Chip, Tooltip, IconButton, CardMedia, CardContent,CardActionArea, Stack, Typography} from '@mui/material'
import {Link, useParams} from 'react-router-dom'
import logo from '../assets/13.jpg'
import AlarmOnIcon from '@mui/icons-material/AlarmOn';
import StarRateIcon from '@mui/icons-material/StarRate';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import Spinner from 'react-spinner-material';


const Movie = ({movie, options,location,
   setLocation, active, setActive, mode }) => {

  
  let rating = (movie.vote_average)/2
  let redrating = Math.floor(rating)
  let halfrating, norating, temprating;

  if ( rating % 1 > 0.09) {
    halfrating = 1
    temprating = rating
    
  }
  else {
    if (rating % 1 === 0) {
      temprating = rating
    }

    else {
      temprating = rating - 1
    }
    halfrating = 0
    
    
  }

 

  norating = Math.floor(5-temprating)

  let termm = []
 const [mov, setMov] = useState([])
 
  const image_link = 'https://image.tmdb.org/t/p/w300'

  useEffect(() => {
    const movie_genre = async () => {
      
      const response = await axios.get(`
      https://api.themoviedb.org/3/${options}/${movie.id}?api_key=f425220a350f55db2baf55f476610c56`)

      const {data} = response
      
      
      setMov(data.genres)
      if (mov.length) {
        return
      }

      termm = data.genres
    }
    
    movie_genre()
   
  
  },[])

  const checker= ()=> {
    setActive(false);
   
     
    console.log(active,'uuuuuuuuuuuuuuuuuuuuuuuuuuu')
  }
  
  // console.log(location, 'locaaaaaaaa')
 
  return (
    <Link onClick={()=> 
      {
      setLocation('main')
     
      window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
    

    }}  className='movieCard' to={`/${options}/${movie.id}`}>
       <Stack onClick= {()=> {
         checker()
         setLocation('main')
       }} className='mainMovie' mt='12px'>
       <Card className='card-movie' sx = {{
        maxWidth: '340px', minWidth: '360px' ,
        minHeight: '440px', maxHeight: '380px'
       }} mt='400px'>
         <CardActionArea className='yy'>
            <CardMedia 
                component='img'
                src={!movie.poster_path  ? logo :
                 `${image_link}/${movie.poster_path}`}
                height='300px'
            />
           
           
            
            <CardContent className='cardC'  >
            <Stack  direction='row' >
            <Box sx={{flexGrow: 1}}>
              
            { rating ?
                [...Array(redrating)].map((item) => (
                  <StarRateIcon key={item} className='active' />
                )) : ''
              }
              {
               halfrating ? (
                <StarHalfIcon className='active' />
               ) : null
              }
              {
               rating === 1 ? ( <StarOutlineIcon  className='active' /> ) :
               rating ? [...Array(norating)].map((item) => (
                  <StarOutlineIcon  key={item} className='active'/>
                )): ''
              } <span className='rate-number'>
                {rating ? rating.toString().slice(0,3): 'No rating'}</span>
            </Box>
            <Box sx={{display: 'flex'}}>
                <AlarmOnIcon  />
                <Tooltip title={ options === 'tv' ? movie.first_air_date ? movie.first_air_date  : 'loading' :
              movie.release_date ? movie.release_date : 'loading'}>
                <Typography sx={{wordSpacing: '2px', ml: '0px'}} >
                 &nbsp;
                 <span style={{
                      fontWeight:'', fontFamily:'monospace',
                      letterSpacing: '1px'
                    }}>
                      {  options === 'tv' ? (
                        movie.first_air_date ? 
                        movie.first_air_date.slice(0,4): 
                        '---'
                        
                      ) : (
                        movie.release_date ? movie.release_date.slice(0,4) :
                       '---'
                      )
                      }
                 </span> 
                   
               </Typography>
                </Tooltip>
                
               
            </Box>
            </Stack>
                <Box mt='8px' sx={{ display: 'flex'}}>
                <Stack ml='-5px' fontWeight= '600' fontSize='14px' fontFamily='monospace' mt='3px' gap='10px'
                 direction='row' sx={{flexGrow: 1}}>
                { mov ? mov.map((item,index) => index <= 2 ? (
                        <div key={index}><Chip
                        style = {{ backgroundColor: 'grey',
                        color: 'white'
                      }}
                        label={item.name} /></div>
                       ): null) : ''}
                </Stack>
                
                
                </Box>
                <Typography mb='40px' textTransform='capitalize' mt='10px' 
                 className='movie-name' width='100%'
                 fontWeight='bold' sx={{ fontSize: '18px'}}>
                    { movie ? (
                      options === 'movie' ? (
                        movie.title ? (
                          movie.title.length >= 28 ? 
                          <Tooltip title={movie.title}><span>{movie.title.slice(0,28) + '....'}</span></Tooltip>:
                          <Tooltip title={movie.title}><span>{movie.title}</span></Tooltip>
                          ) : null): movie.name ? ( movie.name.length >= 28 ? 
                            <Tooltip title={movie.name}><span>{movie.name.slice(0,28) + '....'}</span></Tooltip>:
                          <Tooltip title={movie.name}><span>{movie.name}</span></Tooltip>): null ): ''  
                    }
                </Typography>
               
               
            </CardContent>
         </CardActionArea>
       </Card>
       </Stack>
      
    </Link>
    
  )
}

export default Movie