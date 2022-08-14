import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Details from '../components/Details'
import Actors from '../components/Actors'
import { useState , useEffect} from 'react'
import Loader from './Loader'
import Loaderr from './Loaderr'
import {Stack, Box, Button,  Divider, Typography, Chip} from '@mui/material'
import Recommended from '../components/Recommended'



const MoviesDetails = ({mode, setmode,active, setActive, 
  location, setLocation}) => {

   setLocation('main')
  const {movies, id} = useParams()
 
  const [movie, setMovie] = useState([])
    const [cas, setCas] = useState(null)
  
    const movie_single = async () => {
        const response = await axios.get(`
        https://api.themoviedb.org/3/${movies}/${id}?api_key=f425220a350f55db2baf55f476610c56&append_to_response=casts,videos,credits`)
  
        const {data} = response
        setMovie(data)
       
    }

    

      useEffect(() => {
        movie_single()

       
      }, [id])


  console.log(id, movies,'idmoviesssssssssssssss', mode)

 
  return (
    <Box sx={{py: {lg: '30px', sm:'0px'} }} className='horizon' >
      {
        movie.id ?  <Details
        mode= {mode}
         setmode = {setmode}
        active={active} setActive={setActive} 
        data = {movie} /> : mode ? <Loader /> :
        <Loaderr />
      }

      <Divider />
      { movie.credits && movie.credits.cast && movie.credits.cast.length ?
       <Box  className='whiteText' m='30px 0px 40px 0px'  textAlign='center' 
        display='block'><Typography fontFamily='monospace' 
       fontWeight='bold' variant='h4'>Cast</Typography></Box>
      :  movie.credits && movie.credits.crew && movie.credits.crew.length ?
      <Box className='whiteText' m='30px 0px 40px 0px'  textAlign='center'  display='block'><Typography fontFamily='monospace'
      fontWeight='bold' variant='h4'>Crew</Typography></Box> : ''
     


    }
     
      
        {
        movie.credits ?  <Actors data = {movie} />: mode ? <Loader /> :
        <Loaderr />
      }


      <Recommended location={location}
       setLocation={setLocation} active={active} setActive={setActive}  options = {movies} id = {id} />
     
    
    </Box>
  )
}

export default MoviesDetails