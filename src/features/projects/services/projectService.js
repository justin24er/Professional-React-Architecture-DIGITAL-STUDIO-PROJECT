const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000'

const projectUrl = `${API_URL}/projects`

export async function getProjects(Signal) {
    const response = await fetch(projectUrl, {
        signal: Signal
    })
    if(!response.ok) throw new Error("Failed to fetch!")
    return response.json()
}