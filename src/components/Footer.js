import {Link, useLocation} from "react-router-dom"

const Footer = () => {
    const location = useLocation()
    return (
        
        <div className="footer">
            { location.pathname !== "/about"?  
            <Link to="/about">About</Link> 
            : <Link to="/" >Home</Link>}
            
            <p> Copyright &copy; 2021</p> 
        </div>
    )
}
export default Footer
