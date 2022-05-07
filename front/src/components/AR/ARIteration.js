import { Card, Row, Col, Carousel } from "react-bootstrap"

import LoginPicture from "../../assets/AR/client/AR/Login.gif"
import desertTownPicture from "../../assets/AR/client/AR/desertTown.png"
import combatPicture from "../../assets/AR/client/AR/minigame.png"
const ARIteration = () => {
    return (
        <Row>
            <Col xl>
                <Card className="bg-dark text-white">
                    <Card.Body>
                        <Carousel>

                        <Carousel.Item>
                            <img className="d-block w-100" src={LoginPicture}/>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img className="d-block w-100" src={desertTownPicture}/>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img className="d-block w-100" src={combatPicture}/>
                        </Carousel.Item>

                            

                        </Carousel>

                    </Card.Body>
                </Card>
            </Col>
            <Col xl>
                <Card className="bg-dark text-white">
                    <Card.Body>
                        <p>After succesfully building a community around a 2D version, we started making a 3D version of Legends Online. This version is by far the most complex and most iterated version of the game.</p>
                        <p>We migrated all the old systems over. This included the questing system, inventory, combat, bosses, everything.</p>
                        <p>The server for this one was written in Python. The client was written in Game Maker Studio.</p>
                        <p>Character modelling and animation were made in Blender. For the collisions both in the client and server, <a target="_blank" href="https://en.wikipedia.org/wiki/Octree">Octrees</a> were used</p>
                        <p>New work has been started on a new server programmed in Node.JS and instead of using TCP, it now uses <a href="https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API" target="_blank">WebSocket</a>.</p>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}

export default ARIteration