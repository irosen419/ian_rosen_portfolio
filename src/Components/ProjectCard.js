import React, { useState } from 'react'

function ProjectCard({ project }) {
    const [hoverCard, setHoverCard] = useState(false)
    const [hoverTitle, setHoverTitle] = useState(false)

    const randomColor = () => {
        const colors = ['dark-pink', 'light-pink', 'dad-yellow', 'darker-blue']
        const randomColor = colors[Math.floor(Math.random() * colors.length)]
        return randomColor
    }

    return (
        <div className={hoverCard ? `card hover-card ${randomColor()}` : `card ${randomColor()}`}
            onMouseEnter={() => {
                setHoverCard(true)
                setHoverTitle(true)
            }}
            onMouseLeave={() => {
                setHoverCard(false)
                setHoverTitle(false)
            }}>
            <div className="img-box">
                <img className="screenshot" src={project.image} alt={project.title} />
                <h3 className={hoverTitle ? "title hover-title" : "title"}>{project.title}</h3>
            </div>
            <div className="demo">
                <button ><span>Demo</span></button>
                {project.liveLink ? <a href={project.liveDemo} target="_blank"><button ><span>Try it!</span></button></a> : null}
            </div>
            <div className="github">
                <a href={project.frontend} target="_blank"><button><span>Frontend</span></button></a>
                <a href={project.backend} target="_blank"><button><span>Backend</span></button></a>
            </div>
        </div>
    )
}

export default ProjectCard