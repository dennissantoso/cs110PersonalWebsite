import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';

function Box(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef();

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => {
    mesh.current.rotation.x += 0.01;
    mesh.current.rotation.y += 0.01;
  });

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={[1, 1, 1]}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
}

function MyCanvas() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <spotLight intensity={0.5} position={[10, 15, 10]} angle={0.3} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />

      <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />

      <OrbitControls />
      <Stars />
    </Canvas>
  );
}

export default MyCanvas;
