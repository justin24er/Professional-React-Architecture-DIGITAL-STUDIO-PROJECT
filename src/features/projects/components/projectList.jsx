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
        const q = inputResults.search.toLowerCase().trim()
        const f = inputResults.filter

        return projects.filter(proj => {
            const searchResults = proj.projectTitle.toLowerCase().includes(q) || proj.clientName.toLowerCase().includes(q)
            const filterResults = f === "" || f === "All" || proj.projectStatus === f 

            return searchResults && filterResults
        })
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
                        <i className="fa-solid fa-filter"></i>
                        <selectedContent></selectedContent>
                    </Button>
                    <option value="" disabled>filter projects</option>
                    <option value="All">All</option>
                    <option value="In Progress">Active</option>
                    <option value="On Hold">On Hold</option>
                    <option value="Completed">Completed</option>
                </Select>
            </div>
            <div className="projects-wrapper">
                {loading ? <div className="loader">loading...</div>
                : (error ? <div style={{color: 'red'}} className="error">{error}</div>
                    : (filteredProjects.length === 0 ? <div className="pr-not-found">project not found!</div> 
                        : filteredProjects.map(proj => (
                        <ProjectCard
                        key={proj.id}
                        id={proj.id}
                        projectTitle={proj.projectTitle} 
                        clientName={proj.clientName}
                        deadline={proj.deadline}
                        projectStatus={proj.projectStatus}
                        progressPercentage={proj.progressPercentage}
                         />
                    )))
                )}
            </div>
        </section>
    )
}
export default ProjectList