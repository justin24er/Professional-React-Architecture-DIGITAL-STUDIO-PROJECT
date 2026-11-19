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

    const getBgColor = () =>  {
        switch(projectStatus) {
            case 'In Progress': return 'var(--clr-progress-card)'
            case 'Completed': return 'var(--clr-completed-card)'
            case 'On Hold': return 'var(--clr-onhold-card)'
            default: return 'var(--clr-bg)'
        }
    }

    return (
        <article
        onClick={() => navigate(`project/${id}`)}>
            <StatusBadge color={getBgColor()} status={projectStatus} />
            <div>project title: <span>{projectTitle}</span></div>
            <div>client name: <span>{clientName}</span></div>
            <div>deadline: <span>{deadline}</span></div>
            <ProgressBar color={getBgColor()} value={progressPercentage} />
        </article>
    )
}
export default memo(ProjectCard)