import React, { useRef, useEffect, useState } from "react";
import { useGLTF } from "@react-three/drei";

export function HomeModel(props) {
  const { nodes, materials } = useGLTF("models/cute_baymax_low_poly_3d_model.glb");

  // Create a reference to the 3D model group
  const group = useRef();
  
  // State to track dragging
  const [isDragging, setIsDragging] = useState(false);
  const [previousMousePosition, setPreviousMousePosition] = useState({ x: 0 });

  // Use the useEffect hook to update the rotation
  useEffect(() => {
    const animate = () => {
      // Automatic rotation animation if not dragging
      if (group.current && !isDragging) {
        group.current.rotation.y += 0.005;
      }
      requestAnimationFrame(animate);
    };

    animate();
    
    return () => cancelAnimationFrame(animate);
  }, [isDragging]);

  // Handle pointer down (touch/mouse down)
  const handlePointerDown = (e) => {
    setIsDragging(true);
    setPreviousMousePosition({ x: e.clientX || e.touches[0].clientX });
  };

  // Handle pointer move (touch/mouse drag)
  const handlePointerMove = (e) => {
    if (!isDragging) return;

    const clientX = e.clientX || e.touches[0].clientX;
    const deltaX = clientX - previousMousePosition.x;

    // Update the model's rotation based on deltaX
    if (group.current) {
      group.current.rotation.y += deltaX * 0.01; // Adjust rotation sensitivity
    }

    setPreviousMousePosition({ x: clientX });
  };

  // Handle pointer up (touch/mouse release)
  const handlePointerUp = () => {
    setIsDragging(false);
  };

  return ( <group {...props} dispose={null}> <group scale={0.1}
    onPointerDown={handlePointerDown}
    onPointerMove={handlePointerMove}
    onPointerUp={handlePointerUp}
    onPointerLeave={handlePointerUp}
    onTouchStart={handlePointerDown}
    onTouchMove={handlePointerMove}
    onTouchEnd={handlePointerUp}
  >
    <group rotation={[-Math.PI / 2, 0, 0]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2.geometry}
        material={materials.Material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_3.geometry}
        material={materials.Material_1}
      />
    </group>
  </group>
  </group>
  );
}

useGLTF.preload("models/cute_baymax_low_poly_3d_model.glb");
