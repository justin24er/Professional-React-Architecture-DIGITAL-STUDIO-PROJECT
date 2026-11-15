import Button from '../shared/components/ui/button'
import './unknownPage.css'
import {useNavigate} from 'react-router-dom'

function UnknownPage() {
    const navigate = useNavigate()
    return (
        <section className="invalid-page">
            <h1>404 Page not found! <i className="fa-solid fa-globe"></i></h1>
            <p>sorry, page you are looking for, may be have been removed or not found from the service server.</p>
            <Button 
            className="return-home" 
            type="button"
            onClick={() => navigate("/")}>return Home</Button>
        </section>
    )
}
export default UnknownPage