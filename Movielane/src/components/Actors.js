import React  , {useState, useEffect, useContext} from 'react'
import ActorItems from './ActorItems'
import Movie from './Movie'
import { useParams } from 'react-router-dom'
import {Stack, Box, Button, Typography, Chip} from '@mui/material'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Loader from '../pages/Loader'

const Actors = ({data, active, setActive, location, setLocation}) => {
    const [castt, setCastt] = useState([])
    

    const {movies} = useParams()
    console.log(data,'s')
    
    const LeftArrow = () => {
        const { scrollPrev } = useContext(VisibilityContext)

        return (
            <Typography  className='left whiteText' onClick={ () => scrollPrev()}>
                 <KeyboardArrowLeftIcon fontSize='large' />
            </Typography>
        )
    }

    const RightArrow = () => {
        const {scrollNext} = useContext(VisibilityContext)

        return(
            <Typography className={data.credits ? 'right whiteText' : 'rightt whiteText'} onClick = {() => scrollNext()}>
                <KeyboardArrowRightIcon fontSize='large'  />
            </Typography>
        )
    }

    useEffect(() => {
        if (data.credits) {
            setCastt(data.credits.cast)
            if (!data.credits.cast.length ) {
                setCastt(data.credits.crew)
            }
        }

       

        if (data.results) {
            setCastt(data.results, '999999')
        }
       
    }, [data])

    if (!castt.length) {
        return ''
    }
  return (
   

        <ScrollMenu  LeftArrow={LeftArrow}  RightArrow={RightArrow}>
                
                
                {
                    castt.length && castt.map((item,index) =>  (
                        <Box   width='150px' m={data.credits ? '10px 60px 100px -15px' 
                    : '40px 270px 100px 10px'}
                        
                        >
                            {  data.credits && (
                                 <ActorItems 
                                
                                 data = {item} />
                            ) 
                        }

                        {
                            data.results && (
                                <Movie active={active} setActive={setActive}
                                location={location}
                                setLocation={setLocation}
                                options={movies} movie={item} />
                            )
                        }
                           
                        </Box>
                        
                    ))
                }
            
                
            
        </ScrollMenu>
   
    
  )
}

export default Actors