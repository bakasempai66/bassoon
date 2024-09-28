import { Link } from "react-router-dom"

export const NavBar = () => {
    return (
        <nav>   
            <Link to="/">Home</Link>
            <Link to="/todo">To-Do List</Link>
            <Link to="/converter">Currency Converter</Link>
        </nav>
    )
}