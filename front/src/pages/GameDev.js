import { Card, Row, Col } from "react-bootstrap"
import DragonFightContainer from "../components/AR/DragonFight/DragonFightContainer"
import AR from "../components/AR/AR"
import BallContainer from "../components/gamejams/BallContainer"
import MuncherContainer from "../components/gamejams/MuncherContainer"

const GameDev = () => {

    return (
        <div>
            <DragonFightContainer />

            <AR />

            <h1 className="text-center text-white">Game Jams</h1>
            <Card className="bg-dark text-white">
                <p>
                    I have also participated in many game jams.
                    This is where a group of programmers and artists are given a theme, and then have a certain amount of time to create a game around that theme.
                    This was a test of time management, skill, and creativity.
                    Every time I participated in a game jam, I was using different team sizes and technologies.
                </p>
                <p>
                    Some game engines, like Unity, do the physics and 3D collision math for you. Those engines are nice because it allows you to focus on the game design. However, some technologies, like Game Maker Studio, or coding from scratch, you have to do the calculations by hand.
                </p>
                <p>For my last game jam that I participated in, I decided to use Game Maker Studio. This allowed me to practice the things I learned in calculus 3 while still in college!</p>
            </Card>
            <h3 className="text-center text-white">"Rolling" Theme. My last game jam while in college</h3>
            <Row>

                <Col xl>
                    <Card className="bg-dark text-white">
                        <Card.Title>Player from one game jam. The theme was "rolling"</Card.Title>
                        <p>This player could transform into a ball and roll around</p>
                        <BallContainer />
                    </Card>
                </Col>

                <Col xl>
                    <Card className="bg-dark text-white">
                        <Card.Title>"Muncher" Enemy.</Card.Title>
                        <p>I used this little guy for many games. I even put him in Adventure Road.</p>
                        <MuncherContainer />
                    </Card>
                </Col>

            </Row>

        </div>
    )
}

export default GameDev