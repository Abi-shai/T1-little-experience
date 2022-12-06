import { DoubleSide } from "three";
import { useMemo } from "react";

const CustomObject = () => {
  const verticesCount = 10 * 3;
  const positions = new Float32Array(verticesCount * 3);

  for (let i = 0; i < verticesCount * 3; i++)
    positions[i] = (Math.random() - 0.5) * 3

  return (
    <mesh>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={verticesCount}
          itemsize={3}
          array={positions}
        />
      </bufferGeometry>
      <meshBasicMaterial color={'red'} side={DoubleSide} />
    </mesh>
  );
}

export default CustomObject;