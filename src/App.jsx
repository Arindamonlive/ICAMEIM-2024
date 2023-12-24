import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './Components/Nav';
import Home from './Components/Home';
import Committee from './Components/Committee';
import Speakers from './Components/Speakers';
import Sessions from './Components/Sessions';
import Footer from './Components/Footer';
import Tutorials from './Components/Tutorials';
import Papers from './Components/Papers';
import Registration from './Components/Registration';
import Program from './Components/Program';
import Contacts from './Components/Contacts';
import Sponsors from './Components/Sponsors';

function App() {
 return (
    <Router>
      <Nav />
      <Home/>
      <Committee/>
      <Speakers/>
      {/* <Sessions/> */}
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/committee" element={<Committee />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/sessions" element={<Sessions />} />
      </Routes> */}
      {/* <Tutorials/> */}
      <Papers/>
      <Registration/>
      <Program/>
      <Contacts/>
      <Sponsors/>
      <Footer />
    </Router>
 );
}

export default App;