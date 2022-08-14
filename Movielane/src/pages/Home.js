import React, {useState} from 'react'
import Search from '../components/Search'
import Movielist from '../components/Movielist'


const Home = ({options ,mode, setmode,
   setOptions, movieForce, setMovieForce, 
   id, location, setLocation,setSearchMovie, active, setActive,
  searchMovie}) => {
    
    
    
    

  return (
    <>

        

       <Search location={location} setLocation = {setLocation}
        movieForce = { movieForce } setMovieForce = {setMovieForce} 
        mode= {mode}
        setmode = {setmode}
       options = {options} setOptions = {setOptions}
       searchMovie = { searchMovie} setSearchMovie = { setSearchMovie} />

       <Movielist location={location} setLocation = {setLocation}
       mode= {mode} active={active} setActive={setActive}
       setmode = {setmode}  
        options = {options} setOptions = {setOptions}
        movieForce= {movieForce} setMovieForce={
        setMovieForce} searchMovie = 
        { searchMovie} id = {id} setSearchMovie = { setSearchMovie}/>
    </>
  )
}

export default Home