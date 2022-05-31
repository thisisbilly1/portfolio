import { Card, Row, Col, Carousel } from "react-bootstrap"

import Main from "../../assets/AR/client/LO/Main.png"
import deathworm from "../../assets/AR/client/LO/deathworm.png"
import LO from "../../assets/AR/client/LO/LO.png"

const LOIteration = () => {
    return (
        <Row>
            <Col xl>
                <Card className="bg-dark text-white">
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
                <Card className="bg-dark text-white">
                    <Card.Body>
                        <p>The first version of Adventure Road (then named Legends Online) was made using a TCP server and client. These were made in Game Maker 8, by YoYoGames.</p>
                        <p>The server handled the game logic, the character saving, etc etc. The client rendering the world and handling inputs from players.</p>
                        <p>The game came with NPC combat, resource gathering, an economy, and a robust quest system. </p>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}

export default LOIteration