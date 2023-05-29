import React from 'react'
import '../styles/Portfolio.css'
import ar from '../assets/ar.png'
import traffic from '../assets/traffic.png'
import ccw from '../assets/ccw.png'
import fotwq from '../assets/fotwq.png'
import pg from '../assets/pg.png'
import pws from '../assets/pws.png'

function Portfolio() {
  return (
    <div id="main">
        <article>
            <div class="card">
                <h3>Artist Recommendations</h3>
                <label>
                    <a href="https://krezket.github.io/song-identifier/" target="_blank" rel="noreferrer"><img id="img" src={ar} alt="Screenshot of my music website"></img></a>
                </label>
                <p>
                    Screenshot of the deployed Spotify app
                </p>
            </div>
            <div class="card">
                <h3>Traffic Blog</h3>
                <label>
                    <a href="https://trafficquiz.herokuapp.com/login" target="_blank" rel="noreferrer"><img id="img" src={traffic} alt="Screenshot of my traffic blog"></img></a>
                </label>
                <p>
                    Screenshot of the deployed Traffic blog
                </p>
            </div>
            <div class="card">
                <h3>Crazy Cat Weather</h3>
                <label>
                    <a href="https://krezket.github.io/crazy-cat-weather/" target="_blank" rel="noreferrer"><img id="img" src={ccw} alt="Screenshot of my weather website"></img></a>
                </label>
                <p>
                    Screenshot of the deployed weather app
                </p>
            </div>
            <div class="card">
                <h3>Flags of the World Quiz</h3>
                <label>
                    <a href="https://krezket.github.io/flags-of-the-world-quiz/" target="_blank" rel="noreferrer"><img id="img" src={fotwq} alt="Screenshot of my Flags of the World Quiz"></img></a>
                </label>
                <p>
                    Screenshot of the Flags of the World Quiz
                </p>
            </div>
            <div class="card">
                <h3>Password Generator</h3>
                <label>
                    <a href="https://krezket.github.io/third-challenge/" target="_blank" rel="noreferrer"><img id="img" src={pg} alt="Screenshot of my password generator"></img></a>
                </label>
                <p>
                    Screenshot of the password generator website
                </p>
            </div>
            <div class="card">
                <h3>Prework Study Guide</h3>
                <label>
                    <a href="https://krezket.github.io/prework-study-guide/" target="_blank" rel="noreferrer"><img id="img" src={pws} alt="Screenshot of my first website"></img></a>
                </label>
                <p>
                    Screenshot of the first website I have deployed
                </p>
            </div>
        </article>
    </div>
  )
}

export default Portfolio