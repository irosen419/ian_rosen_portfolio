import { useState } from 'react'


function ProjectCard({ project, displayModal }) {
    const [hoverCard, setHoverCard] = useState(false)
    const [hoverTitle, setHoverTitle] = useState(false)

    const randomColor = () => {
        const colors = ['dark-pink', 'light-pink', 'dad-yellow', 'darker-blue']
        const randomColor = colors[Math.floor(Math.random() * colors.length)]
        return randomColor
    }

    return (
        <>
            <div className={hoverCard ? `card hover-card ${randomColor()}` : `card ${randomColor()}`}
                onMouseEnter={() => {
                    setHoverCard(true)
                    setHoverTitle(true)
                }}
                onMouseLeave={() => {
                    setHoverCard(false)
                    setHoverTitle(false)
                }}>
                {
                    hoverCard ?
                        null
                        :
                        <div className="initial">
                            <h1>{project.title}</h1>
                            <div className="stack">
                                {project.backendIcon}
                                {project.frontendIcon}
                            </div>
                        </div>
                }
                <div className={hoverCard ? "img-box hover-img-box" : "img-box"}>
                    <div className="screen">
                        <img className="screenshot" src={project.image} alt={project.title} />
                    </div>
                    <h3 className={hoverTitle ? "title hover-title" : "title"}>{project.title}</h3>
                </div>
                <div className={hoverCard ? "buttons hover-buttons" : "buttons"}>
                    <div className="demo">
                        <button onClick={() => displayModal(project.demoLink)}><span>Demo</span></button>
                        {project.liveLink ? <a href={project.liveLink} rel="noreferrer" target="_blank"><button ><span>Try it!</span></button></a> : null}
                    </div>
                    <div className="github">
                        <a href={project.frontend} rel="noreferrer" target="_blank"><button><span>Frontend</span></button></a>
                        <a href={project.backend} rel="noreferrer" target="_blank"><button><span>Backend</span></button></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectCard