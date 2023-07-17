import React, { Suspense } from 'react';
import Model from './components/Model';

const ModelViewer = ({ scale = 10, position = [0, 0, 0] }) => {
  return (
    <Suspense fallback={null}>
      <Model scale={scale} position={position} />
    </Suspense>
  );
};

export default ModelViewer;
