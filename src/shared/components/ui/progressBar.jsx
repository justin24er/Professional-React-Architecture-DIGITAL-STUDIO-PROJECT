import './progressBar.css'

export default function ProgressBar({value}) {
    return (<div className="progress-bar" style={{"--progress": value}}></div>)
}