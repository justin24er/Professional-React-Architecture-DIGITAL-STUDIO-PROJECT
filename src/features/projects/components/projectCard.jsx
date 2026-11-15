import './project-card.css'
import {memo} from 'react'
import {useNavigate} from 'react-router-dom'

function ProjectCard({
    id,
    projectTitle,
    clientName,
    deadline,
    progressPercentage,
    projectStatus,
}) {
    const navigate = useNavigate()

    return (
        <article
        onClick={() => navigate(`product/${id}`)}>
            <div>project title: <p>{projectTitle}</p></div>
            <div>client name: <p>{clientName}</p></div>
            <div>deadline: <p>{deadline}</p></div>
            <div style={{"--per": `${progressPercentage}`}} className="progress-bar"></div>
            <p className="status">{projectStatus}</p>
        </article>
    )
}
export default memo(ProjectCard)