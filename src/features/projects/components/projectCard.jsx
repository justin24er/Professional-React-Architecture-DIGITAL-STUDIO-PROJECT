import './project-card.css'
import {memo} from 'react'

function ProjectCard({
    projectTitle,
    clientName,
    deadline,
    progressPercentage,
    projectStatus
}) {
    return (
        <article>
            <div>project title: <p>{projectTitle}</p></div>
            <div>client name: <p>{clientName}</p></div>
            <div>deadline: <p>{deadline}</p></div>
            <div style={{"--per": `${progressPercentage}`}} className="progress-bar"></div>
            <p className="status">{projectStatus}</p>
        </article>
    )
}
export default memo(ProjectCard)