import React from 'react'
import '../styles/Resume.css'
import pdf from '../assets/ag-resume.pdf'

function Resume() {
  return (
    <div>        
      <div id="resume">
    <ol>
    <h2>Download Resume <a href={pdf} download="ag-resume.pdf">Here</a></h2>
    <h1>Skills</h1>
        <li>
            <h2>Front-End</h2>
            <span>
                ReactJS, CSS, NPM 
            </span>
        </li>
        <li>
            <h2>Back-End</h2>
            <span>
                NodeJS, ExpressJS, MySQL, MongoDB
            </span>
        </li>
        <li>
            <h2>Languages</h2>
            <span>
                JavaScript
            </span>
        </li>
    </ol>
  </div>
</div>
  )
}

export default Resume