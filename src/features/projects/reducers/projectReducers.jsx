export const initialDetails = {
    projects: [],
    loading: true,
    error: ""
}

export function reducer(state, action) {
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