import { Card, Row, Col } from "react-bootstrap"
import DeathWormContainer from "./DeathWorm/DeathWormContainer"
import { useState, useEffect } from "react"

const Design = ({ should3DRender }) => {
    const [shouldRender, SetshouldRender] = useState(false)

    useEffect(() => {
        if (should3DRender) {
            setTimeout(() => {
                SetshouldRender(true)
            }, 500)
        }
        else SetshouldRender(false)
    }, [should3DRender])

    return (
        <>
            <Row className="justify-content-center">
                <Col xl>
                    {shouldRender && <DeathWormContainer />}
                </Col>
                <Col>
                    <Card className="bg-dark text-white">
                        <Card.Body>
                            <p><strong>Experience: </strong>To give the player a meaningful experience, the games that I make tell a story. This gives the games direction and meaning, other than game play.</p>

                            <p><strong>Balancing: </strong>I like to follow the approach that Nintendor Metriod games take. When the player first starts, their movement through the world and weapons are limited. The game's progression tries to be as non-linear as possible. The player gains items and power-ups through exploration and defeating enemies. As the player gains more power, they may go backwards to earlier parts of the game and find it much easier than the first time. This gives the player a sense of meaningful progression.</p>

                            <p><strong>Death Worm: </strong>In Adventure Road, there is a giant worm that roamed the desert. As a new player, you are almost powerless to defeat it. As you progress, you will find it easier to defeat this boss.</p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </>
    )
}

export default Design