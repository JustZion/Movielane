import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import { Typography,Badge, Drawer, Stack, Menu, Modal, MenuItem, Divider, ClickAwayListener, Box , Button, IconButton, Toolbar
    ,AppBar} from '@mui/material'
  import MenuIcon from '@mui/icons-material/Menu'
  import axios from 'axios'
  import AdbIcon from '@mui/icons-material/Adb';
  import AlarmOnIcon from '@mui/icons-material/AlarmOn';
  import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
  import AcUnitIcon from '@mui/icons-material/AcUnit';
  import WbSunnyIcon from '@mui/icons-material/WbSunny';
  import Brightness4Icon from '@mui/icons-material/Brightness4';
  import RandomIcons from '../components/RandomIcons';


  //https://api.themoviedb.org/3/genre/tv/list?api_key=f425220a350f55db2baf55f476610c56&language=en-US
  

const Navbar = ({options, mode, setmode ,items, setItems, setOptions, location, setLocation,
  setSearchMovie, searchMovie}) => {
 
  const [genre, setGenre] = useState([])
  const [minio, setMinio] = useState([])
  
  
 const scrolll = () => {
  window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
 }
  const showList = async () => {
    const response =  await axios.get(
        `https://api.themoviedb.org/3/genre/${options}/list?api_key=f425220a350f55db2baf55f476610c56&language=en-US`
      
       )
        const {data} = response

       
        setGenre(data)
    }   

    const handleClose = () => {
      if (menuaction === false && menuopen === false) {
        setOpen(true)
      }
      else if (menuopen === true) {
        setOpen(true)
      }
    }

    const handleClosee = () => {
      if ( menuopen === false) {
        setOpen(false)
      }
    
    }
           
    const [open, setOpen]= useState(false)
    const [menuopen, setMenuOpen]= useState(false)
    const [menuseries, setMenuSeries]= useState(false)
    const [menuaction, setMenuAction]= useState(true)

  useEffect(() => {
    showList()
  })

  useEffect(() => {
    handleClose()
    setMenuOpen(false)

  },[menuopen])

 
  const handleClick = () => {
  setOpen(true)
  }

const tasks = (x) => {
  setOpen(false);
  setItems(x.id)
  window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
  
}

useEffect(() => {
 
  

},[items])



// #1976D2
 
  return (
    <>
      <Box sx = {{flexGrow: 1  ,mb: {
        lg: '70px' , sm: '70px', xs: '70px'
      }}}>
        <AppBar sx={{boxShadow:0}} className='appBar'>
        <ClickAwayListener onClick={handleClose}>
         <div>

        
          <Drawer sx ={{
            
          }} onClick={() => 
             handleClosee()
          } anchor={'left'} open={open}>
            <Stack direction='row' pl='33px' py='15px' className={mode ? 'blackBg' : 'blackBgw'}
            alignItems='center' width='280px' sx={{
              height:'60px' , justifyContent: 'left'
            }}><IconButton ml='12px' >
                <AcUnitIcon color={mode ? 'error': 'primary'} fontSize='large' />
                
            </IconButton>
            


            
            <Typography className={mode ? 'ww': 'bb'} fontFamily='monospace' ml='10px' fontSize='28px' 
            fontWeight='bold' letterSpacing='1px' mt='3px'
            >Genre</Typography>
             
            </Stack>
           
            <Stack p='20px 0px 20px 0px'  className={mode ? 'blackBg' : 'blackBgww'}
             direction='row' gap='27px' height='70px' justifyContent='center'
            alignItems='center'>
              <Typography  onClick={() => 
              {setMenuOpen(!menuopen); 
               setOptions('movie');
              scrolll()
              }}
               className={
                options == 'movie' && mode ? 'active-button normal-button menuClick' 
                : options == 'movie' && !mode ?
                 'active-button  menuClickk' : options != 'movie' && mode ?
                 'ww': options != 'movie' && !mode ?
                 'bb': ''

               }  px='13px'  letterSpacing='3px' fontSize='20px' fontWeight='bold' fontFamily='monospace' >
                Movies</Typography>
              <Divider orientation='vertical' />
              <Typography onClick={() => {setMenuOpen(true); setOptions('tv');
              scrolll()}}
               className={
                options == 'tv' && mode ? 'active-button normal-button menuClick' 
                : options == 'tv' && !mode ?
                 'active-button  menuClickk' : options != 'tv' && mode ?
                 'ww': options != 'tv' && !mode ?
                 'bb': ''

               } px='13px'  ml='-10px' letterSpacing='3px' fontSize='20px' fontWeight='bold'  fontFamily='monospace' >
                Series</Typography>
            </Stack>
           
           {!mode ? <Divider light />: ''}
            <Stack  sx={{overflow: 'hidden'}}>
            <Stack  className={mode ? 'drawerr': 
          'drrawerr'
          } direction='column' gap='0px'>
              {
                genre && genre.genres && genre.genres.map((item,index) => (
                  <Link onClick={() => {setLocation('genre');
                  setSearchMovie('')}} style={{ textDecoration:'none'}}
                   to={`/genre/${options}/${item.name}/${item.id}`}>
                  <Stack >
                    <Stack py='5px' className={items === item.id && mode
                       ? 'itemm': 
                       items === item.id && !mode
                       ? 'iitemm' : ''
                       } onClick={() => tasks(item)} pl='30px' justifyContent='center'  height='50px'>
                       <Button className={
                        items === item.id && mode ? 'trust ':
                        items === item.id && !mode ? 'trustt ': 
                        items !== item.id && mode ? 'normal ':
                        items !== item.id && !mode ? 'normall ': ''
                       
                       } startIcon={<RandomIcons ml='-3px' mt='7px' mr='13px'
                       size = '25px'
                        index={index}/>}
                        style={{ paddingLeft:'100px', 
                        textTransform: 'none',fontFamily:'monospace'
                        ,marginLeft:'-90px' ,justifyContent:'left',
                        color: 'red !important'
                       }} 
                       
                    >{item.name}</Button> 
                   
                    </Stack>
                    <Divider light />
                 
                  </Stack>
                  </Link>
                
                )) 
              }
              
              
            </Stack>
            </Stack>
           
          </Drawer>
          </div>
          </ClickAwayListener>
      
          <Toolbar  >
         
          <IconButton  onClick = {handleClick} sx={{
           
              color:'inherit', mr:2 , ml: 0
            }}>
              <MenuIcon />
            </IconButton>
       
            
           
         
           
           
           
            <Typography onClick={() => {setLocation('popular')
            setSearchMovie('')
            scrolll();
          setMinio('popular')
         } 
          } mr='10px'  sx = {{display: {  
            xs: 'none', md: 'inline-block'},
             fontFamily:'monospace',
            letterSpacing: '0px'}}  >
              <Link className={ minio == 'popular' ? 
            'active-button image-actorr' : 'image-actorr' 
            } to='/category/popular'>Popular</Link>
            
          </Typography>
           

            
            <Typography onClick={() => {setLocation('rated')
             setSearchMovie('');
             scrolll();
            setMinio('rated')}} mr='10px'  sx = {{ display: {  
              xs: 'none', md: 'inline-block'},
            fontFamily:'monospace',
            letterSpacing: '0px'}}  >
              <Link className={ minio == 'rated' ? 
            'active-button image-actorr' : 'image-actorr' 
            }  to='/category/rated'>Rated</Link>
          </Typography>
           

          
            <Typography  onClick={() => {setLocation('theatres')
             setSearchMovie('');
             scrolll();
             setMinio('theatres')
            }} 
            sx = {{flexGrow: 1,display: {  
              xs: 'none', md: 'inline-block'},fontSize:'17px',
            fontFamily:'monospace',
            letterSpacing: '0px'}}  >
              <Link className={ minio == 'theatres' ? 
            'active-button image-actorr' : 'image-actorr' 
            }  to='/category/theatres'>Theatres</Link>
          </Typography>
          
           
          <Box sx={{flexGrow: {
            lg: 2, md:2 , sm: 1, xs: 1
          }, textAlign: {md: 'left', sm: 'center', xs: 'center'}, mr: { lg: '-00px',md: '-40px', sm: '0px', xs: '-50px'}}}>
             <Typography onClick={() => setLocation('default')} sx={{ 
              fontSize: {lg: '48px', sm: '38px', xs: '34px'},  letterSpacing: {
                lg:'3px', sm: '1px',xs: '0px' }
             }} fontFamily='monospace' color={mode ? '#DC1A28': 
            'white'}
             fontWeight={mode ? '800': 
             '500'}>
              <Link  className='linkh' to='/'>MovieLane</Link>
              
             </Typography>
            </Box>
            <Box className={
                options == 'movie' ? 'active-button norm' 
                : 'norm'

               } >
              <Button onClick={() => {setOptions('movie'); scrolll()}}
               className={
                options == 'movie' ? 'active-button normal-button' 
                : 'normal-button'

               }  sx={{color: 'white', display: {  
                xs: 'none', md: 'inline-block'},
              textTransform:'capitalize' ,mr:'20px',py:'0' ,fontFamily:'monospace'
              , fontSize:'18px'}}>
                Movies
              </Button>
              </Box><Box
              className={
                options == 'tv' ? 'active-button norm' 
                : 'norm'

               } >
              <Button onClick={() => {scrolll(); setOptions('tv')}}
               className={
                options == 'tv' ? 'active-button normal-button' 
                : 'normal-button'

               } sx={{color: 'white', py:'0' ,display: {  
              xs: 'none', md: 'inline-block'}
              ,fontFamily:'monospace'
              , fontSize:'18px',
              textTransform:'capitalize', mr:'20px'}}>
                Series
              </Button>
              </Box>
              {
                mode ? <IconButton  onClick={() => setmode(!mode)} style={{color:'orangered'}}>
             
                <WbSunnyIcon  style={{fontSize: '31px'}}/>
               
               </IconButton> : 
               <IconButton  onClick={() => setmode(!mode)} style={{color:'white'}}>
             
               <Brightness4Icon  style={{fontSize: '31px'}}/>
              
              </IconButton>
              }
             
              
              
             
           
           
          </Toolbar>
        
          
        </AppBar>
       
      
      </Box>
    </>
  )
}

export default Navbar