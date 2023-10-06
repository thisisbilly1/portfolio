import { Accordion } from "react-bootstrap"
import { useState } from "react"

import DragonFightContainer from "../components/AR/DragonFight/DragonFightContainer"
import AR from "../components/AR/AR"
import GameJamContainer from "../components/gamejams/GameJamContainer"
import Design from "../components/AR/Design"
import TechUsed from "../components/AR/TechUsed"

const GameDev = () => {
    const [expanded, setExpanded] = useState(0);

    return (
        <>
            <DragonFightContainer />

            <h1 className="ar-title">Game Development</h1>
            <TechUsed />
            <Accordion defaultActiveKey={String(expanded)} flush className="accordion-container">
                <Accordion.Item eventKey="0">
                    <Accordion.Button onClick={() => setExpanded(0)}>
                        <h3>Design</h3>
                    </Accordion.Button>
                    <Accordion.Body>
                        <Design should3DRender={expanded === 0} />
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                    <Accordion.Button onClick={() => setExpanded(1)}>
                        <h3>Adventure Road (MMORPG)</h3>
                    </Accordion.Button>
                    <Accordion.Body>
                        <AR should3DRender={expanded === 1} />
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                    <Accordion.Button onClick={() => setExpanded(2)}>
                        <h3>Game Jams</h3>
                    </Accordion.Button>
                    <Accordion.Body>
                        <GameJamContainer should3DRender={expanded === 2} />
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    )
}

export default GameDev