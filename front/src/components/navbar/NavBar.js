import { Navbar, Nav } from "react-bootstrap";

const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" className="pb-0" fixed="top" style={{zIndex:2}}>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse>
                <Nav className="m-auto">
                    <Nav.Link className="me-2" href="/" active={window.location.pathname==="/"}>Home</Nav.Link>
                    <Nav.Link className="me-2" href="/web" active={window.location.pathname==="/web"}>Web Dev</Nav.Link>
                    <Nav.Link className="me-2" href="/game" active={window.location.pathname==="/game"}>Game Dev</Nav.Link>
                    <Nav.Link href="/contact" active={window.location.pathname==="/contact"}>Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar