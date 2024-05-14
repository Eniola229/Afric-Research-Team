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
import media from './img/life.jpg'; 
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export default function Health() {

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
     Health
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
     Here are some research papers and projects on health around the world ¹:
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
  Global Health": This is a research paper that discusses the overview of global health, emphasizing data on health outcomes, such as disease and death, and the effects of healthcare investments.
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
Life Expectancy": This is a research paper that examines life expectancy as a primary indicator of population health.
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
"Child and Infant Mortality": This is a research paper that discusses child mortality and how it remains one of the world’s largest problems and is a painful reminder of work yet to be done.
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
        Healthcare Spending": This is a research paper that discusses how healthcare is financed, how much we spend on it and what are the returns.
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
      "Health Outcomes": This is a research paper that discusses life expectancy, child mortality and burden of disease.
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
 