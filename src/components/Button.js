
const Button = ({color, text}) => {
    return (
        <button className="btn" style={{backgroundColor: color}} >{text}</button>
    )
}

Button.defaultProps = {
    color: "steelBlue",
    text: "Button"
}

export default Button
