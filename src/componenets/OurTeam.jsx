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
import bgone from '../img/joshua.jpg'; 
import emma from '../img/emma.jpeg'; 
import friday from '../img/friday.jpeg'; 
import bolanle from '../img/bolanle.jpeg'; 
import praise from '../img/praise.jpeg'; 
import grace from '../img/grace.jpeg'; 


export default function OurTeam() {

  return (
    <>
      <Box 
      sx={{ 
        display: 'flex',
        flexWrap: 'wrap',
        height: 'auto',
        width: '100%',
        justifyContent: 'space-around',
        alignItems: 'center',
        margin: 'auto',
        marginTop: '3%',
        gap: '3px',
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
        height: '60vh',
        width:'20%',
        margin: 'auto',
        flexDirection: 'column',  
        marginTop: '5%',
        justifyContent: 'flex-end',
        '@media (max-width: 600px)': {
       width:'75%',
    },
      }}
    >
    <Typography
        sx={{
          color: 'white',
          borderRadius: '5px',
          fontSize: 20,
          fontWeight: 'bold',
          margin: "6px 10px 4px 10px"
        }}
        gutterBottom
      >
       Adeyemi Joshua
      </Typography>
       <Typography
        sx={{
          color: 'white',
          borderRadius: '5px',
          fontSize: 15,
          fontWeight: 'bold',
          margin: "6px 10px 4px 10px"
        }}
        gutterBottom
      >
       President AfricICL
      </Typography>
    </Box> 

    <Box 
          sx={{
       backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)), url(${emma})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '60vh',
        width:'20%',
        margin: 'auto',
        flexDirection: 'column',  
        marginTop: '5%',
        justifyContent: 'flex-end',
        '@media (max-width: 600px)': {
       width:'75%',
    },
      }}
    >
    <Typography
        sx={{
          color: 'white',
          borderRadius: '5px',
          fontSize: 20,
          fontWeight: 'bold',
          margin: "6px 10px 4px 10px"
        }}
        gutterBottom
      >
       Adeyemi Emmanuel
      </Typography>
       <Typography
        sx={{
          color: 'white',
          borderRadius: '5px',
          fontSize: 15,
          fontWeight: 'bold',
          margin: "6px 10px 4px 10px"
        }}
        gutterBottom
      >
      Vice President / Strategist
      </Typography>
    </Box> 

      <Box 
          sx={{
       backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)), url(${friday})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '60vh',
        width:'20%',
        margin: 'auto',
        flexDirection: 'column',  
        marginTop: '5%',
        justifyContent: 'flex-end',
        '@media (max-width: 600px)': {
       width:'75%',
    },
      }}
    >
    <Typography
        sx={{
          color: 'black',
          borderRadius: '5px',
          fontSize: 20,
          fontWeight: 'bold',
          margin: "6px 10px 4px 10px"
        }}
        gutterBottom
      >
      Friday
      </Typography>
       <Typography
        sx={{
          color: 'black',
          borderRadius: '5px',
          fontSize: 15,
          fontWeight: 'bold',
          margin: "6px 10px 4px 10px"
        }}
        gutterBottom
      >
     Lead Developer/Project Manager
      </Typography>
    </Box> 


    <Box 
          sx={{
       backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)), url(${bolanle})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '60vh',
        width:'20%',
        margin: 'auto',
        flexDirection: 'column',  
        marginTop: '5%',
        justifyContent: 'flex-end',
        '@media (max-width: 600px)': {
       width:'75%',
    },
      }}
    >
    <Typography
        sx={{
          color: 'white',
          borderRadius: '5px',
          fontSize: 20,
          fontWeight: 'bold',
          margin: "6px 10px 4px 10px"
        }}
        gutterBottom
      >
     Fasakin Rachael Omobolanle
      </Typography>
       <Typography
        sx={{
          color: 'white',
          borderRadius: '5px',
          fontSize: 15,
          fontWeight: 'bold',
          margin: "6px 10px 4px 10px"
        }}
        gutterBottom
      >
     Lead Researcher/Ass Project Manager
      </Typography>
    </Box> 

     <Box 
          sx={{
       backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)), url(${praise})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '60vh',
        width:'20%',
        margin: 'auto',
        flexDirection: 'column',  
        marginTop: '5%',
        justifyContent: 'flex-end',
        '@media (max-width: 600px)': {
       width:'75%',
    },
      }}
    >
    <Typography
        sx={{
          color: 'black',
          borderRadius: '5px',
          fontSize: 20,
          fontWeight: 'bold',
          margin: "6px 10px 4px 10px"
        }}
        gutterBottom
      >
     Anoliefo Praise Chidinma
      </Typography>
       <Typography
        sx={{
          color: 'black',
          borderRadius: '5px',
          fontSize: 15,
          fontWeight: 'bold',
          margin: "6px 10px 4px 10px"
        }}
        gutterBottom
      >
     Lead Social Media Manager/Ass Graphics Designer
      </Typography>
    </Box> 

    <Box 
          sx={{
       backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)), url(${grace})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '60vh',
        width:'20%',
        margin: 'auto',
        flexDirection: 'column',  
        marginTop: '5%',
        justifyContent: 'flex-end',
        '@media (max-width: 600px)': {
       width:'75%',
    },
      }}
    >
    <Typography
        sx={{
          color: 'white',
          borderRadius: '5px',
          fontSize: 20,
          fontWeight: 'bold',
          margin: "6px 10px 4px 10px"
        }}
        gutterBottom
      >
     Taffi Grace
      </Typography>
       <Typography
        sx={{
          color: 'white',
          borderRadius: '5px',
          fontSize: 15,
          fontWeight: 'bold',
          margin: "6px 10px 4px 10px"
        }}
        gutterBottom
      >
     Lead Graphics Designer
      </Typography>
    </Box> 
    
    </Box> 
    </>
  );
}
 