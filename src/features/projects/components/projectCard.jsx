import './project-card.css'
import {memo} from 'react'
import {useNavigate} from 'react-router-dom'
import StatusBadge from '../../../shared/components/ui/statusBadge'
import ProgressBar from '../../../shared/components/ui/progressBar'

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
        onClick={() => navigate(`project/${id}`)}>
            <StatusBadge status={projectStatus} />
            <div>project title: <p>{projectTitle}</p></div>
            <div>client name: <p>{clientName}</p></div>
            <div>deadline: <p>{deadline}</p></div>
            <ProgressBar value={progressPercentage} />
        </article>
    )
}
export default memo(ProjectCard)