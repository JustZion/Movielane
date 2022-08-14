import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Movie from './Movie'
import { Stack, Box, Pagination } from '@mui/material'
import { Rating } from 'react-simple-star-rating'
import Spinner from 'react-spinner-material';
import Loader from '../pages/Loader'
import Loaderr from '../pages/Loaderr'
import Noresult from '../pages/Noresult'
import Noresultt from '../pages/Noresultt'


// 4345a4d7

const Movielist = ({setMovieForce ,id,mode,setmode, idd, searchMovie, movieForce, location, setLocation
  ,options , setOptions,active, setActive
}) => {
const [test, setTest] = useState(3)
const api = 'http://www.omdb.com/?apikey=4345a4d7'
const movie = 'batman'

    // useEffect(() => {
    // const findMovies = async () => {
    // //https://api.themoviedb.org/3/movie/550?api_key=f425220a350f55db2baf55f476610c56
       

    //    const response =  await axios.get(
    //     `https://api.themoviedb.org/3/search/${options}?api_key=f425220a350f55db2baf55f476610c56&query=batman`
      
    //    )

      
    //     const {data} = response
        
    //     setMovieForce(data.results)
       
    //     console.log(data.results, 'here')
    //     console.log(Math.ceil(161/10))
       
    // }
    // findMovies()
  
    // console.log(options,100)
  const [currentPage, setCurrentPage] = useState(1) 
  const [currentActors, setCurrentActors] = useState([]) 


  
    const SubmitSearch = async (value) => {
    
      if (location == 'search') {
        
      const response =  await axios.get(
        `https://api.themoviedb.org/3/search/${options}?api_key=f425220a350f55db2baf55f476610c56&query=${searchMovie}&page=${value}`
        
         )
         const {data} = response
         let pages = data.total_pages
         let results = data.total_results
         let dataa = []
         
         setMovieForce(data)
       
         setCurrentPage(value)
      }
       
      else if (location === 'genre') {
        
        const response =  await axios.get(
          `https://api.themoviedb.org/3/discover/${options}?api_key=f425220a350f55db2baf55f476610c56&with_genres=${id}&page=${value}`
          
           )
           const {data} = response
           let pages = data.total_pages
           let results = data.total_results
           let dataa = []
           
           setMovieForce(data)
         
           setCurrentPage(value)
        }

        else if (location === 'popular') {
        
          const response =  await axios.get(
            `https://api.themoviedb.org/3/discover/${options}?api_key=f425220a350f55db2baf55f476610c56&sort_by=popularity.desc&page=${value}`
             )
             const {data} = response
             let pages = data.total_pages
             let results = data.total_results
             let dataa = []
             
             

             setMovieForce(data)
           
             setCurrentPage(value)
          }

          else if (location === 'default') {
        
            const response =  await axios.get(
              `https://api.themoviedb.org/3/discover/${options}?api_key=f425220a350f55db2baf55f476610c56&sort_by=popularity.desc&page=${value}`
               )
               const {data} = response
               let pages = data.total_pages
               let results = data.total_results
               let dataa = []
               
               
  
               setMovieForce(data)
             
               setCurrentPage(value)
            }
  


          else if (location === 'rated') {
        
            const response =  await axios.get(
              `https://api.themoviedb.org/3/discover/${options}?api_key=f425220a350f55db2baf55f476610c56&certification_country=US&certification=R&sort_by=vote_average.desc&page=${value}`
               )
               const {data} = response
               let pages = data.total_pages
               let results = data.total_results
               let dataa = []
               
               setMovieForce(data)
             
               setCurrentPage(value)
            }

            else if (location === 'theatres') {
        
              const response =  await axios.get(
                `https://api.themoviedb.org/3/discover/${options}?api_key=f425220a350f55db2baf55f476610c56&certification_country=US&now_playing&page=${value}`
                 )
                 const {data} = response
                 let pages = data.total_pages
                 let results = data.total_results
                 let dataa = []
                 
                 setMovieForce(data)
               
                 setCurrentPage(value)
              }


              
                  
                

    //`https://api.themoviedb.org/3/discover/${options}?api_key=f425220a350f55db2baf55f476610c56&primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22`
      
   
  }

   const paginate = (e, value) => {
    setCurrentPage(value)
    if (location === 'actorsPage') {

    }
    
     SubmitSearch(value)
     window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
   


     }

     useEffect(() => {
      const reset = () => {
        setCurrentPage(1)
      }

      

      

      

      reset()

      
     },[id])
   
  //   console.log(id, movieForce.cast, 'monoiiiiiii')
    
    // }, [options])
     
     const lastIndex =movieForce && movieForce.cast
      ? movieForce.cast.length >  20 ? currentPage * 20 : movieForce.cast.length: 0

     const firstIndex = movieForce && movieForce.cast
      ? movieForce.cast.length > 20 ? lastIndex - 20 :
      0: 0

    if (location === 'actorsPage') {
      if (!movieForce.cast) {
        if (mode === true) {
         
          return <Loader />
        }
        else {
          return <Loaderr />
        }
      }
     
    }

    else {
      
        if (!movieForce.results) {
          if (mode === true) {
            
            return <Loader />
          }
          else {
            return <Loaderr />
          }
        }
      
    }

    if (movieForce.results == 0) {
      if (mode === true) {
            
        return <Noresult />
      }
      else {
        return <Noresultt />
      }
    }

    if (movieForce.cast == 0) {
      if (mode === true) {
            
        return <Noresult />
      }
      else {
        return <Noresultt />
      }
    }
  
   

    if (movieForce) {
     // console.log(movieForce, firstIndex,lastIndex, 77777777778)
    }
   
  return (
    <Stack mb='100px' direction='row' gap='40px' flexWrap='wrap'
     alignItems='center' justifyContent='center'>
      
      
        { movieForce.cast  ? ( movieForce.cast.slice(firstIndex,lastIndex).map((item, index) => (
            <Movie location={location} setLocation={setLocation}
            active={active} setActive={setActive}
             mode={mode} key={index} options = {options} setOptions = {setOptions}  movie = {item} />
        ))): 
         movieForce.results ? movieForce.results.map((item) => (
          <Movie
          location={location} setLocation={setLocation}
             mode={mode}
          active={active} setActive={setActive} key={item.id} options = {options} 
          setOptions = {setOptions}  movie = {item} />)) : null
        
      }
      
      <Stack mt='80px' sx={{
        width: '100%'
      }} alignItems='center'>
          {
            movieForce && movieForce.total_pages > 1 && (
              <Box color='white'>
                <Pagination sx= {{'&.MuiPaginationItem-root': {
               // border:'2px solid !important',
                color: 'red !important'   
            }
          }}
                count={movieForce.total_pages >= 500 ? 500 : movieForce.total_pages}
                shape='rounded'
                onChange={paginate}
                defaultPage={1}
                page={currentPage}
              
                >

                </Pagination>
              </Box>
            )
          }

{
            movieForce && movieForce.cast && movieForce.cast.length > 20 && (
              <Box>
                <Pagination 
                count={movieForce.cast.length >= 500 ? 500 : 
                  Math.ceil(movieForce.cast.length/20)}
                shape='rounded'
                onChange={paginate}
                defaultPage={1}
                page={currentPage}
                
                >

                </Pagination>
              </Box>
            )
          }
      </Stack>
    </Stack>
  )
}

export default Movielist