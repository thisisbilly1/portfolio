import { Card, Row, Col } from "react-bootstrap"
import SwordContainerBanner from "../components/frontend/SwordContainerBanner"
import "../assets/webdev.css"

const WebDev = () => {

    return (
        <div>
            <SwordContainerBanner />

            <h1 className="ar-title">Web Development</h1>
            <h1 className="text-white" style={{ marginTop: "100px" }}>Foxconn Industrial AI</h1>
            <Row>
                <Col xl>
                    <Card className="bg-dark text-white">
                        <Card.Title>Automated Industrial Lawn Mower</Card.Title>
                        <div className="job-description-title">Description</div>
                        <div className="job-description-body">
                            <p>The overall goal of this project was to create an autonomous fleet of lawn mowers.</p>
                            <p>I was in charge of front end, back end server that lived on the cloud, and a client that lived on a linux device on the lawn mowers.</p>
                            <ul>
                                <li>Front End: This was made in Vue.JS.
                                    <p>It connected to the server through websocket, after using restful API calls for authentication, to establish a peer to peer connection to the client through WebRTC. WebRTC would circumvent router, port forwarding, and public IP issues.</p>
                                    <p>Once connected, data would be sent to the front end and the client through this connection. You can send commands to the client, or receive sensor information.</p>
                                    <p>To display basic sensor information, I used Chart.JS. To display depth camera information, I used THREE.JS and GLSL. This way, you could see the color and depth information for each pixel. This created a 3D image in your web browser. </p>
                                </li>
                                <li>Server: This was made in Python Flask. This handled websocket connections from the front end, and the client application, authentication, and data storage.</li>
                                <li className="mt-3">Client: This was made in Node.JS. This connected to the server through websocket, and connected to the front end through WebRTC. It communicated with the Robot Operating System on the mower to gather sensor information, as well as give commands.</li>
                            </ul>
                        </div>

                        <div className="job-description-title">Tech Used</div>
                        <div className="job-description-body">
                            <div>Vue.JS</div>
                            <div>Node.JS</div>
                            <div>THREE.JS</div>
                            <div>GLSL</div>
                            <div>Chart.JS</div>
                            <div>Python Flask</div>
                            <div>Postgres DB</div>
                        </div>
                    </Card>
                </Col>
                <Col xl>
                    <Row>
                        <Col xl>
                            <Card className="bg-dark text-white">
                                <Card.Title>IAI Landing Page</Card.Title>
                                <div className="job-description-title">Description</div>
                                <div className="job-description-body">
                                    <p>I recreated the IAI landing page using Vue.JS, THREE.JS, and OpenGL Shader Language (GLSL). The landing page had an interactive banner with a post processing bloom pass, a vertex and fragment shader to display floating dots and connecting lines (something similar to what you'd see while mapping out an AI network)</p>
                                    <p>I worked with the UX designer to create product pages describing the products with interactive demos.</p>
                                </div>

                                <div className="job-description-title">Tech Used</div>
                                <div className="job-description-body">
                                    <div>Vue.JS</div>
                                    <div>THREE.JS</div>
                                    <div>GLSL</div>
                                </div>
                            </Card>
                        </Col>
                        <Col xl>
                            <Card className="bg-dark text-white">
                                <Card.Title>Defect Detection System</Card.Title>
                                <div className="job-description-title">Description</div>
                                <div className="job-description-body">
                                    <p>This application is supposed to live on a manufacturing line and detect defects for operators. It would help improve product quality and speed up inspectiont time.</p>
                                    <p>I lead development of this full stack application. You could, collect pictures, train a YOLOv5 model, run inference, and collect defect data.</p>
                                    <p>After images were gathered, you could tune, train, and test AI models within the application - no coding or special set up needed.</p>
                                </div>

                                <div className="job-description-title">Tech Used</div>
                                <div className="job-description-body">
                                    <div>Vue.JS</div>
                                    <div>Chart.JS</div>
                                    <div>Python Flask</div>
                                    <div>Postgres DB</div>
                                </div>
                            </Card>
                        </Col>
                    </Row>

                </Col>
            </Row>

            <h1 className="text-white">Foxconn SIO</h1>
            <Row>
                <Col md={6}>
                    <Card className="bg-dark text-white">
                        <Card.Title>Manufacturing Execution System</Card.Title>
                        <div className="job-description-title">Description</div>
                        <div className="job-description-body">I helped create the full stack application for operators to keep track of product as it went through a production line. It allowed them to scan bar codes, record defects, track quality, and record machine status/down time. I was focussed on the front end for this project, but still helped make the back and and do some dev ops.</div>

                        <div className="job-description-title">Tech Used</div>
                        <div className="job-description-body">
                            <div>Vue.JS</div>
                            <div>Python Flask</div>
                            <div>Postgres DB</div>
                            <div>AWS S3</div>
                        </div>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card className="bg-dark text-white">
                        <Card.Title>Data Dashboard</Card.Title>
                        <div className="job-description-title">Description</div>
                        <div className="job-description-body">I created the front end application that displayed data in graphs and tables from the MES. I also created the REST API end points for querying the data.</div>

                        <div className="job-description-title">Tech Used</div>
                        <div className="job-description-body">
                            <div>Vue.JS</div>
                            <div>Chart.JS</div>
                            <div>Python Flask</div>
                            <div>Postgres DB</div>
                        </div>
                    </Card>
                </Col>
            </Row>

            <h1 className="text-white">Personal</h1>
            <Row>
                <Col md={6}>
                    <Card className="bg-dark text-white">
                        <Card.Title>Nao Robot Interface</Card.Title>
                        <div className="job-description-title">Description</div>
                        <div className="job-description-body">
                            <p>My brother and I created an out-of-the-box application for the Nao robot. When you first purchase this robot, it comes with nothing. With our application, you could connect to the robot, and would be presented a web app. With this, you could easily control the robot with no programming needed.</p>
                            <p>The things that you could do with this robot and our application were: </p>
                            <ul>
                                <li>Text to Speech with pitch, volume, and speed controls</li>
                                <li>Play Connect 4 with the robot</li>
                                <li>Play a basic color and shape game with the robot</li>
                                <li>Play battle ship with the robot</li>
                                <li>Upload music and play it through the robot's speakers</li>
                                <li>Sensor feedback and movement controls</li>
                            </ul>
                        </div>

                        <div className="job-description-title">Tech Used</div>
                        <div className="job-description-body">
                            <div>Vue.JS</div>
                            <div>Python Flask</div>
                            <div>OpenCV</div>
                            <div>TensorFlow</div>
                        </div>
                    </Card>
                </Col>
            </Row>


        </div>
    )
}

export default WebDev