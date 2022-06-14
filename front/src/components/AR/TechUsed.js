import { Card, Row, Col } from "react-bootstrap"

const TechUsed = () => {
    return (
        <>
            <Row className="justify-content-center">
                <Col md={6}>
                    <Card>
                        <Card.Body>
                            <p><strong>Game Engines: </strong> I have used Unity, Game Maker, and have created my own game engines from scratch for making games.</p>
                            <p><strong>Languages: </strong>OpenGL Shader Language (GLSL), JavaScript, C#, Python, C++</p>
                            <p><strong>Storage: </strong>Postgres, SQLite3, DynamoDB</p>
                            <p><strong>Networking: </strong>TCP, UDP, WebSockets, HTTP</p>
                            <p><strong>Art Work: </strong>Blender, AutoDesk Maya</p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </>
    )
}

export default TechUsed
