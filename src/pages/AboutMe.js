import React from 'react'
import '../styles/About.css'
import me from '../assets/me.JPG'

function AboutMe() {
    return (
        <div className='home'>
            <div className='about'>
                <h1>About Me</h1>
                <img id="bruh" src={me} alt="Screenshot of my music website"></img>
                <p>Hello! My name is Anthony. I am a web developer with a passion for learning and creating.</p>
            </div>
        </div>
    )
}

export default AboutMe