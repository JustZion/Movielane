import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom';
import {Box ,Stack, Typography, Button, TextField} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import Loader from '../pages/Loader'

const Search = ({setSearchMovie, location, setLocation,
    options , setOptions, mode, setmode,
    setMovieForce, searchMovie}) => {


        const navigate = useNavigate()
        const [kk, setkk] = useState(searchMovie)
const api = 'http://www.omdb.com/'


const handleDefault = async () => {
    const response = await axios.get(
        `https://api.themoviedb.org/3/discover/${options}?api_key=f425220a350f55db2baf55f476610c56&sort_by=popularity.desc`)
    const {data} = response
  
    setMovieForce(data)
}

const SubmitSearch = async () => {
    const response =  await axios.get(
        `https://api.themoviedb.org/3/search/${options}?api_key=f425220a350f55db2baf55f476610c56&query=${kk}&page=3}`
      
       )
        const {data} = response
        let pages = data.total_pages
        let results = data.total_results
        let dataa = []
        
        setMovieForce(data)
           
    
            console.log(data.total_pages, data.total_results)
      
}

const changeValue = (e) => {
     const x = e.target.value
    // if (!x  || /^\s*$/.test(x)) {
    //     return
    // }
    setSearchMovie(
         x.charAt(0).toUpperCase() + x.slice(1).toLowerCase())
}



const changeeValue = (e) => {

    const x = e.target.value
   // if (!x  || /^\s*$/.test(x)) {
   //     return
  setkk(x)
  console.log(5666)
  

}

const changgeeValue = (e) => {
    setSearchMovie(kk)
    console.log(searchMovie, 'ttttttttttttt')
  

}

const emptySearch = () => {
    
    setSearchMovie('')
}

useEffect(() => {
   
    if (location === 'search') {
        SubmitSearch()
    }

    if (location === 'default') {
        handleDefault()
    }
   
    
}

,[options, location])

const something=(event)=> {
    if (event.key === 'ArrowRight' || event.key === 'Enter') {
        
        setLocation('search');
            setSearchMovie(kk)
            SubmitSearch();
           navigate('/')
    }
}


  return (
    <Stack sx={{ py: {lg: '50px',sm:'20px', xs:'22px'}}}  mb='12px' 

     alignItems='center'
    justifyContent='center'>
        <Box className='searchh'>
        <TextField className='searchh' value={kk}
            onKeyDown={(e) => something(e)}
            
            placeholder='Search for movies'
             sx={{ 
            
            width: {lg: '592px',md: '500px', sm: '300px', xs: '240px'},
            }}  onChange={changeeValue} />
            <Link  to='/'>
            <Button type='submit' className='sb' 
            variant='contained' sx={{ boxShadow: 0,
            height: '53.8px',textTransform: 'capitalize',
            letterSpacing:'0px',
            '&.MuiButton-root': {
               // border:'2px solid !important',
                borderRadius: '0px ',
                borderTopRightRadius: '4px',
                borderBottomRightRadius: '4px',
                borderBottomLeftRadius: '0px',
                borderTopLeftRadius: '0px !important'
                
            }
        }} onClick = {() => {
            setLocation('search');
            setSearchMovie(kk)
            SubmitSearch()
        }} >
            <SearchIcon  />
        </Button>
            </Link>
       
        </Box>
        
        
    </Stack>
  )
}

export default Search