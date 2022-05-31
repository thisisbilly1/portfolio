import { Card, Row, Col, Accordion } from "react-bootstrap"
import SwordContainerBanner from "../components/frontend/SwordContainerBanner"
import Skills from "../components/Skills"
import "../assets/webdev.css"

const ExperienceCard = ({ title, techUsed, children }) => {
    const techUsedDivs = techUsed.map(tech => {
        return <div key={tech}>{tech}</div>
    })
    return (
        <Card className="bg-dark text-white">
            <Card.Title>{title}</Card.Title>
            <div className="job-description-title">Description</div>
            <div className="job-description-body">
                {children}
            </div>

            <div className="job-description-title">Tech Used</div>
            <div className="job-description-body">
                {techUsedDivs}
            </div>
        </Card>
    )
}

const WebDev = () => {

    return (
        <>
            <SwordContainerBanner />
            <Skills />
            <h1 className="ar-title">Professional Web Development</h1>

            <Accordion defaultActiveKey="0" flush className="accordion-container">

                <Accordion.Item eventKey="0">
                    <Accordion.Button className="bg-dark text-white">
                        <div className="job-title-container">
                            <h3>QsrSoft</h3>
                            <div className="job-length">Feb 22 - Now</div>
                        </div>
                    </Accordion.Button>
                    <Accordion.Body>
                        <Row>
                            <Col xl>
                                <ExperienceCard title="Reports Page" techUsed={['Vue.js', 'Chart.js', 'HighCharts', 'ApexCharts', 'AG Grid', 'Node.js', 'AWS lambda', 'AWS RDS', 'AWS S3']}>
                                    <p>
                                        I create and updated AWS lambdas that query s3 buckets and RDS for Mcdonald and Tim Horton franchise owners. The data is displayed in Vue.JS, using various charting libraries, and in grids.
                                    </p>
                                </ExperienceCard>
                            </Col>
                            <Col xl>
                                <ExperienceCard title="Franchise Alerts" techUsed={['Vue.js', 'AWS SQS', 'AQS SNS', 'AWS lambda', 'DynamoDB']}>
                                    <p>
                                        Lambdas consumes AWS SQS queues that are sent in real time from stores. These can indicate product outages, missing data, etc. If appropriate, a notification is sent to SNS.
                                    </p>
                                    <p>The most common use case for this is to notify owners when their ice cream machine is broken.</p>
                                </ExperienceCard>
                            </Col>
                        </Row>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                    <Accordion.Button className="bg-dark text-white">
                        <div className="job-title-container">
                            <h3>Afinity IT</h3>
                            <div className="job-length">Nov 21 - Feb 22</div>
                        </div>
                    </Accordion.Button>
                    <Accordion.Body>
                        <Row className="justify-content-center">
                            <Col md={6}>
                                <ExperienceCard title="Tactacam - Cellular Camera" techUsed={['Vue.js', 'React Native', 'Node.js', 'AWS S3', 'AWS Cognito', 'Heroku']}>
                                    <p>
                                        I updated Vue and React Native applications for Tactacam. Both applications retrieved data from AWS lambdas and AWS S3 buckets. I worked with the UX designer to overhaul the desktop application to be a modern design.
                                    </p>
                                    <p>Motion sensor cameras would take pictures and send them, with other information such as location, to AWS S3. The applications would get this data and display it for the users.</p>
                                </ExperienceCard>
                            </Col>
                        </Row>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                    <Accordion.Button className="bg-dark text-white">
                        <div className="job-title-container">
                            <h3>Foxconn IAI</h3>
                            <div className="job-length">Dec 21 - Nov 21</div>
                        </div>
                    </Accordion.Button>
                    <Accordion.Body>
                        <Row>
                            <Col xl>
                                <ExperienceCard title="Automated Industrial Lawn Mower" techUsed={['Vue.js', 'Node.js', 'Three.js', 'GLSL', 'Chart.js', 'Python Flask', 'Postgres']}>
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
                                </ExperienceCard>
                            </Col>
                            <Col xl>
                                <Row>
                                    <Col xl>
                                        <ExperienceCard title="IAI Landing Page" techUsed={['Vue.js', 'Three.js', 'GLSL']}>
                                            <p>I recreated the IAI landing page using Vue.JS, THREE.JS, and OpenGL Shader Language (GLSL). The landing page had an interactive banner with a post processing bloom pass, a vertex and fragment shader to display floating dots and connecting lines.</p>
                                            <p>I worked with the UX designer to create product pages describing the products with interactive demos.</p>
                                        </ExperienceCard>
                                    </Col>
                                    <Col xl>
                                        <ExperienceCard title="Defect Detection System" techUsed={['Vue.js', 'Chart.js', 'Python', 'Flask', 'Postgres']}>
                                            <p>This application is supposed to live on a manufacturing line and detect defects for operators. It would help improve product quality and speed up inspectiont time.</p>
                                            <p>I lead development of this full stack application. You could, collect pictures, train a YOLOv5 model, run inference, and collect defect data.</p>
                                            <p>After images were gathered, you could tune, train, and test AI models within the application - no coding or special set up needed.</p>
                                        </ExperienceCard>
                                    </Col>
                                </Row>

                            </Col>
                        </Row>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3">
                    <Accordion.Button className="bg-dark">
                        <div className="job-title-container">
                            <h3>Foxconn SIO</h3>
                            <div className="job-length">June 19 - Dec 21</div>
                        </div>
                    </Accordion.Button>
                    <Accordion.Body>
                        <Row>
                            <Col xl>
                                <ExperienceCard title="Manufacturing Execution System (MES)" techUsed={['Vue.js', 'Python', 'Flask', 'SharePoint']}>
                                    <p>
                                        I helped create the full stack application for operators to keep track of PPE product as it went through the production line.
                                        It allowed them to scan bar codes, record defects, track quality, and record machine status/down time.
                                        The data had to be stored in SharePoint so that engineers could easily get the data and run analysis. We used SharePoint, Power Apps, and Work Flow to move the data from production line to web app.
                                    </p>
                                </ExperienceCard>
                            </Col>
                            <Col xl>
                                <ExperienceCard title="MES Dashboard" techUsed={['Vue.js', 'Chart.js', 'Python', 'Flask', 'SharePoint']}>
                                    <p>
                                        I created the front end application that displayed data in graphs and tables from the MES. I also created the REST API end points for querying the data.
                                    </p>
                                </ExperienceCard>
                            </Col>
                        </Row>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="4">
                    <Accordion.Button className="bg-dark text-white">
                        <h3>Personal</h3>
                    </Accordion.Button>
                    <Accordion.Body>
                        <Row className="justify-content-center">
                            <Col md={6}>
                                <ExperienceCard title="Nao Robot Interface and Controller" techUsed={['Vue.js', 'Python', 'Flask', 'OpenCV', 'TensorFlow']}>
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
                                </ExperienceCard>
                            </Col>
                        </Row>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

        </>
    )
}

export default WebDev