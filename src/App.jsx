import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Web from './Web';
import Data from './Data';
import Cplus from './Cplus';
import Navbar from './Navbar';
import PersonalChatPage from './PersonalChatPage';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Data" element={<Data />} />
        <Route path="/Cplus" element={<Cplus />} />
        <Route path="/Web" element={<Web />} />
        <Route path="/personal-chat" element={<PersonalChatPage />} />
      </Routes>
    </>
  );
}

export default App;

