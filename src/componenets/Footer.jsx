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
import SideNav from './SideNav';
import {useParams, useNavigate} from "react-router-dom";    
import logo from '../img/Afric.png'; 
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export default function Footer() {

  return (
    <>
    <Box 
     sx={{
        backgroundColor: 'black',
        height: 'auto',  
        boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.5)',
        margin: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '5%',
        gap: 4,
        p: 2,
        display: 'flex',
         '@media (max-width: 600px)': {
       display: 'block',
       height: 'auto'
    },
      }}
    >

      <Box
    sx={{
      width :"50%",
      height: '70vh',
      backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)), url(${logo})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
        '@media (max-width: 600px)': {
         width :'95%',
    },
    }}
    >

    </Box>


    <Box
      sx={{
        width :'50%',
         '@media (max-width: 600px)': {
         width :'95%',
    },
      }}
    >
      <Typography
        width={{ xs: '85%', sm: '85%', md: '80%' }}
        fontSize={{ xs: 20, sm: 20, md: 40 }}
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
         // width={{ xs: '85%', sm: '85%', md: '50%' }}
        gutterBottom
      >
       Afric Research Team | AfricICL 
      </Typography>

       <Typography
        // width={{ xs: '85%', sm: '85%', md: '40%' }}
        fontSize={{ xs: 15, sm: 15, md: 20 }}
        sx={{
          color: 'white',
          textAlign: 'left',
          borderRadius: '5px',
          margin: 4,
          fontWeight:'light',
          marginTop: '-2%',
         
        }}
        gutterBottom
      >
        Social Media Pages
      </Typography>
     <Button 
       component={Link}
        to="https://www.facebook.com/profile.php?id=61559466455355&mibextid=ZbWKwL" 
        sx={{
          backgroundColor:'transparent',
          color: 'white',
          fontWeight: "bold",
          border:'1px solid white',
           margin: 4,
          }}
      >
      <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M10.488 3.788A5.25 5.25 0 0 1 14.2 2.25h2.7a.75.75 0 0 1 .75.75v3.6a.75.75 0 0 1-.75.75h-2.7a.15.15 0 0 0-.15.15v1.95h2.85a.75.75 0 0 1 .728.932l-.9 3.6a.75.75 0 0 1-.728.568h-1.95V21a.75.75 0 0 1-.75.75H9.7a.75.75 0 0 1-.75-.75v-6.45H7a.75.75 0 0 1-.75-.75v-3.6A.75.75 0 0 1 7 9.45h1.95V7.5a5.25 5.25 0 0 1 1.538-3.712M14.2 3.75a3.75 3.75 0 0 0-3.75 3.75v2.7a.75.75 0 0 1-.75.75H7.75v2.1H9.7a.75.75 0 0 1 .75.75v6.45h2.1V13.8a.75.75 0 0 1 .75-.75h2.114l.525-2.1H13.3a.75.75 0 0 1-.75-.75V7.5a1.65 1.65 0 0 1 1.65-1.65h1.95v-2.1z" clip-rule="evenodd"/></svg>aceBook
      </Button>
      <Button 
       component={Link}
        to="https://x.com/AfricGEM?t=dgeuEEUovqBjkOx14Rktng&s=08" 
        sx={{
          backgroundColor:'transparent',
          color: 'white',
          fontWeight: "bold",
          border:'1px solid white',
           margin: 4,
          }}
      >
      <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m3 21l7.548-7.548M21 3l-7.548 7.548m0 0L8 3H3l7.548 10.452m2.904-2.904L21 21h-5l-5.452-7.548" color="currentColor"/></svg>
       
      </Button>
        

        


        <Typography
        // width={{ xs: '85%', sm: '85%', md: '40%' }}
       fontSize={{ xs: 15, sm: 15, md: 15 }}
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
          Let's innovate and make a difference together!
      </Typography>
    </Box> 

  
    </Box>
    </>
  );
}
 