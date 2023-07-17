import React from 'react';
import './App.scss';

import { Canvas } from 'react-three-fiber';
import Box from './components/Box';
import Plane from './components/Plane';
import { SoftShadows } from '@react-three/drei';

function App() {
  return (
    <>
      <Canvas shadows camera={{ position: [-5, 2, 10], fov: 60 }}>
        <SoftShadows size={15} samples={50} />
        <ambientLight intensity={0.3} />
        <pointLight position={[-10, 0, -20]} intensity={0.5} />
        <pointLight position={[0, -10, 0]} intensity={1.5} />
        <directionalLight
          castShadow
          position={[0, 10, 0]}
          intensity={1.5}
          shadow-mapSize-wigth={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />

        <Plane />

        <Box position={[0, 1, 0]} color="lightblue" />
        <Box position={[-2, 1, -5]} />
        <Box position={[5, 1, -2]} />
      </Canvas>
    </>
  );
}

export default App;
