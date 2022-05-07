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
                                <img className="d-block w-100" src={Main}/>
                                <Carousel.Caption className="text-black">
                                    <h3>First Art Work Cover</h3>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                <img className="d-block w-100" src={deathworm}/>
                                <Carousel.Caption className="text-black">
                                    <h3>Group Bossing</h3>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                <img className="d-block w-100" src={LO}/>
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
                        <p>The first version of Adventure Road (then named Legends Online) was made using a <a target="_blank" href="https://en.wikipedia.org/wiki/Transmission_Control_Protocol#:~:text=The%20Transmission%20Control%20Protocol%20(TCP,the%20Internet%20Protocol%20(IP).&text=TCP%20is%20connection%2Doriented%2C%20and,before%20data%20can%20be%20sent.">TCP</a> server and client. These were made in Game Maker 8, by <a href="https://www.yoyogames.com/en/gamemaker" target="_blank">YoYoGames</a>.</p>
                        <p>The server handled the game logic, the character saving, etc etc. The client rendering the world and handling inputs from players.</p>
                        <p>The game came with NPC combat, resource gathering, an economy, and a robust quest system. </p>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}

export default LOIteration