
import { Card, ProgressBar, Row, Col } from "react-bootstrap"
import { useState, useEffect } from "react"
import "../assets/skills.css"

const Skill = ({ name, target, variant, startDate }) => {
    const endTarget = target ? target : 50
    const [currentTarget, setCurrentTarget] = useState(0)

    const dateStart = (startDate ? startDate : new Date('2019-01-01')).getTime()
    const today = new Date().getTime();
    const age = (today - dateStart) / (365 * 24 * 60 * 60 * 1000);
    const years = Math.ceil(age * 10) / 10;

    useEffect(() => {
        let interval;
        if (currentTarget < endTarget) {
            interval = setInterval(() => {
                setCurrentTarget((currentTarget) => currentTarget = Math.round(currentTarget + endTarget / 15))
                if (currentTarget >= endTarget) {
                    clearInterval(interval)
                    setCurrentTarget(endTarget)
                }
            }, 25)
        } else setCurrentTarget(endTarget)
        return () => {
            clearInterval(interval)
        }
    }, [currentTarget, endTarget])

    return (
        <div className="skill-container">
            <div className="job-description-title skill-name">{name}: {years} years</div>
            <ProgressBar
                className="skill-progress"
                variant={variant ? variant : 'success'}
                now={currentTarget}
                label={`${currentTarget} %`} />
        </div>
    )
}

const Skills = () => {
    return (
        <Card>
            <Card.Title className="text-center">Web Dev Summary</Card.Title>
            <Row>
                <Col xl>
                    <Skill name="React" target={85} variant="info" startDate={new Date('2020-01-01')} />
                </Col>
                <Col xl>
                    <Skill name="Vue" target={97} variant="success" />
                </Col>
            </Row>

            <Row>
                <Col xl>
                    <Skill name="Node" target={78} variant="info" startDate={new Date('2020-01-01')} />
                </Col>
                <Col xl>
                    <Skill name="Python" target={95} variant="success" startDate={new Date('2017-01-01')} />
                </Col>
            </Row>

            <Row>
                <Col xl>
                    <Skill name="AWS" target={65} variant="info" startDate={new Date('2021-06-01')} />
                </Col>
                <Col xl>
                    <Skill name="Heroku" target={90} variant="success" startDate={new Date('2019-10-01')} />
                </Col>
            </Row>
        </Card>
    )
}

export default Skills