import { Navbar, Nav } from "react-bootstrap";
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const NavLink = ({ to, children, ...props }) => {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });
    var className = "nav-link me-2"
    if (isActive) className += " active"
    return (
        <Link to={to} className={className}>{children}</Link>
    )
}

const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" className="pb-0" fixed="top" style={{ zIndex: 2 }}>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
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