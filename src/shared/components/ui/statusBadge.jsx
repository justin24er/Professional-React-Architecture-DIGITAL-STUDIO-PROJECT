import './status-badge.css'

export default function StatusBadge({status,color}) {
    console.log(color)
    return (<div 
        className="status-badge"
        style={{"--clr-badge": color}}>
            {status}
        </div>)
}