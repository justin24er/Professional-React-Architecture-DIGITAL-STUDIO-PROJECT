import AppRoutes from './routes/appRoutes'
import ProjectsProvider from './providers/ProjectsProvider'

function App() {
    return (
        <ProjectsProvider>
            <AppRoutes />
        </ProjectsProvider>
    )
}
export default App