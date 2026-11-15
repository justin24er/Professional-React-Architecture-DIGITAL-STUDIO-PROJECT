import './projectDetails.css' 
import {useParams} from 'react-router-dom'
import useProjects from '../hooks/useProjects'
import StatusBadge from '../../../shared/components/ui/statusBadge'
import ProgressBar from '../../../shared/components/ui/progressBar'

function ProjectDetails() {
    const {id} = useParams()
    const {projects} = useProjects()

    return   (
        <section className="project-view">
            {projects.filter(proj => proj.id === id).map(proj => (
                <div key={id} className="project-view-card">
                    <StatusBadge status={proj.projectStatus} />
                    <h2>{proj.projectTitle}</h2>
                    <p><span>Client Name: </span><span>{proj.clientName}</span></p>
                    <p><span>Deadline: </span><span>{proj.deadline}</span></p>
                    <ProgressBar value={proj.progressPercentage} />
                </div>
            ))}
        </section>
    )
}
export default ProjectDetails