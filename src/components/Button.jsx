import './Button.css'

export default props =>
    <button className={
        props.className 
        ? 
        `button ${props.className}` 
        : 
        "button"
    } id={props.id}>
        {props.label}
    </button>