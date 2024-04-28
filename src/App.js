import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import bg from './img/bg.jpg';
import Box from '@mui/material/Box';

import FirstPage from "./FirstPage";
import AboutUs from "./AboutUs";
import Login from "./Login";
import Questions from "./Questions";
import Why from "./Why";
import Contact from "./Contact";

export default function App() {

  return (
    <Router>
      <Box
        sx={{
          height: '100vh',
        }}
      >
        <Routes>
          <Route path="/" element={<FirstPage />} />
            <Route path="/about-us" element={<AboutUs/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/questions" element={<Questions/>} />
            <Route path="/why" element={<Why/>} />
            <Route path="/contact" element={<Contact/>} />
        </Routes>
      </Box>
    </Router>
  );
}