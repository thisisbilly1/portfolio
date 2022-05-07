import { useLayoutEffect, useRef } from "react";
import {createWorld} from "../createWorld"
import { Sword } from "./Sword"

function SwordContainer() {
    const background = useRef()
    const ctx = useRef()

    useLayoutEffect(()=>{
        
        ctx.current = createWorld(background.current)
        ctx.current.init()

        ctx.current.camera.position.set(-5, 5, 20)
        ctx.current.camera.lookAt(-5, 5, 0)
        ctx.current.camera.rotation.z = Math.PI + Math.PI/6

        const sword = new Sword(ctx.current)
        ctx.current.objects = [sword]

        ctx.current.animate()
        return (()=>{
            if (ctx.current) ctx.current.stop()
            
        })
    },[])
    return (
        <div>
            <div ref={background} className="canvas-background"/>
        </div>
    );
}

export default SwordContainer;