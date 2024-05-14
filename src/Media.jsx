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
import media from './img/info.jpg'; 
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export default function Media() {

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
       Media and Information
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
      Here are some research papers and projects on media and information ¹
      </Typography>
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
         
        }}
        gutterBottom
      >
   "The Handbook of Media Education Research" edited by Divina Frau-Meigs, Sirkku Kotilainen, Manisha Pathak-Shelat, Michael Hoechsmann and Stuart R. Poyntz, published in 2020, is a unique exploration of the
      complex set of practices, theories and tools of media research.
      </Typography>
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
         
        }}
        gutterBottom
      >
  Converging traditions of research on media and information literacies" maps out a research agenda on new literacies.
      </Typography>

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
    Measuring Media Literacy for Media Education. Development of a" is a study that aims to develop a reference framework that maps out the competencies needed for teacher educators, teachers and pupils.
      </Typography>


      
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
   "PROMOTING MEDIA AND INFORMATION LITERACY IN NIGERIA" was a UNESCO project that aimed to promote media and information literacy in Nigeria.
      </Typography>

    
      <Box
      sx={{
        display: 'flex',
        marginTop: '-5%',
         '@media (max-width: 600px)': {
        display: 'block'
    },
      }}
      >
      <Button
       component={Link}
        to="/contact" 
      sx={{
        backgroundColor: 'none',
        color: 'white',
        border: '1px solid white',
         margin: 4,

      }}
      >
        Contact Us
      </Button>
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

    <Box
    sx={{
      width :"50%",
      height: '70vh',
      backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)), url(${media})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
        '@media (max-width: 600px)': {
         width :'95%',
    },
    }}
    >

    </Box>
    </Box>
    </>
  );
}
 