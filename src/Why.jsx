import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import logo from './img/AfricTv.png';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import subbg from './img/why.jpg';
import Swal from 'sweetalert2';
import { GoogleAuthProvider, signInWithPopup, sendEmailVerification, onAuthStateChanged, signOut} from 'firebase/auth';
import { auth, messaging } from './Auth/Firebase';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import {useParams, useNavigate} from "react-router-dom";    
import { db } from "./Auth/Firebase";
import { addDoc } from 'firebase/firestore';
import { collection } from 'firebase/firestore';
import { serverTimestamp } from 'firebase/firestore';


const initialState = {
  why: "",
}


export default function Why() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userData, setUserData] = useState({});
    const [isLoading, setIsLoading] = useState(true); 
    const [errors, setErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const navigate = useNavigate();
    const [data, setData] = useState(initialState);
    const { why } = data;


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

   const handleChange= (e) => {
    setData({...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    setIsSubmit(true);
    await addDoc(collection(db, "why"), {
      ...data,
      timestamp: serverTimestamp()
    })

   {/*This show if post is succesfully*/}
        Swal.fire({
          title: 'Thank you for your response!',
          icon: 'success',
          confirmButtonText: 'Ok'
        })
         navigate("/questions");
  }


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
          alignItems: 'center',
          margin: 'auto', 
      }}
    >
     <form  onSubmit={handleSubmit}>
     <Box 
        sx={{
          justifyContent: 'center', 
          alignItems: 'center', 
          margin:'auto',
          marginTop: '50%',
          backgroundColor: 'white',
          borderRadius: '5px',
          padding: '10px'
        }}
        >

       <Typography 
        sx={{
        fontSize: 20,
        textAlign: 'center',
        borderRadius: '5px',
        fontWeight: 'bold',
        color: 'black',
        backgroundColor: 'white'
      }} 
         color="text.secondary" 
         gutterBottom>
         You Click Skip Why?
       </Typography>
     
        
          <TextField
            id="outlined-helperText"
            label="Kindly Fill this Field"
            multiline
            rows={4}
            name="why"
            value={why}
            onChange={handleChange}
            helperText="You Click Skip Why?"
            sx={{
              width: '100%',
              marginTop: '3%'
            }}
          />

  
        <Button 
          type="submit"
          sx={{
            backgroundColor: 'darkgreen',
            color: 'white',
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center',
            margin: 'auto',
            height: '8vh',
            width: '200px',
            borderRadius: '15px',
             marginTop: "2%"
          }}
        >
          Continue
        </Button>
         <Button 
          onClick={SignUpUsingGoogle}
          sx={{
            backgroundColor: 'red',
            color: 'white',
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center',
            margin: 'auto',
            height: '8vh',
            width: '200px',
            borderRadius: '15px',
            marginTop: "2%"
          }}
        >
          Subscribe
        </Button>
   </Box>
   </form>
  </Box>


  );
}
