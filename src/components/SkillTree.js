import { Card } from "react-bootstrap"
import { useState, createRef, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { Nodes, Node } from "./frontend/Nodes"
import { MapControls } from "@react-three/drei"

const SkillTree = () => {
  const canvas = useRef();
  const [[a, b, c, d, e]] = useState(() => [...Array(5)].map(createRef))
  const [enableControls, setEnableControls] = useState(true);
  return (
    <Card style={{height: '500px'}}>
      <Card.Title className="text-center">Web Dev Summary</Card.Title>
      <Canvas orthographic camera={{ zoom: 80 }} ref={canvas}>
        <Nodes>
          <Node ref={a} name="a" color="#204090" position={[-2, 2, 0]} connectedTo={[b, c, e]} parent={canvas} setEnableControls={setEnableControls}/>
          <Node ref={b} name="b" color="#904020" position={[2, -3, 0]} connectedTo={[d, a]} parent={canvas} setEnableControls={setEnableControls}/>
          <Node ref={c} name="c" color="#209040" position={[-0.25, 0, 0]} parent={canvas} setEnableControls={setEnableControls}/>
          <Node ref={d} name="d" color="#204090" position={[0.5, -0.75, 0]} parent={canvas} setEnableControls={setEnableControls}/>
          <Node ref={e} name="e" color="#204090" position={[-0.5, -1, 0]} parent={canvas} setEnableControls={setEnableControls}/>
        </Nodes>
        <MapControls enabled={enableControls}/>
        </Canvas>
    </Card>
  )
}

export default SkillTree;
