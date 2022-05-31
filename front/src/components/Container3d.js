import { useLayoutEffect, useRef, useState } from "react";
import { createWorld } from "./createWorld"
import { createWorldBloom } from "./createWorldBloom"
import { Form, ProgressBar } from "react-bootstrap"
import addOrbitControls from "./controls/orbit"

function Container3d({ objects = [], bloom = false, banner = false, onLoaded, customController = false }) {
    const background = useRef()
    const ctx = useRef()
    const [prevAngle, setPrevAngle] = useState(180)
    const [loaded, setLoaded] = useState(false)
    const [loadingProgress, setLoadingProgress] = useState(0)

    const onProgress = (progress) => {
        if (progress.lengthComputable) {
            const percentComplete = progress.loaded / progress.total * 100
            setLoadingProgress(percentComplete)
        }
    }

    const loadObjects = async () => {
        if (bloom) {
            await new Promise(r => setTimeout(r, 300))
            ctx.current = createWorldBloom(background.current).init()
        }
        else ctx.current = createWorld(background.current).init()

        if (!customController) {
            addOrbitControls(ctx.current)
        }

        for (const obj of objects) {
            await obj.load(ctx.current, onProgress)

            // add the outlines
            if (obj.outlined) ctx.current.outlinePass.selectedObjects.push(obj.mesh)

            // add to the list that calls render() for objects if they need to be animated
            if (obj.needsAnimation) ctx.current.objects = [obj]
        }

        if (onLoaded) onLoaded(ctx.current)

        ctx.current.animate()
        setLoaded(true)
        // resize canvas when everything is loaded in
        ctx.current.onWindowResize()
    }
    useLayoutEffect(() => {
        loadObjects()
        return (() => {
            if (ctx.current) ctx.current.stop()
        })
        // no awaits in useLayoutEffect, so we move the function out and disable this lint
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const ChangeRotation = (e) => {
        ctx.current.controls.rotate((e.target.value - prevAngle) * Math.PI / 180)
        setPrevAngle(e.target.value)
    }

    return (
        <div>
            <div ref={background} className={banner ? "canvas-banner" : "canvas-small"}>
                {!loaded &&
                    <div className="centered-loading">
                        <ProgressBar now={loadingProgress} />
                    </div>
                }
            </div>
            {!customController &&
                <div className="orbit-controller">
                    <Form.Range onChange={ChangeRotation} max="360" min="0"></Form.Range>
                </div>
            }
        </div>
    );
}

export default Container3d;