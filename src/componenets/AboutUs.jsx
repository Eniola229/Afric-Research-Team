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


export default function AboutUs() {

  return (
    <>
    <Box 
     sx={{
       background: "linear-gradient(90deg, rgba(255, 244, 244, 1) 0%, rgba(255, 255, 255, 1) 0%, rgba(88, 217, 94, 1) 50%, rgba(254, 255, 254, 1) 100%)",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '40vh',  
        boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.5)',
        margin: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '5%',
        gap: 4,
        p: 2,
      }}
    >
     
    </Box> 
    </>
  );
}
 