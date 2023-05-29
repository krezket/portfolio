import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Header.css';
import ReorderIcon from '@material-ui/icons/Reorder'

function Header() {
  const [expandNavbar, setExpandNavbar] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setExpandNavbar(false)
  }, [location])
  return (
    <div className='header' id={expandNavbar ? 'open' : 'close'}>
      <div className='toggleButton'>
        <button onClick={() => {
          setExpandNavbar((prev) => !prev);
         }}>
          <ReorderIcon />
        </button>
      </div>
      <h1 id='name'>Anthony Guerrero</h1>
      <div className='links'>
        <Link to="/"> About Me </Link>
        <Link to="/portfolio"> Portfolio </Link>
        <Link to="/contact"> Contact </Link>
        <Link to="/resume"> Resume </Link>
      </div>
    </div>
  )
}

export default Header