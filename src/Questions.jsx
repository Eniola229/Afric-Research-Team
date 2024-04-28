import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import subbg from './img/que.jpg';
import Swal from 'sweetalert2';
import { GoogleAuthProvider, signInWithPopup, sendEmailVerification, onAuthStateChanged, signOut} from 'firebase/auth';
import { auth, messaging } from './Auth/Firebase';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Header from './componenets/Header';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {useParams, useNavigate} from "react-router-dom";
import { db } from "./Auth/Firebase";
import { addDoc } from 'firebase/firestore';
import { collection } from 'firebase/firestore';
import { serverTimestamp } from 'firebase/firestore';

const initialState = {
  qu1f1: "",
  qu1f2: "",
  qu1f3: "",
  qu1f4: "",

  qu2f1: "",
  qu2f2: "",
  qu2f3: "",
  qu2f4: "",
 
  qu3f1: "",
  qu3f2: "",
  qu3f3: "",
  qu3f4: "",

  qu4f1: "",
  qu4f2: "",
  qu4f3: "",
  qu4f4: "",

  qu5f1: "",
  qu5f2: "",

  qu6f1: "",
  qu6f2: "",

  qu7f1: "",
  qu7f2: "",

  qu8f1: "",
  qu8f2: "",

  qu9f1: "",
  qu9f2: "",

  qu10f1: "",
  qu10f2: "",

  qu11f1: "",
  qu11f2: "",

  qu12f1: "",
  qu12f2: "",
  qu12f3: "",
  qu12f4: "",

  qu13f1: "",
  qu13f2: "",
  qu13f3: "",
  qu13f4: "",

  qu14f1: "",
  qu14f2: "",
  qu14f3: "",
  qu14f4: "",

  qu15f1: "",
  qu15f2: "",
  qu15f3: "",
  qu15f4: "",
}



                  
                  

export default function Question() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [errors, setErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [userData, setUserData] = useState({});
    const [isLoading, setIsLoading] = useState(true); 
    const navigate = useNavigate();
    const [data, setData] = useState(initialState);
    const {
  qu1f1,
  qu1f2,
  qu1f3,
  qu1f4,

  qu2f1,
  qu2f2,
  qu2f3,
  qu2f4,
 
  qu3f1,
  qu3f2,
  qu3f3,
  qu3f4,

  qu4f1,
  qu4f2,
  qu4f3,
  qu4f4,

  qu5f1,
  qu5f2,

  qu6f1,
  qu6f2,

  qu7f1,
  qu7f2,

  qu8f1,
  qu8f2,

  qu9f1,
  qu9f2,

  qu10f1,
  qu10f2,

  qu11f1,
  qu11f2,

  qu12f1,
  qu12f2,
  qu12f3,
  qu12f4,

  qu13f1,
  qu13f2,
  qu13f3,
  qu13f4,

  qu14f1,
  qu14f2,
  qu14f3,
  qu14f4,

  qu15f1,
  qu15f2,
  qu15f3,
  qu15f4
          } = data;


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

    const handleChange= (e) => {
    setData({...data, [e.target.name]: e.target.value });
  };

   
   const handleSubmit = async(e) => {
    e.preventDefault();

    setIsSubmit(true);
    await addDoc(collection(db, "research_data_v1.0.0"), {
      ...data,
      timestamp: serverTimestamp()
    })

   {/*This show if post is succesfully*/}
        Swal.fire({
          title: 'Thank You for your Time! We will give you feed back soon.',
          icon: 'success',
          confirmButtonText: 'Ok'
        })
         navigate("/contact");
  }


  return (
  <Box
     height={{ xs: 'auto', sm: 'auto', md: 'auto' }} 
      width={{ xs: '90%', sm: 400, md: 500 }} 
      my={4}
      margin="auto"
      alignItems="center"
      justifyContent="center" 
      gap={4}
      p={2}
      sx={{
          backgroundColor: 'green',
          margin: 'auto', 
          height: 'auto'
      }}
    >
    <Header/>


     <form  onSubmit={handleSubmit}>
     <Box 
        sx={{
          justifyContent: 'center', 
          alignItems: 'center', 
          margin:'auto',
          marginTop: '5%',
          backgroundColor: 'transparent',
          border: '1px solid black',
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
        1. What type of content would you like to see more on social media app's?
       </Typography>
     
         <FormGroup>
            <FormControlLabel sx={{color:'white', fontWeight:'bold'}} control={<Checkbox sx={{ color: 'white' }} />} value="Leatest Updates" name="qu1f1" onChange={handleChange} label="Leatest Updates" />
            <FormControlLabel sx={{color:'white', fontWeight:'bold'}}  control={<Checkbox sx={{ color: 'white' }} />} value="Comedy" name="qu1f2" onChange={handleChange}  label="Comedy" />
            <FormControlLabel sx={{color:'white', fontWeight:'bold'}}  control={<Checkbox  sx={{ color: 'white' }}/>} value="Movies and Music" name="qu1f3" onChange={handleChange} label="Movies and Music" />
            <FormControlLabel sx={{color:'white', fontWeight:'bold'}}  control={<Checkbox  sx={{ color: 'white' }}/>} value="All of the Above" name="qu1f4" onChange={handleChange} label="All of the Above" />
        </FormGroup>   
   </Box>

    <Box 
        sx={{
          justifyContent: 'center', 
          alignItems: 'center', 
          margin:'auto',
          marginTop: '5%',
          backgroundColor: 'transparent',
          border: '1px solid black',
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
        2. Would you like to have a feature to react to videos with emotions?
       </Typography>
     
         <FormGroup>
            <FormControlLabel sx={{color:'white', fontWeight:'bold'}} control={<Checkbox sx={{ color: 'white' }} />} value="Yes" name="qu2f1" onChange={handleChange} label="Yes" />
            <FormControlLabel sx={{color:'white', fontWeight:'bold'}}  control={<Checkbox sx={{ color: 'white' }} />} value="No" name="qu2f2" onChange={handleChange} label="No" />
            <FormControlLabel sx={{color:'white', fontWeight:'bold'}}  control={<Checkbox  sx={{ color: 'white' }}/>} value="Maybe" name="qu2f3" onChange={handleChange} label="Maybe" />
            <FormControlLabel sx={{color:'white', fontWeight:'bold'}}  control={<Checkbox  sx={{ color: 'white' }}/>} label="Not Sure" />
        </FormGroup>   
   </Box>

    <Box 
        sx={{
          justifyContent: 'center', 
          alignItems: 'center', 
          margin:'auto',
          marginTop: '5%',
          backgroundColor: 'transparent',
          border: '1px solid black',
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
        3. How would you like to discover new content on the Social Media app?
       </Typography>
     
         <FormGroup>
            <FormControlLabel sx={{color:'white', fontWeight:'bold'}} control={<Checkbox sx={{ color: 'white' }} />} value="Hashtags" name="qu3f1" onChange={handleChange} label="Hashtags" />
            <FormControlLabel sx={{color:'white', fontWeight:'bold'}}  control={<Checkbox sx={{ color: 'white' }} />} value="Algorithmic feed" name="qu3f2" onChange={handleChange} label="Algorithmic feed" />
            <FormControlLabel sx={{color:'white', fontWeight:'bold'}}  control={<Checkbox  sx={{ color: 'white' }}/>} value="Friends'recommendations" name="qu3f3" onChange={handleChange} label="Friends'recommendations" />
            <FormControlLabel sx={{color:'white', fontWeight:'bold'}}  control={<Checkbox  sx={{ color: 'white' }}/>} value="All of the above" name="qu2f4" onChange={handleChange} label="All of the above" />
        </FormGroup>   
   </Box>

     <Box 
        sx={{
          justifyContent: 'center', 
          alignItems: 'center', 
          margin:'auto',
          marginTop: '5%',
          backgroundColor: 'transparent',
          border: '1px solid black',
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
        4. How would you like to earn rewards and prizes on the Social Media app's?
       </Typography>
     
         <FormGroup>
            <FormControlLabel sx={{color:'white', fontWeight:'bold'}} control={<Checkbox sx={{ color: 'white' }} />} value="By creating popular content" name="qu4f1" onChange={handleChange} label="By creating popular content" />
            <FormControlLabel sx={{color:'white', fontWeight:'bold'}}  control={<Checkbox sx={{ color: 'white' }} />} value="By participating in challenges" name="qu4f2" onChange={handleChange} label="By participating in challenges" />
            <FormControlLabel sx={{color:'white', fontWeight:'bold'}}  control={<Checkbox  sx={{ color: 'white' }}/>} value="By referring friends" name="qu4f3" onChange={handleChange} label="By referring friends" />
            <FormControlLabel sx={{color:'white', fontWeight:'bold'}}  control={<Checkbox  sx={{ color: 'white' }}/>} value="All of the above" name="qu4f4" onChange={handleChange} label="All of the above" />
        </FormGroup>   
   </Box>

      <Box 
        sx={{
          justifyContent: 'center', 
          alignItems: 'center', 
          margin:'auto',
          marginTop: '5%',
          backgroundColor: 'transparent',
          border: '1px solid black',
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
        5. Would you want to see a live streaming feature? (Yes/No)
       </Typography>
     
         <FormGroup>
            <FormControlLabel sx={{color:'white', fontWeight:'bold'}} value="yes" name="qu5f1" onChange={handleChange}  control={<Checkbox sx={{ color: 'white' }} />} label="Yes" />
            <FormControlLabel sx={{color:'white', fontWeight:'bold'}}  value="no" name="qu5f2" onChange={handleChange} control={<Checkbox  sx={{ color: 'white' }}/>} label="No" />
        </FormGroup>   
   </Box>
   <Box 
        sx={{
          justifyContent: 'center', 
          alignItems: 'center', 
          margin:'auto',
          marginTop: '5%',
          backgroundColor: 'transparent',
          border: '1px solid black',
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
        6. Would you like to see a feature to share videos on other social media platforms? (Yes/No)
       </Typography>
     
         <FormGroup>
            <FormControlLabel sx={{color:'white', fontWeight:'bold'}} value="yes" name="qu6f1" onChange={handleChange}  control={<Checkbox sx={{ color: 'white' }} />} label="Yes" />
            <FormControlLabel sx={{color:'white', fontWeight:'bold'}} value="no" name="qu6f2" onChange={handleChange}   control={<Checkbox  sx={{ color: 'white' }}/>} label="No" />
        </FormGroup>   
   </Box>

     <Box 
        sx={{
          justifyContent: 'center', 
          alignItems: 'center', 
          margin:'auto',
          marginTop: '5%',
          backgroundColor: 'transparent',
          border: '1px solid black',
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
        7. Do you think the app should have a hashtag challenge feature? (Yes/No)
       </Typography>
     
         <FormGroup>
            <FormControlLabel sx={{color:'white', fontWeight:'bold'}} value="yes" name="qu7f1" onChange={handleChange}  control={<Checkbox sx={{ color: 'white' }} />} label="Yes" />
            <FormControlLabel sx={{color:'white', fontWeight:'bold'}} value="no" name="qu7f2" onChange={handleChange}  control={<Checkbox  sx={{ color: 'white' }}/>} label="No" />
        </FormGroup>   
   </Box>

     <Box 
        sx={{
          justifyContent: 'center', 
          alignItems: 'center', 
          margin:'auto',
          marginTop: '5%',
          backgroundColor: 'transparent',
          border: '1px solid black',
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
        8. Would you want to see a feature to create and join communities based on interests? (Yes/No)
       </Typography>
     
         <FormGroup>
            <FormControlLabel sx={{color:'white', fontWeight:'bold'}} value="yes" name="qu8f1" onChange={handleChange}  control={<Checkbox sx={{ color: 'white' }} />} label="Yes" />
            <FormControlLabel sx={{color:'white', fontWeight:'bold'}} value="no" name="quf12" onChange={handleChange}  control={<Checkbox  sx={{ color: 'white' }}/>} label="No" />
        </FormGroup>   
   </Box>

     <Box 
        sx={{
          justifyContent: 'center', 
          alignItems: 'center', 
          margin:'auto',
          marginTop: '5%',
          backgroundColor: 'transparent',
          border: '1px solid black',
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
        9. Should the app have a feature to report and block users for online safety? (Yes/No)
       </Typography>
     
         <FormGroup>
            <FormControlLabel sx={{color:'white', fontWeight:'bold'}} value="yes" name="qu9f1" onChange={handleChange}  control={<Checkbox sx={{ color: 'white' }} />} label="Yes" />
            <FormControlLabel sx={{color:'white', fontWeight:'bold'}} value="no" name="qu9f2" onChange={handleChange}  control={<Checkbox  sx={{ color: 'white' }}/>} label="No" />
        </FormGroup>   
   </Box>

     <Box 
        sx={{
          justifyContent: 'center', 
          alignItems: 'center', 
          margin:'auto',
          marginTop: '5%',
          backgroundColor: 'transparent',
          border: '1px solid black',
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
        10. Would you want to see a feature to edit videos with advanced tools and filters? (Yes/No)
       </Typography>
     
         <FormGroup>
            <FormControlLabel sx={{color:'white', fontWeight:'bold'}} value="yes" name="qu10f1" onChange={handleChange}  control={<Checkbox sx={{ color: 'white' }} />} label="Yes" />
            <FormControlLabel sx={{color:'white', fontWeight:'bold'}} value="yes" name="qu10f2" onChange={handleChange}  control={<Checkbox  sx={{ color: 'white' }}/>} label="No" />
        </FormGroup>   
   </Box>

        <Box 
        sx={{
          justifyContent: 'center', 
          alignItems: 'center', 
          margin:'auto',
          marginTop: '5%',
          backgroundColor: 'transparent',
          border: '1px solid black',
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
        11. Do you think the app should have a feature to see videos from users in your location? (Yes/No)
       </Typography>
     
         <FormGroup>
            <FormControlLabel sx={{color:'white', fontWeight:'bold'}} value="yes" name="qu11f1" onChange={handleChange}  control={<Checkbox sx={{ color: 'white' }} />} label="Yes" />
            <FormControlLabel sx={{color:'white', fontWeight:'bold'}} value="no" name="qu11f2" onChange={handleChange}  control={<Checkbox  sx={{ color: 'white' }}/>} label="No" />
        </FormGroup>   
   </Box>
    <Box 
        sx={{
          justifyContent: 'center', 
          alignItems: 'center', 
          margin:'auto',
          marginTop: '5%',
          backgroundColor: 'transparent',
          border: '1px solid black',
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
        12.  What would you like to showcase on the app to promote your country's culture?
       </Typography>
     
         <FormGroup>
            <FormControlLabel sx={{color:'white', fontWeight:'bold'}} control={<Checkbox sx={{ color: 'white' }} />} value="Traditional dance" name="qu12f1" onChange={handleChange}  label="Traditional dance" />
            <FormControlLabel sx={{color:'white', fontWeight:'bold'}} control={<Checkbox  sx={{ color: 'white' }}/>} value="Local music" name="qu12f2" onChange={handleChange} label="Local music" />
            <FormControlLabel sx={{color:'white', fontWeight:'bold'}} control={<Checkbox sx={{ color: 'white' }} />} value="Art and craft" name="qu12f3" onChange={handleChange} label="Local music"label="Art and craft" />
            <FormControlLabel sx={{color:'white', fontWeight:'bold'}} control={<Checkbox  sx={{ color: 'white' }}/>} value="Cuisine" name="qu12f4" onChange={handleChange} label="Cuisine" />
        </FormGroup>   
   </Box>

    <Box 
        sx={{
          justifyContent: 'center', 
          alignItems: 'center', 
          margin:'auto',
          marginTop: '5%',
          backgroundColor: 'transparent',
          border: '1px solid black',
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
         13. How would you like to connect with global users?
       </Typography>
     
         <FormGroup>
            <FormControlLabel sx={{color:'white', fontWeight:'bold'}} control={<Checkbox sx={{ color: 'white' }} />} value="Language translation feature" name="qu13f1" onChange={handleChange} label="Language translation feature" />
            <FormControlLabel sx={{color:'white', fontWeight:'bold'}}  control={<Checkbox  sx={{ color: 'white' }}/>} value="Hashtag challenges" name="qu13f2" onChange={handleChange} label="Hashtag challenges" />
            <FormControlLabel sx={{color:'white', fontWeight:'bold'}} control={<Checkbox sx={{ color: 'white' }} />} value="irtual events" name="qu13f3" onChange={handleChange} label="Virtual events" />
            <FormControlLabel sx={{color:'white', fontWeight:'bold'}}  control={<Checkbox  sx={{ color: 'white' }}/>} value="Cultural exchange programs" name="qu13f4" onChange={handleChange} label=" Cultural exchange programs" />
        </FormGroup>   
   </Box>
    <Box 
        sx={{
          justifyContent: 'center', 
          alignItems: 'center', 
          margin:'auto',
          marginTop: '5%',
          backgroundColor: 'transparent',
          border: '1px solid black',
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
        14. What social issue would you like to raise awareness about?
       </Typography>
     
         <FormGroup>
            <FormControlLabel sx={{color:'white', fontWeight:'bold'}} control={<Checkbox sx={{ color: 'white' }} />} value="Education" name="qu14f1" onChange={handleChange} label="Education" />
            <FormControlLabel sx={{color:'white', fontWeight:'bold'}}  control={<Checkbox  sx={{ color: 'white' }}/>} value="Environment" name="qu14f2" onChange={handleChange} label="Environment" />
            <FormControlLabel sx={{color:'white', fontWeight:'bold'}} control={<Checkbox sx={{ color: 'white' }} />} value="Healthcare" name="qu14f3" onChange={handleChange} label="Healthcare" />
            <FormControlLabel sx={{color:'white', fontWeight:'bold'}}  control={<Checkbox  sx={{ color: 'white' }}/>} value="Equality" name="qu14f4" onChange={handleChange} label=" Equality" />
        </FormGroup>   
   </Box>
     <Box 
        sx={{
          justifyContent: 'center', 
          alignItems: 'center', 
          margin:'auto',
          marginTop: '5%',
          backgroundColor: 'transparent',
          border: '1px solid black',
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
        15. What motivates you to create content with social impact?
       </Typography>
     
         <FormGroup>
            <FormControlLabel sx={{color:'white', fontWeight:'bold'}} control={<Checkbox sx={{ color: 'white' }} />} value="adges and rewards" name="qu14f3" onChange={handleChange} label="Badges and rewards" />
            <FormControlLabel sx={{color:'white', fontWeight:'bold'}}  control={<Checkbox  sx={{ color: 'white' }}/>} value="Leaderboards" name="qu14f3" onChange={handleChange} label="Leaderboards" />
            <FormControlLabel sx={{color:'white', fontWeight:'bold'}} control={<Checkbox sx={{ color: 'white' }} />} value="Recognition from influencers" name="qu14f3" onChange={handleChange} label="Recognition from influencers" />
            <FormControlLabel sx={{color:'white', fontWeight:'bold'}}  control={<Checkbox  sx={{ color: 'white' }}/>} value="Making a difference" name="qu14f3" onChange={handleChange} label="Making a difference" />
        </FormGroup>   
   </Box>



     <Button 
         type="submit"
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
          Continue
        </Button>

   </form>
  </Box>


  );
}
