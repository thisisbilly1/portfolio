import { Card, Row, Col, Carousel } from "react-bootstrap"

import LoginPicture from "../../assets/AR/client/AR/Login.gif"
import desertTownPicture from "../../assets/AR/client/AR/desertTown.png"
import combatPicture from "../../assets/AR/client/AR/minigame.png"
const ARIteration = () => {
    return (
        <Row>
            <Col xl>
                <Card>
                    <Card.Body>
                        <Carousel>
                            <Carousel.Item>
                                <img className="d-block w-100" src={LoginPicture} alt="Log in screen" />
                            </Carousel.Item>

                            <Carousel.Item>
                                <img className="d-block w-100" src={desertTownPicture} alt="Desert town in early AR version" />
                            </Carousel.Item>

                            <Carousel.Item>
                                <img className="d-block w-100" src={combatPicture} alt="Combat in AR" />
                            </Carousel.Item>
                        </Carousel>
                    </Card.Body>
                </Card>
            </Col>
            <Col xl>
                <Card>
                    <Card.Body>
                        <p>Following the successful establishment of a vibrant community in the 2D version, our development journey took an exciting turn as we ventured into the creation of a 3D rendition of Legends Online. This endeavor marked a significant leap in complexity and iteration, pushing the boundaries of our creative and technical capabilities.</p>
                        <p>Our commitment to preserving the essence of Legends Online led us to migrate all existing systems seamlessly. This comprehensive overhaul encompassed every facet of the game, from the intricate questing system and inventory management to the adrenaline-pumping combat encounters and formidable boss battles.</p>
                        <p>The technical underpinning of this ambitious project was a testament to our dedication. The server, responsible for maintaining the game's functionality, was meticulously crafted using Python, while the client, tasked with rendering the immersive 3D world, was developed in Game Maker Studio.</p>
                        <p>To bring our 3D world to life, we turned to Blender for character modeling and animation. This allowed us to infuse our game with rich, lifelike characters and environments. To ensure seamless interactions within the game, both on the client and server sides, we implemented Octrees for collision detection, enhancing the overall gameplay experience.</p>
                        <p>Our commitment to innovation and refinement never wanes. Currently, we're embarking on a new chapter in the development of Adventure Road, with a server built using TS and a shift from TCP to WebSocket. These ongoing efforts underscore our dedication to pushing the boundaries of what Adventure Road can become, ensuring that it continues to captivate and engage players in thrilling new ways.</p>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}

export default ARIteration