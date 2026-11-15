import './select.css'

export default function Select({
    className,
    name,
    value,
    onChange,
    children
}) {
    return <select
    name={name}
    className={className}
    value={value}
    onChange={onChange}>
        {children}
    </select>
}