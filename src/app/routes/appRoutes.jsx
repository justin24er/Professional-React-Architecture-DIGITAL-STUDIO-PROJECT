import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ProjectDashboard from '../../layouts/projectDashboard'
import ProjectList from '../../features/projects/components/projectList'
import ProjectDetails from '../../features/projects/components/projectDetails'
import UnknownPage from '../../pages/unknownPage'

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ProjectDashboard/>}>
                    <Route index element={<ProjectList/>}/>
                    <Route path="project/:id" element={<ProjectDetails/>} />
                </Route>
                <Route path="*" element={<UnknownPage/>} />
            </Routes>
        </BrowserRouter>
    )
}
export default AppRoutes