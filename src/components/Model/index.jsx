import React, { useRef } from 'react';

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useFrame, useLoader } from 'react-three-fiber';
import gltfModel from '../../models/model.gltf';

const Model = ({ scale = 10, position = [0, 0, 0] }) => {
  const ref = useRef();
  const gltf = useLoader(GLTFLoader, gltfModel);

  useFrame(() => (ref.current.rotation.y += 0.005));

  return <primitive scale={scale} ref={ref} object={gltf.scene} position={position} />;
};

export default Model;
