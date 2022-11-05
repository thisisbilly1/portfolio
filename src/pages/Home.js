import { Card, Row, Col } from "react-bootstrap"
import Banner from "../components/home/banner"
import "../assets/Home.css"

import { ReactComponent as ReactIcon } from "../assets/icons/react-brands.svg"
import { ReactComponent as VueIcon } from "../assets/icons/vuejs-brands.svg"
import { ReactComponent as NodeIcon } from "../assets/icons/node-js-brands.svg"
import { ReactComponent as PythonIcon } from "../assets/icons/python-brands.svg"
import { ReactComponent as DBIcon } from "../assets/icons/database-solid.svg"
import { ReactComponent as UnityIcon } from "../assets/icons/unity-brands.svg"

const Home = () => {

    return (
        <div>
            <Banner />

            <Card className="description">
                <p>Hey, I'm Nick. I'm a software engineer and game developer. Currently, I'm focussed on building full stack applications. I started my professional career in 2019. However, I've been programming almost all of my life.</p>
                <p className="text-center mt-2">Currently, my most used programming languages or frameworks</p>

                <Row className="text-center">
                    <Col className="language-container">
                        <ReactIcon className="language" />
                        <div>React</div>
                    </Col>
                    <Col className="language-container">
                        <VueIcon className="language" />
                        Vue
                    </Col>
                    <Col className="language-container">
                        <NodeIcon className="language" />
                        Node
                    </Col>
                    <Col className="language-container">
                        <PythonIcon className="language" />
                        Python
                    </Col>
                    <Col className="language-container">
                        <DBIcon className="language" />
                        SQL/ORM
                    </Col>
                    <Col className="language-container">
                        <UnityIcon className="language" />
                        Unity
                    </Col>
                </Row>
            </Card>


        </div>
    )
}

export default Home