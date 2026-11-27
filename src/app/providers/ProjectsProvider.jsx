import {initialDetails, reducer} from '../../features/projects/reducers/projectReducers'
import {getProjects} from '../../features/projects/services/projectService'
import {useEffect,useReducer} from 'react'
import ProjectsContext from '../contexts/projectsContext'

function ProjectsProvider({children}) {
    const [projects, dispatch] = useReducer(reducer, initialDetails)

    useEffect(() => {
        const controller = new AbortController()

        async function loadProjects() {
            try {
                const feedback = await getProjects(controller.signal)
                dispatch({
                    type: 'FETCH_SUCCESS',
                    payload: feedback
                })
            }
            catch(err) {
                if(err.name !== 'AbortError') {
                    dispatch({
                        type: 'FETCH_ERROR',
                        payload: err.message
                    })
                }
            }
        }
        loadProjects()

        return () => controller.abort()
    },[])

    return (
        <ProjectsContext.Provider value={{projects}}>
            {children}
        </ProjectsContext.Provider>
    )
}
export default ProjectsProvider