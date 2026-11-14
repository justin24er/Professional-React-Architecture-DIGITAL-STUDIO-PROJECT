import ProjectCard from './projectCard'
import './project-list.css'
import {useState, useMemo} from 'react'
import useProjects from '../hooks/useProjects'
import Input from '../../../shared/components/ui/input.jsx'
import Button from '../../../shared/components/ui/button.jsx'
import Select from '../../../shared/components/ui/select.jsx'

function ProjectList() {
    const [inputResults, setInputResults] = useState({
        search: "",
        filter: ""
    })

    const {projects, loading, error} = useProjects()

    function handleChange(e) {
        const {name, value} = e.target;

        setInputResults(prev => ({...prev, 
            [name]: value
        }))
    }

    const filteredProjects = useMemo(() => {
        return projects.filter(proj => proj.projectTitle.toLowerCase() === 
                                    inputResults.search.toLowerCase().trim()||
                                    proj.clientName.toLowerCase() === 
                                    inputResults.search.toLowerCase().trim() ||
                                    proj.projectStatus === inputResults.filter )
    },[projects,inputResults.search,inputResults.filter])

    return (
        <section className="projects-sec">
            <div className="projects-filter">
                <div className="search-input">
                    <div className="search-icon">
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <Input 
                    type="text"
                    name="search"
                    placeholder="Project title / Client name..."
                    value={inputResults.search}
                    onChange={handleChange}
                    autoComplete="off"
                    />
                </div>
                <Select className="filter-ui"
                name="filter"
                value={inputResults.filter}
                onChange={handleChange}>
                    <Button className="select-btn">
                        <selectedContent></selectedContent>
                    </Button>
                    <option value="" disabled></option>
                    <option value="In Progress">Active</option>
                    <option value="On Hold">On Hold</option>
                    <option value="Completed">Completed</option>
                </Select>
            </div>
            <div className="projects-wrapper">
                {loading ? <div className="loader">loading...</div>
                : (error ? <div className="error">{error}</div>
                    : (filteredProjects.length > 0 ?
                        filteredProjects :
                        projects).map(proj => (
                        <ProjectCard
                        key={proj.id}
                        projectTitle={proj.projectTitle} 
                        clientName={proj.clientName}
                        deadline={proj.deadline}
                        progressStatus={proj.projectStatus}
                         />
                    ))
                )}
            </div>
        </section>
    )
}
export default ProjectList