import React, { useRef } from 'react';

import { useFrame } from 'react-three-fiber';
import { useSpring, a } from 'react-spring';

const Box = ({ position, color = 'pink', args }) => {
  const mesh = useRef(null);
  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
  });

  const [hover, setHober] = React.useState(false);
  const props = useSpring({
    color: hover ? 'orange' : 'lightblue',
  });

  return (
    <mesh castShadow position={position} ref={mesh}>
      <boxGeometry attach="geometry" args={args} />
      <meshStandardMaterial attach="material" color={color} />
    </mesh>
  );
};

export default Box;
