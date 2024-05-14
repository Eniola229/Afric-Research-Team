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

  userEmail: "",
  userName: "",
  otherThoughts: "",
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
  qu15f4,

  userEmail,
  userName,
  otherThoughts
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
    await addDoc(collection(db, "research_data_v2.0.0"), {
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
        1. What would make Social Media app's easier to use?
       </Typography>
     
         <FormGroup>
            <FormControlLabel sx={{color:'white', fontWeight:'bold'}} control={<Checkbox sx={{ color: 'white' }} />} value=" Simpler navigation" name="qu1f1" onChange={handleChange} label=" Simpler navigation" />
            <FormControlLabel sx={{color:'white', fontWeight:'bold'}}  control={<Checkbox sx={{ color: 'white' }} />} value="A personalized home page" name="qu1f2" onChange={handleChange}  label="A personalized home page" />
            <FormControlLabel sx={{color:'white', fontWeight:'bold'}}  control={<Checkbox  sx={{ color: 'white' }}/>} value="Better search functionality" name="qu1f3" onChange={handleChange} label="Better search functionality" />
             <Typography sx={{color: 'white',}}>
              Something else (tell us!)
            </Typography>
            </FormGroup>   
        <TextField
            id="outlined-helperText"
            label="Kindly Write it here"
            multiline
            rows={4}
            name="qu1f4"
            value={qu1f4}
            onChange={handleChange}
            sx={{
              width: '100%',
              marginTop: '3%',
              border: '1px solid white',
              color:'white'
            }}
          />
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
        2. How easy is it to navigate the current Social Media app's you are using now?
       </Typography>
     
         <FormGroup>
            <FormControlLabel sx={{color:'white', fontWeight:'bold'}} control={<Checkbox sx={{ color: 'white' }} />} value="Very easy" name="qu2f1" onChange={handleChange} label="Very easy" />
            <FormControlLabel sx={{color:'white', fontWeight:'bold'}}  control={<Checkbox sx={{ color: 'white' }} />} value="A bit difficult, but I can manage" name="qu2f2" onChange={handleChange} label="A bit difficult, but I can manage" />
            <Typography sx={{color: 'white',}}>
              Something else (tell us!)
            </Typography>
        </FormGroup>   
         <TextField
            id="outlined-helperText"
            label="Kindly Write it here"
            multiline
            rows={4}
            name="qu2f3"
            value={qu2f3}
            onChange={handleChange}
            sx={{
              width: '100%',
              marginTop: '3%',
              border: '1px solid white',
              color:'white'
            }}
          />
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
        3. What device do you use to access the current Social Media app?
       </Typography>
     
         <FormGroup>
            <FormControlLabel sx={{color:'white', fontWeight:'bold'}} control={<Checkbox sx={{ color: 'white' }} />} value="Smartphone (iPhone or Android)" name="qu3f1" onChange={handleChange} label="Smartphone (iPhone or Android)" />
            <FormControlLabel sx={{color:'white', fontWeight:'bold'}}  control={<Checkbox sx={{ color: 'white' }} />} value="Tablet (iPad or Android)" name="qu3f2" onChange={handleChange} label="Tablet (iPad or Android)" />
            <FormControlLabel sx={{color:'white', fontWeight:'bold'}}  control={<Checkbox  sx={{ color: 'white' }}/>} value="Computer (Windows or Mac)" name="qu3f3" onChange={handleChange} label="Computer (Windows or Mac)" />
            <Typography sx={{color: 'white',}}>
              Something else (tell us!)
            </Typography>
        </FormGroup>  
        <TextField
            id="outlined-helperText"
            label="Kindly Write it here"
            multiline
            rows={4}
            name="qu3f4"
            value={qu3f4}
            onChange={handleChange}
            sx={{
              width: '100%',
              marginTop: '3%',
              border: '1px solid white',
              color:'white'
            }}
          /> 
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
        4. How important is sharing videos to other social media?
       </Typography>
     
         <FormGroup>
            <FormControlLabel sx={{color:'white', fontWeight:'bold'}} control={<Checkbox sx={{ color: 'white' }} />} value="Very important" name="qu4f1" onChange={handleChange} label="Very important" />
            <FormControlLabel sx={{color:'white', fontWeight:'bold'}}  control={<Checkbox sx={{ color: 'white' }} />} value=" Somewhat important" name="qu4f2" onChange={handleChange} label=" Somewhat important" />
            <FormControlLabel sx={{color:'white', fontWeight:'bold'}}  control={<Checkbox  sx={{ color: 'white' }}/>} value=" Not very important" name="qu4f3" onChange={handleChange} label=" Not very important" />
            <FormControlLabel sx={{color:'white', fontWeight:'bold'}}  control={<Checkbox  sx={{ color: 'white' }}/>} value=" Not at all important" name="qu4f4" onChange={handleChange} label=" Not at all important" />
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
        5. Would you like to see live streams and interactive features?
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
        6. Would you like a special section for popular challenges?
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
        12.  How can the app show more videos you'll like?
       </Typography>
     
         <FormGroup>
            <FormControlLabel sx={{color:'white', fontWeight:'bold'}} control={<Checkbox sx={{ color: 'white' }} />} value="Use AI to learn your preferences" name="qu12f1" onChange={handleChange}  label="Use AI to learn your preferences" />
            <FormControlLabel sx={{color:'white', fontWeight:'bold'}} control={<Checkbox  sx={{ color: 'white' }}/>} value="Ask you to select topics you like" name="qu12f2" onChange={handleChange} label="Ask you to select topics you like" />
            <FormControlLabel sx={{color:'white', fontWeight:'bold'}} control={<Checkbox sx={{ color: 'white' }} />} value="Show videos from creators you already follow" name="qu12f3" onChange={handleChange} label="Show videos from creators you already follow" />
             <Typography sx={{color: 'white',}}>
              Something else (tell us!)
            </Typography>
        </FormGroup>   
        <TextField
            id="outlined-helperText"
            label="Kindly Write it here"
            multiline
            rows={4}
            name="qu12f4"
            value={qu12f4}
            onChange={handleChange}
            sx={{
              width: '100%',
              marginTop: '3%',
              border: '1px solid white',
              color:'white'
            }}
          />
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
         13. Are there any missing features in the current Social Media App you are using?
       </Typography>
     
         <FormGroup>
            <FormControlLabel sx={{color:'white', fontWeight:'bold'}} control={<Checkbox sx={{ color: 'white' }} />} value="Yes" name="qu13f1" onChange={handleChange} label="Yes" />
            <FormControlLabel sx={{color:'white', fontWeight:'bold'}}  control={<Checkbox  sx={{ color: 'white' }}/>} value="No (None>" name="qu13f2" onChange={handleChange} label="No" />
            <Typography sx={{color: 'white',}}>
              If Yes Tell us what they are?
            </Typography>
        </FormGroup>   
        <TextField
            id="outlined-helperText"
            label="Kindly Write it here"
            multiline
            rows={4}
            name="qu13f3"
            value={qu13f3}
            onChange={handleChange}
            sx={{
              width: '100%',
              marginTop: '3%',
              border: '1px solid white',
              color:'white'
            }}
          />
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
            <FormControlLabel sx={{color:'white', fontWeight:'bold'}} control={<Checkbox sx={{ color: 'white' }} />} value="Badges and rewards" name="qu15f3" onChange={handleChange} label="Badges and rewards" />
            <FormControlLabel sx={{color:'white', fontWeight:'bold'}}  control={<Checkbox  sx={{ color: 'white' }}/>} value="Leaderboards" name="qu15f3" onChange={handleChange} label="Leaderboards" />
            <FormControlLabel sx={{color:'white', fontWeight:'bold'}} control={<Checkbox sx={{ color: 'white' }} />} value="Recognition from influencers" name="qu15f3" onChange={handleChange} label="Recognition from influencers" />
            <FormControlLabel sx={{color:'white', fontWeight:'bold'}}  control={<Checkbox  sx={{ color: 'white' }}/>} value="Making a difference" name="qu15f3" onChange={handleChange} label="Making a difference" />
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
        What other thing do you think Social Media App,s should improve on or include in there features?
       </Typography>
        
       <TextField
            id="outlined-helperText"
            label="Kindly Write it here"
            multiline
            rows={4}
            name="otherThoughts"
            value={otherThoughts}
            onChange={handleChange}
            sx={{
              width: '100%',
              marginTop: '3%',
              border: '1px solid white',
              color:'white'
            }}
          />
         
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
