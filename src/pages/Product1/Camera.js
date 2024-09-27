import React from 'react';
import { useThree } from '@react-three/fiber';

const Camera = () => {
  const { camera } = useThree();

  // Set the position of the camera
  camera.position.set(0, 0, 5);

  // Set the field of view (FOV) to control the perspective
  // Experiment with different values for fov to achieve the desired effect
  // A smaller fov will result in a more "zoomed-in" appearance
  // A larger fov will result in a wider field of view and a more "zoomed-out" appearance
  camera.fov = 45; // Adjust this value according to your needs

  // Set near and far clipping planes to control what is visible
  // Adjust these values based on the size of your scene
  camera.near = 0.1;
  camera.far = 1000;

  // If you want to control the rotation of the camera, you can use the lookAt method
  // camera.lookAt(0, 0, 0);

  return null;
};

export default Camera;
