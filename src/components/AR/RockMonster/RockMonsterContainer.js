import { RockMonster } from "./RockMonster"
import Container3d from "../../Container3d"

const RockMonsterContainer = () => {
    const rockMonster = new RockMonster()

    return (
        <Container3d objects={[rockMonster]} />
    )
}

export default RockMonsterContainer;