import React, {useState} from 'react'
import Navbar from './Navbar/Navbar'
import { Route , Routes } from 'react-router-dom'
import Home from './pages/Home'
import MoviesDetails from './pages/MoviesDetails'
import Footer from './Footer'
import Genre from './pages/Genre'
import Popular from './pages/Popular'
import Rated from './pages/Rated'
import Theatres from './pages/Theatres'
import Actorsp from './pages/Actorspage'
import Mobilenav from './components/Mobilenav'
import PageNot from './pages/PageNot'
import PageNott from './pages/PageNott'

const App = () => {

  const [active, setActive] = useState(false)
  const [options , setOptions] = useState('movie')
  const [movieForce, setMovieForce]  = useState([])
  const [location, setLocation]  = useState('default')
  const [searchMovie , setSearchMovie] = useState('')
  const [items, setItems] = useState('')
  const [mode, setmode] = useState(true)

  return (
    <div className={mode ? 'dark': 'light'}>
     
      <Navbar items = {items} setItems = {setItems} location={location} setLocation = {setLocation}
       options = {options} setOptions = {setOptions} mode= {mode}
       setmode = {setmode}
       searchMovie = { searchMovie} setSearchMovie = { setSearchMovie} />
       <Mobilenav location={location} setLocation = {setLocation} 
        searchMovie = { searchMovie} setSearchMovie = { setSearchMovie}
       />
      <Routes>
        <Route  path='/' element={<Home active={active} setActive={setActive}
         options = {options} setOptions = {setOptions} mode= {mode}
         setmode = {setmode}
          movieForce = { movieForce } setMovieForce = {setMovieForce} 
          location={location} setLocation = {setLocation}
          searchMovie = { searchMovie} setSearchMovie = { setSearchMovie}
        />} />
        <Route  path='/:movies/:id' element={<MoviesDetails  movieForce = { movieForce } 
        setMovieForcee = {setMovieForce}   mode= {mode} 
        location={location}
        setLocation={setLocation}
        setmode = {setmode} active={active} setActive={setActive}
         
        />} />
        <Route path='/genre/:options/:name/:id' element={<Genre items = {items} setItems = {setItems} 
         options = {options} setOptions = {setOptions} mode= {mode}
         setmode = {setmode}
         movieForce = { movieForce } setMovieForce = {setMovieForce} 
          location={location} setLocation = {setLocation}
          searchMovie = { searchMovie} setSearchMovie = { setSearchMovie}
        />}
        
        ></Route>
         <Route path='/category/popular' element={<Popular items = {items} setItems = {setItems} 
         options = {options} setOptions = {setOptions} mode= {mode}
         setmode = {setmode}
         movieForce = { movieForce } setMovieForce = {setMovieForce} 
          location={location} setLocation = {setLocation}
          searchMovie = { searchMovie} setSearchMovie = { setSearchMovie}
        />}
        
        ></Route>

        <Route path='/category/rated' element={<Rated items = {items} setItems = {setItems} 
         options = {options} setOptions = {setOptions} mode= {mode}
         setmode = {setmode}
         movieForce = { movieForce } setMovieForce = {setMovieForce} 
          location={location} setLocation = {setLocation}
          searchMovie = { searchMovie} setSearchMovie = { setSearchMovie}
        />}
        
        ></Route>

      <Route path='/category/theatres' element={<Theatres items = {items} setItems = {setItems} 
         options = {options} setOptions = {setOptions} mode= {mode}
         setmode = {setmode}
         movieForce = { movieForce } setMovieForce = {setMovieForce} 
          location={location} setLocation = {setLocation}
          searchMovie = { searchMovie} setSearchMovie = { setSearchMovie}
        />}
        
        ></Route>


        <Route path='/actor/:name/:id' element = {<Actorsp 
        items = {items} setItems = {setItems} mode= {mode}
        setmode = {setmode} active={active} setActive={setActive}
        options = {options} setOptions = {setOptions} 
        movieForce = { movieForce } setMovieForce = {setMovieForce} 
         location={location} setLocation = {setLocation}
         searchMovie = { searchMovie} setSearchMovie = { setSearchMovie}
        />}>

        </Route>

        <Route path='*'  element={ !mode ? <PageNot />: <PageNott />} ></Route>
      </Routes>
      <Footer mode= {mode}
       setmode = {setmode} />
   
    </div>
  )
}

export default App