import React, { useState } from 'react'
import ProjectCard from '../Components/ProjectCard'
import { ProjectData } from '../data.js'

function CardContainer() {

    const [demo, setDemo] = useState(false)
    const [demoLink, setDemoLink] = useState("")

    const mapProjects = () => {
        return ProjectData.map(project => <ProjectCard key={project} project={project} displayModal={displayDemoModal} />)
    }

    const displayDemoModal = (link) => {
        setDemoLink(link)
        setDemo(true)
    }

    const demoModal = () => {
        return (
            <div id='demo-modal'>
                <div id="demo-video">
                    <span onClick={() => setDemo(false)}>x</span>
                    <iframe src={demoLink} title={demoLink.split("/")[4]} frameBorder="0" allowFullScreen></iframe>
                </div>
            </div>
        )
    }

    return (
        <div id='card-container'>
            {mapProjects()}
            {demo ?
                demoModal()
                :
                null
            }
        </div>
    )
}

export default CardContainer