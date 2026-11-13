import {getProjects} from '../services/projectService'
import {useEffect, useReducer} from 'react'

const initialDetails = {
    projects: [],
    loading: true,
    error: ""
}

function reducer(state, action) {
    switch(action.type) {
        case 'FETCH_SUCCESS': return {...state,
            projects: action.payload,
            loading: false
        }

        case 'FETCH_ERROR': return {...state,
            error: action.payload,
            loading: false
        }

        default: return state
    }
}

export default function useProjects() {
    const [projects, dispatch]  = useReducer(reducer, initialDetails)

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
                if(!err.name === 'AbortError') {
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

    return {
        projects: projects.projects,
        loading: projects.loading,
        error: projects.error
    }
}