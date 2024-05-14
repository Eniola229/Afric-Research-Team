import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import logo from './img/Afric.png';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import subbg from './img/subbg.jpg';
import Swal from 'sweetalert2';
import { GoogleAuthProvider, signInWithPopup, sendEmailVerification, onAuthStateChanged, signOut} from 'firebase/auth';
import { auth, messaging } from './Auth/Firebase';
import {useParams, useNavigate} from "react-router-dom";  

export default function Login() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userData, setUserData] = useState({});
    const [isLoading, setIsLoading] = useState(true); 
    const navigate = useNavigate();


     useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (result) => {
      setIsLoading(false); 

      if (result) {
        const { displayName, email } = result;
        setUserData({ displayName, email });
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });

    return () => unsubscribe();
  }, []);

    const SignUpUsingGoogle = () => {
    setIsLoading(true); 

    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const { displayName, email, photoURL } = result.user;
        setUserData({ displayName, email, photoURL  });
        sendEmailVerification(result.user);
        setIsLoggedIn(true);
        setIsLoading(false); 
        navigate("/questions");
      })
      .catch((error) => {
        console.log({ error });
        setIsLoading(false); 
      });
  };

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
      sx={{
          backgroundImage: `url(${subbg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          margin: 'auto', 
      }}
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
      alignItems: 'center',}}>
      
      {isLoggedIn ? (
      <img
        src={userData.photoURL}
        style={{
          width: '50%',
          marginTop: '7%',
          backgroundColor: 'white',
          borderRadius: '50%'
        }}
      />
    ) : (
      <img
        src={logo}
        style={{
          width: '50%',
          marginTop: '7%',
          backgroundColor: 'white',
          borderRadius: '50%'
        }}
      />
    )}


    
    </div>
         <Typography 
        sx={{
        fontSize: 15,
        textAlign: 'center',
        borderRadius: '5px',
        fontWeight: 'bold',
        color: 'white'
      }} 
         color="text.secondary" 
         gutterBottom>
          {userData.displayName}
       </Typography>
       <Typography 
        sx={{
        fontSize: 20,
        textAlign: 'center',
        borderRadius: '5px',
        fontWeight: 'bold',
        color: 'white'
      }} 
         color="text.secondary" 
         gutterBottom>
         Subscribe/Login
       </Typography>
       <Typography 
        sx={{
        fontSize: 15,
        textAlign: 'center',
        borderRadius: '5px',
        fontWeight: 'bold',
        color: 'white'
      }} 
         color="text.secondary" 
         gutterBottom>
          We would love to be giving you feed back on your thoughts
       </Typography>

         {isLoggedIn ? ( // If user is authenticated, show logout button
          <>
        <Button
        to="/questions" 
         component={Link}
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
            marginTop:'3%'
          }}
         
         
        >
          {isLoggedIn ? 'Continue' : 'Lodding...'}
        </Button>
        </>

      ) : ( 
        <Button
         
          
          variant="contained"
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
            marginTop:'3%'
          }}
          onClick={SignUpUsingGoogle}
        >
          Next
        </Button>
      )}

        <Button 
       component={Link}
        to="/why" 
       sx={{
        backgroundColor: 'red',
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
       >Skip</Button>
      </Box>
     
  </Box>


  );
}
