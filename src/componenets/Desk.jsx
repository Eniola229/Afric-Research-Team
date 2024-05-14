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
import bolanle from '../img/bolanle.jpeg'; 
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export default function Desk() {

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
        From Our Lead Researcher
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
      Our team is made up  experts in different aspects like graphics design,social media management, software developer and many more we are passionate about discovering new knowledge and solving real-world problems. We work together to:
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
     Explore new ideas and technologies
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
    Conduct experiments and analyze data
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
     Share our findings with the world
      </Typography>


       <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Our current projects include:
        </AccordionSummary>
        <AccordionDetails>
         Making research about improving on our team
        </AccordionDetails>
        <AccordionDetails>
        Developing new technology
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
         We value:
        </AccordionSummary>
        <AccordionDetails>
         Teamwork and collaboration
        </AccordionDetails>
         <AccordionDetails>
         Creativity and innovative thinking
        </AccordionDetails>
         <AccordionDetails>
        Attention to detail and rigor
        </AccordionDetails>
      </Accordion>
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
      backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)), url(${bolanle})`,
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
 