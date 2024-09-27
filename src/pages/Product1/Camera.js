import React from 'react';
import { useThree } from '@react-three/fiber';

const Camera = () => {
  const { camera } = useThree();

  
  camera.position.set(0, 0, 5);

  camera.fov = 45; 

  camera.near = 0.1;
  camera.far = 1000;

  return null;
};

export default Camera;
