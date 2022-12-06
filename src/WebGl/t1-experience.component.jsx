import { useLoader } from "@react-three/fiber";
import { useControls } from "leva";
import { useGLTF, useTexture, Sparkles, Center, PresentationControls } from "@react-three/drei";
import { RGBA_ASTC_10x10_Format } from "three";

const T1Experience = () => {

  const { position, scale, rotation } = useControls('T1-model', {
    position: {
      value: { x: -0.42, y: -1.31, z: 0.10 },
    },
    rotation: {
      value: { x: 0.02, y: 1.99, z: 0.05 }
    },
    scale: 0.0386,
  })

  const { scene, nodes } = useGLTF('./glb/t1-experience.glb');
  console.log(nodes);

  const bakedTexture = useTexture('./glb/texture/baked.jpg');
  bakedTexture.flipY = false;

  return (
    <>
      <Center position={[0, 0, 0]}>
        <PresentationControls
          enabled={true} // the controls can be disabled by setting this to false
          global={false} // Spin globally or by dragging the model
          cursor={false} // Whether to toggle cursor style on drag
          snap={true} // Snap-back to center (can also be a spring config)
          speed={.8} // Speed factor
          zoom={1.3} // Zoom factor when half the polar-max is reached
          polar={[0, .0005]} // Vertical limits
          azimuth={[-.25, .25]} // Horizontal limits
          // rotation={[0, 0, 0]} // Default rotation
          config={{ mass: .5, tension: 120, friction: 26 }} // Spring config
        >
          <mesh
            geometry={nodes.merged.children[0].geometry}
            scale={scale}
            position={nodes.merged.children[0].position}
            rotation={[rotation.x, rotation.y, rotation.z]}
          >
            <meshStandardMaterial map={bakedTexture} />
          </mesh>
        </PresentationControls>

        <Sparkles
          scale={[4, 1, 2]}
          position-y={.2}
          speed={.5}
          count={50}
          size={10}
          color={"#FFE3AF"}
        />

      </Center>
    </>
  )
};

export default T1Experience;