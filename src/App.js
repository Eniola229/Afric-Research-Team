import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import bg from './img/bg.jpg';
import Box from '@mui/material/Box';

import FirstPage from "./FirstPage";
import AboutUs from "./AboutUs";

export default function App() {

  return (
    <Router>
      <Box
        sx={{
          margin: 'auto',
          backgroundImage: `url(${bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh'
        }}
      >
        <Routes>
          <Route path="/" element={<FirstPage />} />
            <Route path="/about-us" element={<AboutUs/>} />
        </Routes>
      </Box>
    </Router>
  );
}