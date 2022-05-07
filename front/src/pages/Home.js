import { Card, Row, Col } from "react-bootstrap"
import Banner from "../components/home/banner"
import "../assets/Home.css"

import ReactIcon from "../assets/icons/react-brands.svg"
import VueIcon from "../assets/icons/vuejs-brands.svg"
import NodeIcon from "../assets/icons/node-js-brands.svg"
import PythonIcon from "../assets/icons/python-brands.svg"
import DBIcon from "../assets/icons/database-solid.svg"
import UnityIcon from "../assets/icons/unity-brands.svg"

const Home = () => {

    return (
        <div>
            <Banner />

            <Card className="description bg-dark text-white">
                <p>Hey, I'm Nick. I'm a software engineer and game developer. Currently, I'm focussed on building full stack applications. I started my professional career in 2019. However, I've been programming almost all of my life.</p>
                <p className="text-center mt-2">Currently, my most used programming languages or frameworks</p>

                <Row className="text-center">
                    <Col className="language-container">
                        <img className="language" src={ReactIcon} />
                        <div>React</div>
                    </Col>
                    <Col className="language-container">
                        <img className="language" src={VueIcon} />
                        Vue
                    </Col>
                    <Col className="language-container">
                        <img className="language" src={NodeIcon} />
                        Node
                    </Col>
                    <Col className="language-container">
                        <img className="language" src={PythonIcon} />
                        Python
                    </Col>
                    <Col className="language-container">
                        <img className="language" src={DBIcon} />
                        SQL/ORM
                    </Col>
                    <Col className="language-container">
                        <img className="language" src={UnityIcon} />
                        Unity
                    </Col>
                </Row>
            </Card>


        </div>
    )
}

export default Home