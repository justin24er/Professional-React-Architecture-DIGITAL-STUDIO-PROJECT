import ProjectsContext from '../../../app/contexts/ProjectsContext.jsx'
import {useContext} from 'react'

function useProjects() {
    const {projects} = useContext(ProjectsContext)
    if(!projects) throw new Error("useProjects must be used inside ProjectsProvider")

    return {
        projects: projects.projects,
        loading: projects.loading,
        error: projects.error
    }
}
export default useProjects