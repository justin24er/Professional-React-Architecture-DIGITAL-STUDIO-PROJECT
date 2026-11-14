import ProjectCard from './projectCard'
import './project-list.css'
import {useState, useEffect, useMemo, useCallback} from 'react'
import useProjects from '../hooks/useProjects'
import Input from '../../../shared/components/ui/input'
import Button from '../../../shared/components/ui/button'
import Select from '../../../shared/components/ui/select'

function ProjectList() {
    const [inputResults, setInputResults] = useState({
        search: "",
        filter: ""
    })

    function handleChange(e) {
        const {name, value} = e.target;

        setInputResults(prev => ({...prev, 
            [name]: value
        }))
    }

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
                <Select className="filter-section"
                value={inputResults.filter}
                onChange={handleChange}>

                </Select>
            </div>
            <div className="projects-wrapper"></div>
        </section>
    )
}
export default ProjectList