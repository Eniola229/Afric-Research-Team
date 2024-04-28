import * as React from 'react';
import Box from '@mui/material/Box';
import logo from './img/AfricTv.png';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


export default function FirstPage() {
  return (
  <Box
      height={{ xs: '100%', sm: '100%', md: '100%' }} 
      width={{ xs: '90%', sm: 400, md: 500 }} 
      my={4}
      margin="auto"
      alignItems="center"
      justifyContent="center" 
      gap={4}
      p={2}
      sx={{ margin: 'auto', }}
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
           Question about your thoughts on the media, specifically in relation to a social media company's
       </Typography>

       <Button 
       sx={{
        backgroundColor: 'darkgreen',
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
       >Continue</Button>
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
