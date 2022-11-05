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
                    I have also participated in many game jams.
                    This is where a group of programmers and artists are given a theme. They then have a certain amount of time to create a game around that theme.
                    This is a test of time management, skill, and creativity.
                    Every time I participated in a game jam, I was using different team sizes and technologies. Depending on what technology you decide to use, you can focus on different parts of game development.
                </p>
                <p>For my last game jam that I participated in, I decided to use Game Maker Studio (2019). This allowed me to practice what I learned in calculus 3!</p>
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