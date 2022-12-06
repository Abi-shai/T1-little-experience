import { Canvas } from "@react-three/fiber";
import { Leva, useControls } from "leva";

import WebGl from "./WebGl/webgl";

import './App.css';

const App = () => {

  const onCreated = ({ gl }) => {
    gl.setClearColor("#330136", .9);
  }


  return (
    <div className="canvas-wrapper">
      <Leva collapsed={true} />

      <Canvas
        flat
        camera={{
          fov: 45,
          near: 0.1,
          far: 2000,
          position: [3, 2, 6]
        }}
        onCreated={onCreated}
      >
        <WebGl />
      </Canvas>
    </div>
  );

}

export default App;
