import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './Components/Nav';
import Home from './Components/Home';
import Committee from './Components/Committee';
import Speakers from './Components/Speakers';
import Sessions from './Components/Sessions';
import Footer from './Components/Footer';

function App() {
 return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/committee" element={<Committee />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/sessions" element={<Sessions />} />
      </Routes>
      <Footer />
    </Router>
 );
}

export default App;