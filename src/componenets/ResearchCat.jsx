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
import bgone from '../img/info.jpg'; 
import bgtwo from '../img/agric.jpg'; 
import bgthree from '../img/life.jpg'; 


export default function ResearchCat() {

  return (
    <>
      <Box 
      sx={{ 
        display: 'flex',
        flexWrap: 'wrap',
        height: '70vh',
        width: '100%',
        justifyContent: 'space-around',
        alignItems: 'center',
        margin: 'auto',
        marginTop: '3%',
        '@media (max-width: 600px)': {
        display: 'block',
        height :'auto'
    },
      }}
    >
    
    <Box 
          sx={{
       backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)), url(${bgone})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        flexWrap: 'wrap',
        height: '60vh',
        width:'20%',
        justifyContent: 'space-around',
        margin: 'auto',
        marginTop: '5%',
        
        '@media (max-width: 600px)': {
       width:'75%',
    },
      }}
    >
    <Typography
        sx={{
          color: 'white',
          borderRadius: '5px',
          fontSize: 25,
          fontWeight: 'bold',
          margin: "6px 10px 4px 10px"
        }}
        gutterBottom
      >
       Media and Information
      </Typography>
      <Button
      sx={{
        backgroundColor: 'none',
        border: '1px solid white',
        margin: "6px 10px 4px 10px",
        color: 'white',
      }}
      >
        Continue
      </Button>
     
    </Box> 

    <Box 
          sx={{
       backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)), url(${bgtwo})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        flexWrap: 'wrap',
        height: '60vh',
        width:'20%',
        justifyContent: 'space-around',
        margin: 'auto',
        marginTop: '5%',
         '@media (max-width: 600px)': {
       width:'75%',
    },
      }}
    >
    <Typography
        sx={{
          color: 'white',
          borderRadius: '5px',
          fontSize: 25,
          fontWeight: 'bold',
          margin: "6px 10px 4px 10px"
        }}
        gutterBottom
      >
       Science and Agriculture 
      </Typography>
      <Button
      sx={{
        backgroundColor: 'none',
        border: '1px solid white',
        margin: "6px 10px 4px 10px",
        color: 'white',
      }}
      >
        Continue
      </Button>
     
    </Box> 

    <Box 
          sx={{
       backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)), url(${bgthree})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        flexWrap: 'wrap',
        height: '60vh',
        width:'20%',
        justifyContent: 'space-around',
        margin: 'auto',
        marginTop: '5%',
         '@media (max-width: 600px)': {
       width:'75%',
    },
      }}
    >
    <Typography
        sx={{
          color: 'white',
          borderRadius: '5px',
          fontSize: 25,
          fontWeight: 'bold',
          margin: "6px 10px 4px 10px"
        }}
        gutterBottom
      >
       Health
      </Typography>
      <Button
      sx={{
        backgroundColor: 'none',
        border: '1px solid white',
        margin: "6px 10px 4px 10px",
        color: 'white',
      }}
      >
        Continue
      </Button>
     
    </Box> 

     
    </Box> 
    </>
  );
}
 