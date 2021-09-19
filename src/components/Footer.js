import {Link} from "react-router-dom"
const Footer = () => {
    return (
        <div className="footer">
            <Link to="/about">About</Link>
            <p> Copyright &copy; 2021</p> 
        </div>
    )
}
export default Footer
