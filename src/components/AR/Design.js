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
                    <Card>
                        <Card.Body>
                            <p>
                                <strong>Crafting Immersive Experiences: </strong>
                                My passion in game development lies in creating immersive and meaningful experiences for players. I firmly believe that a game should be more than just gameplay; it should tell a captivating story that guides players through a unique journey.
                            </p>

                            <p>
                                <strong>Game Progression Philosophy: </strong>
                                I draw inspiration from the approach taken by iconic games like Nintendo's Metroid series. In my game designs, I prioritize a non-linear progression system that fosters player growth and empowerment. At the outset, players are presented with limited abilities and a restricted world, mirroring the journey of the protagonist. As they explore, defeat foes, and uncover hidden treasures, players gradually evolve, gaining new items and power-ups. This design choice allows players to revisit earlier game areas with newfound strength, resulting in a truly meaningful sense of progression and achievement.
                            </p>

                            <p>
                                <strong>Death Worm Encounter:</strong>
                                One of the standout moments in my game "Adventure Road" is the encounter with the colossal desert-dwelling Death Worm. When you first confront this formidable foe as a novice player, victory seems nearly impossible. However, as you advance and acquire new skills and equipment, the once-daunting encounter becomes increasingly manageable. This transformation highlights the essence of my design philosophy—delivering an evolving and rewarding gaming experience that keeps players engaged and motivated.
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </>
    )
}

export default Design