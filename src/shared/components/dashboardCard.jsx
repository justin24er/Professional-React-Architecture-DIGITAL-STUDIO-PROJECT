import './dashboardCard.css'

export default function DashboardCard({
    title,
    value,
    className
}) {
    return (<div className={className}>
        <h4>{title}</h4>
        <p>{value}</p>
    </div>)
}