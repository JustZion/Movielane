import React, {useEffect, useState} from 'react'
import {Stack, Box, Button, Typography, Chip} from '@mui/material'
import Loader from '../pages/Loader'
import StarRateIcon from '@mui/icons-material/StarRate';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import logo from '../assets/133.jpg'
import AlarmOnIcon from '@mui/icons-material/AlarmOn';
import Youtube from 'react-youtube'
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import YouTubeIcon from '@mui/icons-material/YouTube';



const Details = ({data, mode, setmode, active, setActive}) => {
    
     const der = data.videos.results.length ? 
     typeof(data.videos.results.find(item =>
        item.name.toLowerCase().includes('trailer'))) === 'undefined'?
        data.videos.results[0].key :
        data.videos.results.find(item =>
            item.name.toLowerCase().includes('trailer')).key :
        ''

    const derr = data.videos.results.length  ? data.videos.results[0].key: ''
    const maink = der ? der : derr
   

 
    // const opts = {
    //     height: '590',
    //     width: '600',
    //     playerVars: {
    //       // https://developers.google.com/youtube/player_parameters
    //       autoplay: 0,
    //     },
    //   };
    
   
    const play = (e) => {
        e.target.pauseVideo()
    }
    const image_link = 'https://image.tmdb.org/t/p/w400'

    let rating = (data.vote_average)/2
    let redrating = Math.floor(rating)
    let halfrating, norating;

    if ( rating % 1 != 0) {
    halfrating = 1
    }
    else {
    halfrating = 0
    }
    norating = Math.floor(5-rating)

    const scrolll = () => {
        setActive(!active)
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
       
    }


    


    return (
        <div >
            <Stack  p='0px 22px 10px 18px'  sx={{ flexDirection: {lg: 'row', md:'row',
            sm: 'column', xs: 'column'}, pt: {md: '20px', lg: '0px'}}} >
              
                     <Stack    sx= {{ width: {lg: '65%', md: '75%'}
                   , mr: {lg: '20px', md:'20px',sm:'20px',
                    xs:'0px'}}} >
                        
                     <img className='main_image' src={data.poster_path != null ? `${image_link}${data.poster_path}` :
                    logo}  />
                    {
                        active && (
                            <Box mr='-20px' p='0 0px 0px 0px' alignItems='center'
                            sx= {{ width: {lg: '62.5%', md: '65%'
                          ,sm:'94%',xs:'93.4%'}, 
                          height: '602px'}}
                           justifyContent='center'
                             className='youtube'>
                           <Youtube 
                           
                           videoId={
                              maink
                           } opts = {{
                              width: active ? '100%' : '100px' , height:'100%',
                              playerVars:{
                                autoplay: 1,
                              //  controls: 0
                              }
                              
                           }}
                           onReady= {(() => play())}
                           className='yt'
                           />
                           </Box>
                        )
                    }

                            
                           

                      
                 
                
                 </Stack>
               
                <Stack  className='whiteText' sx= {{ width: {lg: '35%', md: '35%'}}}
                 >
                    <Typography className='whiteText' sx = {{
                        
                        mt: {lg: '0px', md:'0px', sm:'15px', xs: '15px'}
                    }} variant='h4' fontFamily='monospace' fontWeight='600'
                    >
                        { data.title ? data.title :  data.name}
                    </Typography>

                    
                    <Box mt='20px' display='flex' flexWrap='wrap'>
                    { data.genres ? data.genres.map((item,index) => index <= 4 ? (
                        <Box mr='10px' mb='10px' key={index}><Chip 
                        style= {{
                            backgroundColor:'grey',
                            color: 'white'
                        }}
                        label={item.name} /></Box>
                       ): null) : ''}
                    </Box>
                    <Box my='10px' display='flex'>
                        <Box sx={{flexGrow: 1}}>
                            {
                            [...Array(redrating)].map((item) => (
                            <StarRateIcon key={item} className='active' />
                            ))
                            }
                            {
                            halfrating ? (
                                <StarHalfIcon className='active' />
                            ) : null
                            }
                            {
                            norating === 1 ? ( <StarOutlineIcon  className='active' /> ) :
                            [...Array(norating)].map((item) => (
                            <StarOutlineIcon  key={item} className='active'/>
                            ))
                        } <span  className='rate-number'>{rating.toString().slice(0,3)}</span>
                        </Box>
                        <Box sx={{display: {lg: 'flex' ,md: 'none', sm: 'flex', xs: 'flex'}}} mr='20px'>
                        <AlarmOnIcon  /><Typography m='-4px 0px 0px 8px'
                         variant='h6' fontFamily='monospace' className='whiteText'
                        >{data.release_date  ?
                            data.release_date.slice(0,4) : data.first_air_date ?
                            data.first_air_date.slice(0,4) : '...'
                            }</Typography></Box>
                        
                        </Box>
                        <Box>
                            <Typography variant='body2'>
                                {data.overview}
                            </Typography>
                        </Box>
                        <Box mt='20px' sx={{display: {lg: 'none' ,md: 'flex'
                        ,sm: 'none', xs: 'none'}}} 
                        mr='17px'><AlarmOnIcon  /><Typography ml='8px' 
                        mt='-4px'
                        variant='h6' fontweight='600' fontFamily='monospace'
                        > {data.release_date  ?
                            data.release_date.slice(0,4) : data.first_air_date  ?
                            data.first_air_date.slice(0,4): '...'}</Typography>
                        </Box>
                        <Box ml = '0px' mt = '23px' >
                            <Button onClick= {() => {  data.videos.results.length ?
                                scrolll()
                                 : alert('Sorry, no trailer Available')
                            } 
                        } variant='contained' className='trailer'
                            sx = {{width:'100%', fontFamily:'monospace',
                             textTransform: 'capitalize'}}
                             startIcon={<YouTubeIcon />}
                             >{ data.videos.results.length ? !active ? 'Watch Trailer' :
                             'Close Trailer' : 
                             'No trailer available' }</Button>
                        </Box>
                        
                </Stack>

            </Stack>
        
        </div>
    )
}

export default Details