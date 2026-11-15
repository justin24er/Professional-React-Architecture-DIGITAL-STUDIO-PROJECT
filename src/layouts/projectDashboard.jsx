import useProjects from '../features/projects/hooks/useProjects'
import DashboardCard from '../shared/components/dashboardCard'
import {Outlet} from 'react-router-dom'

function ProjectDashboard() {
    const {projects} = useProjects();

    return (
        <main>
            <header className="dashboard-card-wrapper">
                <DashboardCard 
                title="Total Projects"
                value={projects.length || 0}
                className="dash-card total-card"/>
                <DashboardCard 
                title="In Progress"
                value={projects.filter(proj => proj.projectStatus === "In Progress").length || 0}
                className="dash-card progress-card"/>
                <DashboardCard 
                title="Completed"
                value={projects.filter(proj => proj.projectStatus === "Completed").length || 0}
                className="dash-card completed-card"/>
                <DashboardCard 
                title="On Hold"
                value={projects.filter(proj => proj.projectStatus === "On Hold").length || 0}
                className="dash-card onhold-card"/>
            </header>
            <Outlet />
        </main>
    )
}
export default ProjectDashboard