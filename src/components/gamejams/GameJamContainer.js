import { Card, Row, Col } from "react-bootstrap"
import BallContainer from "./BallContainer"
import MuncherContainer from "./MuncherContainer"
import { useState, useEffect } from "react"

const GameJamContainer = ({ should3DRender }) => {
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
            <Card>
                <p>
                    Participation in game jams has been an integral part of my journey in game development. These events typically involve teams of programmers and artists who receive a thematic prompt and must create a game based on that theme within a specified timeframe. Game jams serve as a rigorous test of various skills, including time management, technical proficiency, and creative thinking.
                    What makes each game jam unique are the different team sizes and technologies used. Depending on the chosen technology stack, the focus of game development can vary significantly, whether it's delving into intricate coding details or crafting artistic designs.
                </p>
                <p>In my most recent game jam experience, I decided to work with Game Maker Studio (2019). This choice provided me with a practical opportunity to apply the knowledge I had gained from calculus 3 to enhance my game development skills. It's a testament to the versatility of game development, where even mathematical concepts can find relevance in creating immersive gaming experiences.</p>
            </Card>
            <h3 className="text-center">"Rolling" Theme. My last game jam while in college</h3>
            <Row>

                <Col xl>
                    <Card>
                        <Card.Title>Player from "rolling" theme game jam</Card.Title>
                        <p>This player could transform into a ball and roll around</p>
                        {shouldRender && <BallContainer />}
                    </Card>
                </Col>

                <Col xl>
                    <Card>
                        <Card.Title>"Muncher" Enemy.</Card.Title>
                        <p>He doesn't bite</p>
                        {shouldRender && <MuncherContainer />}
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default GameJamContainer