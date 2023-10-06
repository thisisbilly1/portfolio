import { Card, Row, Col, Carousel } from "react-bootstrap"

import Main from "../../assets/AR/client/LO/Main.png"
import deathworm from "../../assets/AR/client/LO/deathworm.png"
import LO from "../../assets/AR/client/LO/LO.png"

const LOIteration = () => {
    return (
        <Row>
            <Col xl>
                <Card>
                    <Card.Body>
                        <Carousel>
                            <Carousel.Item>
                                <img className="d-block w-100" src={Main} alt="Main poster for 2D AR" />
                                <Carousel.Caption className="text-black">
                                    <h3>First Art Work Cover</h3>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                <img className="d-block w-100" src={deathworm} alt="Group Bossing" />
                                <Carousel.Caption className="text-black">
                                    <h3>Group Bossing</h3>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                <img className="d-block w-100" src={LO} alt="Community selfie :)" />
                                <Carousel.Caption className="text-black">
                                    <h3>Community</h3>
                                </Carousel.Caption>
                            </Carousel.Item>

                        </Carousel>

                    </Card.Body>
                </Card>
            </Col>
            <Col xl>
                <Card>
                    <Card.Body>
                        <p>In its nascent form, Adventure Road, originally named Legends Online, took shape through the creation of a TCP server and client. This milestone was achieved using Game Maker 8, a development platform by YoYoGames.</p>
                        <p>The server served as the backbone of the game, managing essential aspects such as game logic, character data storage, and more. Meanwhile, the client took on the responsibility of rendering the immersive game world and seamlessly processing player inputs.</p>
                        <p>
                            Noteworthy Features:
                            Our early version of the game boasted an array of exciting features, including dynamic NPC combat, resource gathering mechanics, a well-structured in-game economy, and a robust quest system. These elements came together to create an engaging and immersive gaming experience that laid the foundation for the evolution of Adventure Road.
                        </p>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}

export default LOIteration