import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemButton from '@mui/material/ListItemButton';
import { Link } from 'react-router-dom';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Container } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { useMediaQuery, useTheme } from '@mui/material';
import Swal from 'sweetalert2';
import {useParams, useNavigate} from "react-router-dom";    
import bgtwo from './img/bg-big-four.jpg';
import bg from './img/about.jpg'; 
import Desk from './componenets/Desk';
import Footer from './componenets/Footer';
import Header from './componenets/Header';

export default function AboutUs() {

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
     sx={{
       backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)), url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',  
        boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.5)',
        margin: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '5%',
        gap: 4,
        p: 2,
      }}
    >
    <Header/>
      <Typography
        width={{ xs: '85%', sm: '85%', md: '80%' }}
        fontSize={{ xs: 10, sm: 10, md: 50 }}
        sx={{
          color: 'white',
          textAlign: 'left',
          borderRadius: '5px',
          margin: 4,
          fontWeight:'bold',
          marginTop: '-2%',
          marginTop: '3%',
          borderBottom:'2px solid white',

        }}
         width={{ xs: '85%', sm: '85%', md: '50%' }}
        gutterBottom
      >
        About Afric Research Team
      </Typography>

       <Typography
        width={{ xs: '85%', sm: '85%', md: '40%' }}
        fontSize={{ xs: 15, sm: 15, md: 20 }}
        sx={{
          color: 'white',
          textAlign: 'left',
          borderRadius: '5px',
          margin: 4,
          fontWeight:'light',
          marginTop: '-2%',
          marginTop: '1%'
        }}
        gutterBottom
      >
       The Afric Research Team is a research organization operating under AfricICL. 
       This arm of AfricICL is dedicated to conducting research aimed at finding solutions to various global problems. 
       The team focuses on identifying, analyzing, and addressing critical issues across different sectors, leveraging 
       their expertise and resources to develop innovative and effective solutions. Their mission encompasses a broad 
       range of research areas, reflecting a commitment to contributing positively to global challenges.
      </Typography>
      <Box
      sx={{
        display: 'flex',
         '@media (max-width: 600px)': {
        display: 'block'
    },
      }}
      >
      
        <Button

      sx={{
        backgroundColor: 'white',
        color: 'black',
        fontWeight:'bold',
        border: '1px solid white',
         margin: 4,

      }}
      >
        About AfricICL
      </Button>
    </Box> 
    </Box>
    <Desk/>
    <Footer/>
    </Box>
  );
}
 