import React ,  {useEffect, useState} from 'react'
import axios from 'axios'
import { useParams, useLocation } from 'react-router-dom'
import Movielist from '../components/Movielist'
import Search from '../components/Search'
import Home from './Home'
import Loader from './Loader'


const Rated = ({options ,searchMovie , setSearchMovie
    ,items, setItems, mode, setmode, active , setActive,
     setOptions,  movieForce, setMovieForce, location, setLocation}) => {
    
    const ster = useLocation()
   
    setLocation('rated')
    
   

    useEffect(() => {
        if (location === 'genre') {
            
        }
       
            
            const handleGenre = async () => {
                const response = await axios.get(
                    `https://api.themoviedb.org/3/discover/${options}?api_key=f425220a350f55db2baf55f476610c56&certification_country=US&certification=R&sort_by=vote_average.desc`
                    )
                const {data} = response
              
                setMovieForce(data)
            }
            handleGenre()
           
        
        

       
    },[options])

        

    if (!movieForce) {
        return
    }

   
  return (
    <div>
       
   <Search location={location} setLocation = {setLocation}
        movieForce = { movieForce } setMovieForce = {setMovieForce} 
       options = {options} setOptions = {setOptions}
       searchMovie = {searchMovie} setSearchMovie = { setSearchMovie} />
    
   <Movielist  location={location} setLocation = {setLocation} 
   options = {options} setOptions = {setOptions}  mode= {mode}
   setmode = {setmode} active={active} setActive={setActive}
   movieForce= {movieForce} setMovieForce={
   setMovieForce}  />
        </div>
  )
}


export default Rated

// https://api.themoviedb.org/3/discover/movie?api_key=f425220a350f55db2baf55f476610c56&sort_by=popularity.desc