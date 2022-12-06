import { useFrame } from "@react-three/fiber";
import { useRef, Suspense } from "react";
import {
  OrbitControls,
  TransformControls,
  PivotControls,
  useGLTF
} from "@react-three/drei";
import { Perf } from "r3f-perf";

import T1Experience from "./t1-experience.component";


const Cube = () => {

  const boxRef = useRef();
  const htmlTextRef = useRef();

  useFrame((state, delta) => {
    // boxRef.current.rotation.y += delta
  })

  return (
    <>
      <Perf position={"top-left"} />
      {/* <OrbitControls makeDefault /> */}
      {/* <directionalLight position={[1, 4, 10]} intensity={.2} castShadow={true} /> */}
      <ambientLight intensity={2} castShadow={true} />

      <T1Experience />
    </>
  )
};


export default Cube;