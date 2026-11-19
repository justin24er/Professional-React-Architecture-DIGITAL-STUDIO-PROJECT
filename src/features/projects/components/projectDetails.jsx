import './projectDetails.css' 
import {useParams} from 'react-router-dom'
import useProjects from '../hooks/useProjects'
import StatusBadge from '../../../shared/components/ui/statusBadge'
import ProgressBar from '../../../shared/components/ui/progressBar'

function ProjectDetails() {
    const {id} = useParams()
    const {projects} = useProjects()

    function getBgClr(clr) {
        switch(clr) {
            case 'In Progress': return 'var(--clr-progress-card)'
            case 'Completed': return 'var(--clr-completed-card)'
            case 'On Hold': return 'var(--clr-onhold-card)'
            default: return 'var(--clr-bg)'
        }
    }

    return   (
        <section className="project-view">
            {projects.filter(proj => proj.id === id).map(proj => (
                <div key={id} style={{"--border": getBgClr(proj.projectStatus)}} className="project-view-card">
                    <StatusBadge color={getBgClr(proj.projectStatus)} status={proj.projectStatus} />
                    <h2>{proj.projectTitle}</h2>
                    <p><span>Client Name: </span><span>{proj.clientName}</span></p>
                    <p><span>Deadline: </span><span>{proj.deadline}</span></p>
                    <ProgressBar color={getBgClr(proj.projectStatus)} value={proj.progressPercentage} />
                </div>
            ))}
        </section>
    )
}
export default ProjectDetails