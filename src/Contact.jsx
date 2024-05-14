import * as React from 'react';
import Box from '@mui/material/Box';
import logo from './img/AfricTv.png';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import bg from './img/bg.jpg';
import Swal from 'sweetalert2';

export default function Contact() {
  return (
  <Box
      height={{ xs: '100%', sm: '100%', md: '100%' }} 
      width={{ xs: '90%', sm: 400, md: 500 }} 
      sx={{
          backgroundImage: `url(${bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          margin: 'auto', 
      }}
      my={4}
      margin="auto"
      alignItems="center"
      justifyContent="center" 
      gap={4}
      p={2}
    >
    <Box 
    sx={{
      justifyContent: 'center', 
      alignItems: 'center', 
      margin:'auto'}}
    >
     <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center' }}>
      <img 
        src={logo} 
        style={{ 
          width: '50%', 
          marginTop:'7%',
         borderRadius: '50%' }}
      />
    </div>

       <Typography 
        sx={{
        fontSize: 18,
        textAlign: 'center',
        backgroundColor: 'white',
        borderRadius: '5px',
        fontWeight: 'bold'
      }} 
         color="text.secondary" 
         gutterBottom>
           You can send a message to us on WhatsApp and X(twitter)
       </Typography>

         <Button 
       component={Link}
        to="https://twitter.com/TvAfric47294" 
       sx={{
        backgroundColor: 'darkblue',
        color:'white',
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        margin: 'auto',
        height:'8vh',
        width:"200px",
        borderRadius: '15px',
        marginTop:'2%'
       }}
       >X(twitter)</Button>

       <Button 
       component={Link}
        to="https://wa.link/x37ly1" 
       sx={{
        backgroundColor: 'green',
        color:'white',
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        margin: 'auto',
        height:'8vh',
        width:"200px",
        borderRadius: '15px',
        marginTop:'2%'
       }}
       >WhatsApp</Button>
      
        <Button 
        component={Link}
        to="/about-us" 
       sx={{
        backgroundColor: 'gray',
        color:'white',
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        margin: 'auto',
        height:'8vh',
        width:"200px",
        borderRadius: '15px',
        marginTop:'3%'

       }}
       >About AfricTv</Button>
      </Box>
     
  </Box>


  );
}
