import './Button.css'

export default props => {
    let classe =
    props.className 
    ? 
    `button ${props.className}` 
    : 
    "button"

    return (
    <button onClick={e => props.click(props.label)} className={classe} id={props.id}>
        {props.label}
    </button>
    )
}