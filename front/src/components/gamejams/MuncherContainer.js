import { Muncher } from "./Muncher"
import Container3d from "../Container3d"

const MuncherContainer = () => {
    const muncher = new Muncher
    return (
        <Container3d objects={[muncher]} />
    )
}

export default MuncherContainer;