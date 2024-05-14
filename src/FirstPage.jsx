import * as React from 'react';
import Box from '@mui/material/Box';
import logo from './img/AfricTv.png';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import bg from './img/big-bg-one.jpg';
import bgtwo from './img/bg-big-four.jpg';
import Header from "./componenets/Header";
import TextField from '@mui/material/TextField';
import AboutUs from './componenets/AboutUs';
import ResearchCat from './componenets/ResearchCat';

export default function FirstPage() {
  return (
    <Box 
      sx={{

          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)), url(${bgtwo})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed'
      }}
    >
  <Box
      // height={{ xs: '100%', sm: '100%', md: '100%' }} 
      
      sx={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)), url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100%',  
        boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.5)',
        margin: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 4,
        p: 2,
      }}
      my={4}
      margin="auto"
      alignItems="center"
      justifyContent="center" 
      gap={4}
      p={2}
    >
    <Header/>

    <Box
      sx={{
        display: 'flex',         
        flexDirection: 'column',  
        justifyContent: 'center',
        alignItems: 'center',    
        height: '100vh',          
        
      }}
    >
      <Typography
        width={{ xs: '85%', sm: '85%', md: '80%' }}
        fontSize={{ xs: 37, sm: 37, md: 60 }}
        sx={{
          color: 'white',
          textAlign: 'center',
          borderRadius: '5px',
          fontWeight: 'bold'
        }}
        gutterBottom
      >
        UNDERSTANDING THE POWER OF RESEARCH
      </Typography>
      <Typography
        width={{ xs: '85%', sm: '85%', md: '80%' }}
        fontSize={{ xs: 9, sm: 9, md: 40 }}
        sx={{
          color: 'white',
          textAlign: 'center',
          borderRadius: '5px',
          marginTop: '-2%',
        }}
        gutterBottom
      >
        Afric Research Team | Afric ICL
      </Typography>
      <Button 
       component={Link}
        to="/questions" 
        sx={{
          backgroundColor:'transparent',
          color: 'white',
          fontWeight: "bold",
          border:'1px solid white'
          }}
      >
          <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 512 512"><path fill="currentColor" d="M289.7 341.3V0h-85.4v341.3L33.7 170.7v128L247 512l213.3-213.3v-128z"/></svg>
          Questions
      </Button>
      <Box
      sx={{
        marginTop:'2%',
        display: 'flex',         
        justifyContent: 'center',
        alignItems: 'center',    
      }}
    >
     <TextField
      sx={{ height: '8vh'}}
        id="outlined-basic"
        label="Enter your area to research"
        variant="outlined"
        sx={{
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'white',
              borderRadius: '12px',  // Adjust the radius as needed
            },
            '&:hover fieldset': {
              borderColor: 'white',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'white',
            },
          },
          '& .MuiInputLabel-root': {
            color: 'white',
          },
          '& .MuiInputBase-input': {
            color: 'white',
          },
        }}
      />
    <Button 
        sx={{
          backgroundColor:'black',
          color: 'white',
          fontWeight: "bold",
          height: '8vh'
          }}
      >
         <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 512 512"><path fill="currentColor" d="M256 0C149.3 0 64 85.3 64 192c0 36.9 11 65.4 30.1 94.3l141.7 215c4.3 6.5 11.7 10.7 20.2 10.7s16-4.3 20.2-10.7l141.7-215C437 257.4 448 228.9 448 192C448 85.3 362.7 0 256 0m0 298.6c-58.9 0-106.7-47.8-106.7-106.8S197.1 85 256 85c58.9 0 106.7 47.8 106.7 106.8S314.9 298.6 256 298.6"/></svg>
          Search
      </Button>
    </Box>

     <Button 
        sx={{
          backgroundColor:'transparent',
          color: 'white',
          fontWeight: "bold",
          marginTop:'2%'
          }}
      >
         <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 512 512"><path fill="currentColor" d="M256 0C149.3 0 64 85.3 64 192c0 36.9 11 65.4 30.1 94.3l141.7 215c4.3 6.5 11.7 10.7 20.2 10.7s16-4.3 20.2-10.7l141.7-215C437 257.4 448 228.9 448 192C448 85.3 362.7 0 256 0m0 298.6c-58.9 0-106.7-47.8-106.7-106.8S197.1 85 256 85c58.9 0 106.7 47.8 106.7 106.8S314.9 298.6 256 298.6"/></svg>
         View All Research Locations near you
      </Button>
    </Box>
    </Box>
    <ResearchCat />
    <AboutUs/>

  </Box>


  );
}
