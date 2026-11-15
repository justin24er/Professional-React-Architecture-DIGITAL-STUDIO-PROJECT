import './dashboardCard.css'

export default function DashboardCard({
    title,
    value,
    className
}) {
    return (<div className={className}>
        <h3>{title}</h3>
        <p>{value}</p>
    </div>)
}