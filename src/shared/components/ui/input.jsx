import './input.css' 

export default function Input({
    type,
    name,
    placeholder,
    value,
    onChange,
    autoComplete
}) {
    return <input 
            type={type}
            placeholder={placeholder}
            name={name}
            value={value}
            onChange={onChange}
            autoComplete={autoComplete}/>
}