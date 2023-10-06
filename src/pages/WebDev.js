import { Card, Row, Col, Accordion } from "react-bootstrap"
import SwordContainerBanner from "../components/frontend/SwordContainerBanner"
// import SkillTree from "../components/SkillTree"
import "../assets/webdev.css"
import "../assets/resume.css"

const WebDev = () => {

    return (
        <>
            <SwordContainerBanner />
            {/* <SkillTree /> */}
            <h1 className="ar-title">Professional Experience</h1>

            <Card className="resume">
                <div class="employment-container">
                    <div class="employment-date">Feb, 2022 - Present</div>
                    <h3 class="employer-name">Senior Full Stack Engineer, QsrSoft</h3>

                    <div>
                        <ul class="list">
                            <li class="list-item">
                                <p class="paragraph"><span>Developed a scorecard system for McDonald's
                                    franchise owners, allowing them to select and monitor performance metrics, thereby
                                    facilitating bonus and store performance goal setting. This streamlined tool
                                    promotes operational efficiency and goal-oriented decision-making.</span></p>
                            </li>
                            <li class="list-item">
                                <p class="paragraph"><span>Leveraged custom widgets and reports to
                                    significantly boost RMHC donations, garnering international support from McDonald's
                                    and strengthening the partnership.</span></p>
                            </li>
                            <li class="list-item">
                                <p class="paragraph"><span>Innovated and implemented a proactive alert system
                                    designed to minimize product outage times, with a particular focus on addressing the
                                    recurrent issue of ice cream machine downtime.</span></p>
                            </li>
                            <li class="list-item">
                                <p class="paragraph"><span>Demonstrated exceptional leadership and
                                    collaboration skills by actively mentoring and assisting team members, fostering
                                    cross-team knowledge sharing, and significantly enhancing our collective velocity
                                    and learning.</span></p>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="employment-container">
                    <div class="employment-date">AUG, 2021 - JAN, 2022</div>
                    <h3 class="employer-name">Full Stack Engineer, Affinity IT</h3>

                    <div>
                        <ul class="list">
                            <li class="list-item">
                                <p class="paragraph"><span>Updated existing Vue and AWS Node full stack applications to meet client's needs
                                    Worked with UX/UI designers and team
                                    lead to update older Vue applications to React and React Native for trail cameras</span></p>
                            </li>
                            <li class="list-item">
                                <p class="paragraph"><span>Collaborate with product management and design teams to define and implement new
                                    features and improvements.</span></p>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="employment-container">
                    <div class="employment-date">MAY, 2019 - AUG, 2021</div>
                    <h3 class="employer-name">Software Engineer, Foxconn</h3>

                    <div>
                        <ul class="list">
                            <li class="list-item">
                                <p class="paragraph"><span>Led the development efforts for rebranding landing pages, leveraging the power of
                                    Three.js and GLSL to craft immersive
                                    and interactive 3D experiences within web browsers.</span></p>
                            </li>
                            <li class="list-item">
                                <p class="paragraph"><span>Focused on the front-end and mobile app development aspects of the manufacturing
                                    execution system software customized
                                    for face mask production.</span></p>
                            </li>
                            <li class="list-item">
                                <p class="paragraph"><span>Made robust data pipelines essential for ML models. These pipelines collected
                                    images from manufacturing lines, extracted
                                    sensor data from machines, and captured room sensor information. The data was fed into TensorFlow to
                                    help identify and
                                    mitigate operational risks and potential downtime, contributing to a more efficient and proactive
                                    production
                                    environment. This was for LCD manufacturing.</span></p>
                            </li>
                        </ul>
                    </div>
                </div>
            </Card>

        </>
    )
}

export default WebDev