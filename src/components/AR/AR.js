import { useState, useEffect } from "react"
import { Card, Row, Col, Nav, Navbar } from "react-bootstrap"
import RockMonsterContainer from "./RockMonster/RockMonsterContainer"
//import SwordContainer from "../frontend/SwordContainer"
import "../../assets/AR.css"

import LOIteration from "./LOIteration"
import ARIteration from "./ARIteration"


const AR = ({ should3DRender }) => {
    const [iteration, setIteration] = useState(0)
    const [shouldRender, SetshouldRender] = useState(false)

    useEffect(() => {
        if (should3DRender) {
            setTimeout(() => {
                SetshouldRender(true)
            }, 500)
        } else SetshouldRender(false)
    }, [should3DRender])


    return (
        <>
            <Row className="justify-content-center">
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>Story</Card.Title>
                            <p>"Adventure Road" is a passion project that my brother and I conceived during our high school days.
                                Inspired by iconic titles like Blizzard's World of Warcraft and the immersive storytelling of Dungeons and Dragons, we embarked on a journey to craft our own MMORPG from scratch.</p>
                            <p>This project has undergone numerous iterations, with one of the most significant transitions being the shift from a 2D to a 3D environment. As the game evolved, so did my coding skills, resulting in a symbiotic relationship where each aspect enriched the other. Through this journey, I've witnessed not only the growth of the game and its code but also my own evolution as a developer.</p>
                            <p>My aspiration is to continue bringing happiness to players through my programming endeavors. "Adventure Road" is a testament to our dedication to creating a gaming experience that resonates with players and fosters a sense of community, and I look forward to extending that joy to future projects and collaborations.</p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl>
                    {shouldRender && <RockMonsterContainer />}
                </Col>
            </Row>

            <h4 className="text-center mt-3 mb-3">Adventure Road Versions</h4>

            <Navbar expand="lg" className="p-2 pb-0 w-100">
                <Nav className="w-100">
                    <Row className="w-100">
                        <Col>
                            <Nav.Item>
                                <Nav.Link active={iteration === 0} onClick={e => setIteration(0)}>2D Version</Nav.Link>
                            </Nav.Item>
                        </Col>
                        <Col>
                            <Nav.Item>
                                <Nav.Link active={iteration === 1} onClick={e => setIteration(1)}>3D Version</Nav.Link>
                            </Nav.Item>
                        </Col>
                    </Row>


                </Nav>
            </Navbar>

            {iteration === 0 && <LOIteration />}
            {iteration === 1 && <ARIteration />}
        </>
    )
}

export default AR