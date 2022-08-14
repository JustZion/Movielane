import React, {useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Search from '../components/Search'
import Movielist from '../components/Movielist'

const Actorsp = ({options,active, setActive, searchMovie, setSearchMovie,mode, setmode
    ,items, setItems,
     setOptions,  movieForce, setMovieForce, location, setLocation}) => {
     const {name , id} = useParams()
        setLocation('actorsPage')

       
    const Actordata = async () => {
        const getmovie = await axios.get(`https://api.themoviedb.org/3/person/${id}/${options}_credits?api_key=f425220a350f55db2baf55f476610c56`)
        const {data} = getmovie
        console.log(data)
        setMovieForce(data)

        console.log(data, 'actorrrssss')
    }


    useEffect(() => {
        Actordata()
    }, [options])

    

    return (
        <>
          <Search location={location} setLocation = {setLocation}
        movieForce = { movieForce } setMovieForce = {setMovieForce} 
       options = {options} setOptions = {setOptions}
       searchMovie = {searchMovie} setSearchMovie = { setSearchMovie} />
    
   <Movielist active={active} setActive={setActive}  location={location} setLocation = {setLocation} 
   options = {options} setOptions = {setOptions}  mode= {mode}
   setmode = {setmode}
   movieForce= {movieForce} setMovieForce={
   setMovieForce} id = {id}  />
        
        </>
    )
}



export default Actorsp