import './progressBar.css'

export default function ProgressBar({value,color}) {
    return (
    <div className="progress">
        <div className="progress-bar" style={{"--progress": `${value}%`,"--clr": color}}></div>
        <div className="progress-count" style={{"--progress": value}}></div>
    </div>)
}