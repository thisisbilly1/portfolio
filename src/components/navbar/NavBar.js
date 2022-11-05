import { Navbar, Nav } from "react-bootstrap";
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import { useState, useEffect } from "react";
import { ReactComponent as LightMode } from "../../assets/icons/lightMode.svg"
import { ReactComponent as DarkMode } from "../../assets/icons/darkMode.svg"
import Cookies from 'js-cookie';

// default to dark mode
const cookieDarkMode = Cookies.get('darkMode') === undefined ? true : (Cookies.get('darkMode') === 'true');

const NavBar = () => {
    const [expanded, setExpanded] = useState(false)
    const [darkMode, setDarkMode] = useState(cookieDarkMode)

    const NavLink = ({ to, children }) => {
        const resolvedPath = useResolvedPath(to)
        const isActive = useMatch({ path: resolvedPath.pathname, end: true });
        var className = "nav-link me-2"
        if (isActive) className += " active"

        const clickLink = () => {
            setExpanded(false)
            window.scrollTo(0, 0)
        }

        return (
            <Link to={to} className={className} onClick={clickLink}>{children}</Link>
        )
    }

    useEffect(() => {
        const root = document.documentElement
        root?.style.setProperty("--bs-body-bg", darkMode ? "#292929" : "#fff")
        root?.style.setProperty("--bs-body-color", darkMode ? "#fff" : "black")
        root?.style.setProperty("--bs-dark", darkMode ? "#f8f9fa" : "#212529")
        root?.style.setProperty("--bs-light", darkMode ? "#212529" : "#f8f9fa")
        Cookies.set('darkMode', darkMode)
    }, [darkMode]);

    return (
        <Navbar expand="lg" fixed="top" style={{ zIndex: 5 }} expanded={expanded}>
            <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")} />
            <Navbar.Collapse>
                <Nav className="m-auto">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/web">Web Dev</NavLink>
                    <NavLink to="/game">Game Dev</NavLink>
                    {/* <NavLink to="/contact">Contact</NavLink> */}
                </Nav>
            </Navbar.Collapse>
            <div className="darkModeToggle" onClick={() => setDarkMode(() => { if (darkMode) { return false } return true })}>
                {darkMode ? <LightMode /> : <DarkMode />}
            </div>
        </Navbar>
    )
}

export default NavBar