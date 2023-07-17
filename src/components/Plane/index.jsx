import React from 'react';

const Plane = () => {
  return (
    <group>
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]}>
        <planeGeometry attach="geometry" args={[100, 100]} />
        <shadowMaterial attach="material" opacity={0.3} />
        {/* <meshBasicMaterial attach="material" color="yellow" /> */}
      </mesh>
    </group>
  );
};

export default Plane;
