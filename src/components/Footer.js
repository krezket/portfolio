import React from 'react'
import GitHub from '@material-ui/icons/GitHub'
import '../styles/Footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
          <a href="https://github.com/krezket" target="_blank" rel="noreferrer"><GitHub /></a>
        </div>
    <p>&copy; 2023 Krezket</p>
    </div>
  )
}

export default Footer