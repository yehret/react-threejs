import React, { useRef, useState } from 'react';
import { useThree, extend, useFrame } from 'react-three-fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

extend({ OrbitControls });

const CameraControls = () => {
  const { camera, gl } = useThree();
  const controlsRef = useRef();

  useFrame(() => {
    controlsRef.current.update();
    //  camera.position.x = Math.sin(Date.now() * 0.001) * 5; // Example rotation animation
    //  camera.position.y = Math.sin(Date.now() * 0.001) * 5; // Example rotation animation
    camera.lookAt(0, 0, 0); // Keep the camera focused on the center of the scene
  });

  //   useFrame(({ clock }) => {
  //     controlsRef.current.update();
  //     const t = clock.getElapsedTime() * 5; // Отримуємо час, який пройшов з початку анімації
  //     const radius = 10; // Радіус кола, по якому буде рухатись камера
  //     const angle = t * 0.1; // Кут, на який повинна бути обернена камера
  //     const centerX = 0; // Координата X центру об'єкту
  //     const centerZ = 0; // Координата Z центру об'єкту
  //     const x = centerX + Math.cos(angle) * radius; // Обчислюємо координату x на колі
  //     const z = centerZ + Math.sin(angle) * radius; // Обчислюємо координату z на колі
  //     camera.position.set(x, 10, z); // Встановлюємо позицію камери
  //     camera.lookAt(centerX, 0, centerZ); // Повертаємо камеру на центр об'єкту
  //   });

  return <orbitControls ref={controlsRef} args={[camera, gl.domElement]} />;
};

export default CameraControls;
