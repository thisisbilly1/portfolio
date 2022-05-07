import { Ball } from "./Ball"
import Container3d from "../Container3d"

const BallContainer = () => {
    const ball = new Ball()

    return (
        <Container3d objects={[ball]} />
    )
}

export default BallContainer;