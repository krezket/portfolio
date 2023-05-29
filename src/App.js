import './App.css'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<AboutMe/>} />
        <Route path='/portfolio' element={<Portfolio/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/resume' element={<Resume/>} />
      </Routes>
      <Footer />
    </Router>
    // <div>
    //   <Header />
    //   <Navbar />
    // </div>
  );
}

export default App;
