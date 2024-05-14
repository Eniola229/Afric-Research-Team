import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import bg from './img/bg.jpg';
import Box from '@mui/material/Box';

import FirstPage from "./FirstPage";
import AboutUs from "./AboutUs";
import Login from "./Login";
import Questions from "./Questions";
import Why from "./Why";
import Contact from "./Contact";
import Media from "./Media";
import Sci from "./Sci";
import Health from "./Health";

export default function App() {

  return (
    <Router>
      <Box
        sx={{
          height: '100vh',
           backgroundColor: "linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(0, 63, 3, 1) 50%, rgba(0, 63, 3, 1) 50%, rgba(0, 137, 3, 1) 100%)"
        }}
      >
        <Routes>
          <Route path="/" element={<FirstPage />} />
            <Route path="/about-us" element={<AboutUs/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/questions" element={<Questions/>} />
            <Route path="/why" element={<Why/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/media" element={<Media/>} />
            <Route path="/sci" element={<Sci/>} />
            <Route path="/health" element={<Health/>} />
        </Routes>
      </Box>
    </Router>
  );
}