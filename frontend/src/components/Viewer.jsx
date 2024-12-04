import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Box } from '@react-three/drei';

const Viewer = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} />
      <Box>
        <meshStandardMaterial attach="material" color="orange" />
      </Box>
      <OrbitControls enableZoom={true} />
    </Canvas>
  );
};

export default Viewer;