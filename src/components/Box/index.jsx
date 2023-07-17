import React, { useRef } from 'react';

import { useFrame } from 'react-three-fiber';

const Box = ({ position, color = 'pink', args }) => {
  const mesh = useRef(null);
  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
  });

  const [expand, setExpand] = React.useState(false);
  const [hovered, setHover] = React.useState(false);

  return (
    <mesh
      castShadow
      scale={expand ? 1.5 : 1}
      onClick={(event) => setExpand(!expand)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
      position={position}
      ref={mesh}>
      <boxGeometry attach="geometry" args={args} />
      <meshStandardMaterial attach="material" color={hovered ? 'orange' : color} />
    </mesh>
  );
};

export default Box;
