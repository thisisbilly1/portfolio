import { useRef, useState } from "react"
import { Card, Form, Button, Spinner } from "react-bootstrap"
import axios from "axios"

const Contact = () => {
    const [validated, setValidated] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [sent, setSent] = useState(false)

    const nameRef = useRef()
    const emailRef = useRef()
    const messageRef = useRef()

    const submit = (e) => {
        e.preventDefault()
        setValidated(true)
        
        const form = e.currentTarget
        if (form.checkValidity()) {
            setLoading(true)
            axios.post("contact",{
                name: nameRef.current.value,
                email: emailRef.current.value,
                message: messageRef.current.value
            })
            .then(response=>{
                setSent(true)
                console.log(response)
            })
            .catch(error=>{
                setError(true)
                console.log(error)
            })
        }
    }

    if (sent){
        return (
            <Card style={{maxWidth:"30rem", marginTop:"100px"}} className="bg-dark text-white text-center">
                <Card.Title>Success!</Card.Title>
                <Card.Body>Please give 3-5 business days for a response.</Card.Body>
            </Card>
        )
    }

    if (error){
        return (
            <Card style={{maxWidth:"30rem", marginTop:"100px"}} className="bg-dark text-white text-center">
                <Card.Title>There was an error contacting me!</Card.Title>
                <Card.Body>Try reaching out on social media instead!</Card.Body>
            </Card>
        )
    }
    return (
        <Card style={{maxWidth:"30rem", marginTop:"100px"}} className="bg-dark text-white">
            <Card.Title>Contact Me</Card.Title>
            <Form onSubmit={submit} noValidate validated={validated}>
            <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control ref={nameRef} type="text" required></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control ref={emailRef} type="email" required></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Message</Form.Label>
                    <Form.Control ref={messageRef} as="textarea" rows={3} required></Form.Control>
                </Form.Group>

                <Button variant="outline-light" type="submit" className="w-100 mt-3">
                    {loading?
                        <Spinner animation="border" size="sm" />:
                        <span>Submit</span>
                    }
                </Button>

            </Form>
        </Card>
    )
}

export default Contact