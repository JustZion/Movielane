import React ,  {useEffect, useState} from 'react'
import axios from 'axios'
import { useParams, useLocation } from 'react-router-dom'
import Movielist from '../components/Movielist'
import Search from '../components/Search'
import Home from './Home'
import Loader from './Loader'


const Genre = ({options ,searchMovie , setSearchMovie
    ,items, setItems, mode, setmode, active, setActive,
     setOptions,  movieForce, setMovieForce, location, setLocation}) => {
    const {id} = useParams()
    const ster = useLocation()
    const [idd, setIdd] = useState(id)
    const [iddd, setIddd] = useState('')
   
    
   
    const numm = id.name
   
    
    const handleOptions = async () => {
        const finall = (item) => {
            setIdd(item)
            setIddd('')
        }

        const finalll = (item) => {
            setIdd(item)
            fff = [1,item,...fff]
            
        }
        const response =  await axios.get(
        `https://api.themoviedb.org/3/genre/${options}/list?api_key=f425220a350f55db2baf55f476610c56&language=en-US`
          )
          const {data} = response
          console.log(data.genres, idd, data.genres.length);
          let finder = []
          let fff = []
          data.genres.map((item, index)  =>  (
            
            item.id != idd ? finder=[item,...finder] : finall(item.id)
          ) )

          console.log(finder, finder.length, 7865888)
          if (finder.length === 16 || finder.length === 19) {
            setIdd(data.genres[0].id)
            setIddd('time')
            setItems(data.genres[0].id)
            
          }
          
          
    }

    useEffect(() => {
        if (location === 'genre') {
            
        }
        if (iddd === 'time') {
            const handleGenre = async () => {
                const response = await axios.get(`https://api.themoviedb.org/3/discover/${options}?api_key=f425220a350f55db2baf55f476610c56&with_genres=${idd}`)
                const {data} = response
               console.log({idd}, 898989898989)
                setMovieForce(data)
            }
            handleGenre()
            
        }
        else {
            setIdd(id)
            const handleGenre = async () => {
                const response = await axios.get(`https://api.themoviedb.org/3/discover/${options}?api_key=f425220a350f55db2baf55f476610c56&with_genres=${idd}`)
                const {data} = response
               console.log({idd}, 898989898989)
                setMovieForce(data)
            }
            handleGenre()
           
        }
        setIddd('')
            console.log(iddd, 'iddddddddddddddd')

       
    },[id,idd])

        useEffect(() => {
            handleOptions()
            setIddd('')
            console.log(iddd, 'iddddddddddddddd')
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
   setMovieForce} id = {idd} />
        </div>
  )
}


export default Genre