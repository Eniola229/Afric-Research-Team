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
import { auth, messaging } from '../Auth/Firebase';
import { GoogleAuthProvider, signInWithPopup, sendEmailVerification, onAuthStateChanged, signOut} from 'firebase/auth';
import Avatar from '@mui/material/Avatar';
import { useMediaQuery, useTheme } from '@mui/material';
import Swal from 'sweetalert2';
import SideNav from './SideNav';
import {useParams, useNavigate} from "react-router-dom";    


export default function Header() {
  const theme = useTheme();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [email, setEmail] = useState('');
  const [open, setOpen] = useState(false);
  const [openmsg, setOpenmsg] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState({});
  const [isLoading, setIsLoading] = useState(true); 
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();




  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

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
      })
      .catch((error) => {
        console.log({ error });
        setIsLoading(false); 
      });
  };

    const handleLogout = () => {
    setIsLoading(true); 

    signOut(auth)
      .then(() => {
        setUserData({});
        setIsLoggedIn(false);
        setIsLoading(false); 
        navigate("/");
      })
      .catch((error) => {
        console.log({ error });
        setIsLoading(false); 
      });
  };




  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ background: 'transparent', boxShadow: 'none', color: 'white' }}>
        <Toolbar>
          
          <Typography  sx={{ flexGrow: 1, fontWeight: "bold", fontSize: isMobile ? '1.2rem': '1.7rem', }}>
            Afric Research Team
          </Typography> 




         
      {/*{isLoggedIn ? ( // If user is authenticated, show logout button
          <>
        <Button
          variant="contained"
          sx={{
            background: 'linear-gradient(90deg, rgba(204, 0, 13, 1) 0%, rgba(212, 0, 0, 1) 50%, rgba(29, 4, 9, 1) 100%)',
            color: 'white',
            display: { xs: 'block', md: 'inline-block' },
            marginRight: '1rem', 
          }}
          onClick={handleLogout}
          disabled={isLoading}
        >
          {isLoggedIn ? 'Logout' : 'Logging out...'}
        </Button>
         <Avatar alt="profile pics" src={userData.photoURL} />
        </>

      ) : ( 
        <Button
          variant="contained"
          sx={{
            background: 'linear-gradient(90deg, rgba(204, 0, 13, 1) 0%, rgba(212, 0, 0, 1) 50%, rgba(29, 4, 9, 1) 100%)',
            color: 'white',
            display: { xs: 'block', md: 'inline-block' },
          }}
          onClick={SignUpUsingGoogle}
        >
          Subscribe
        </Button>
      )}*/}

          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{
             mr: 2,
             
            }}
          >
            <SideNav />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box> 
    </>
  );
}
 