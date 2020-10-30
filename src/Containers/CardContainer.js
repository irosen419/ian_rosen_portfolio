import React from 'react'
import ProjectCard from '../Components/ProjectCard'
import { ProjectData } from '../data.js'

function CardContainer() {

    const mapProjects = () => {
        return ProjectData.map(project => <ProjectCard project={project} />)
    }

    return (
        <div id='card-container'>
            {mapProjects()}
        </div>
    )
}

export default CardContainer