import './Button.scss'

const BrutalistButton = (props) => {
    return (
        <button className={`brutalistButton ${props.isPrimary ? "red" : "yellow"}`}>
            <span className="brutalistText" onClick={props.onClick}>{props.text}</span>
        </button>
    )
}

export default BrutalistButton