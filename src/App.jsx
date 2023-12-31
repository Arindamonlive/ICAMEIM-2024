// App.js
import React, { useState, useEffect } from 'react';
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
import '../src/App.css';
import img from './assets/tLogo.png';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate content loading with a delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Change the delay time as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {loading ? (
        // Display loading spinner while content is loading
        <div className="spinner-container">
          <img src={img} alt="Logo" className="spinner" />
        </div>
      ) : (
        // Render the content when loading is complete
        <div className="app-container">
          <Nav />
          <Home />
          <Committee />
          <Speakers />
          <Papers />
          <Registration />
          <Program />
          <Contacts />
          <Sponsors />
          <Footer />
        </div>
      )}
    </Router>
  );
}

export default App;



// Code for routes with "/"

// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Nav from './Components/Nav';
// import Home from './Components/Home';
// import Committee from './Components/Committee';
// import Speakers from './Components/Speakers';
// import Sessions from './Components/Sessions';
// import Footer from './Components/Footer';
// import Tutorials from './Components/Tutorials';
// import Papers from './Components/Papers';
// import Registration from './Components/Registration';
// import Program from './Components/Program';
// import Contacts from './Components/Contacts';
// import Sponsors from './Components/Sponsors';

// function App() {
//   return (
//     <Router basename='/'>
//       <Nav />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/committee" element={<Committee />} />
//         <Route path="/speakers" element={<Speakers />} />
//         <Route path="/papers" element={<Papers />} />
//         <Route path="/registration" element={<Registration />} />
//         <Route path="/program" element={<Program />} />
//         <Route path="/contacts" element={<Contacts />} />
//         <Route path="/sponsors" element={<Sponsors />} />
//       </Routes>
//       <Footer />
//     </Router>
//   );
// }

// export default App;