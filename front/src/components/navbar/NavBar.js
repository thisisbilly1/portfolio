import { Navbar, Nav } from "react-bootstrap";
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import { useState } from "react";

const NavBar = () => {
    const [expanded, setExpanded] = useState(false);

    const NavLink = ({ to, children, ...props }) => {
        const resolvedPath = useResolvedPath(to)
        const isActive = useMatch({ path: resolvedPath.pathname, end: true });
        var className = "nav-link me-2"
        if (isActive) className += " active"
        return (
            <Link to={to} className={className} onClick={() => setExpanded(false)}>{children}</Link>
        )
    }

    return (
        <Navbar bg="dark" variant="dark" expand="lg" className="pb-0" fixed="top" style={{ zIndex: 2 }} expanded={expanded}>
            <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")} />
            <Navbar.Collapse>
                <Nav className="m-auto">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/web">Web Dev</NavLink>
                    <NavLink to="/game">Game Dev</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar