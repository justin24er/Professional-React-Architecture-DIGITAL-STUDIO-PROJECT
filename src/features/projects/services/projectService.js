const projectUrl = 'http://localhost:3000/projects'

export async function getProjects(Signal) {
    const response = await fetch(projectUrl, {
        signal: Signal
    })
    if(!response.ok) throw new Error("Failed to fetch!")
    return response.json()
}