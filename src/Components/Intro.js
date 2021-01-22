import React from 'react'
import DrumPhoto from '../images/drum_cover_photo.jpg'


function Intro() {
    return (
        <div class="snap" id="intro">
            <img id="drum-photo" src={DrumPhoto} alt="Ian Rosen" />
            <div id="words">
                <h1>Hello, I'm <span>Ian Rosen</span>.</h1>
                <h2>I'm a full-stack web developer.</h2>
            </div>
        </div>
    )
}

export default Intro