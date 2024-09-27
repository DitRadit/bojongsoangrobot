import React, { useRef, useEffect, useState } from "react";
import { useGLTF } from "@react-three/drei";

export function HomeModel(props) {
  const { nodes, materials } = useGLTF("models/cute_baymax_low_poly_3d_model.glb");

  
  const group = useRef();

  const [isDragging, setIsDragging] = useState(false);
  const [previousMousePosition, setPreviousMousePosition] = useState({ x: 0 });

  useEffect(() => {
    const animate = () => {
      if (group.current && !isDragging) {
        group.current.rotation.y += 0.005;
      }
      requestAnimationFrame(animate);
    };

    animate();
    
    return () => cancelAnimationFrame(animate);
  }, [isDragging]);
  const handlePointerDown = (e) => {
    setIsDragging(true);
    setPreviousMousePosition({ x: e.clientX || e.touches[0].clientX });
  };
  const handlePointerMove = (e) => {
    if (!isDragging) return;

    const clientX = e.clientX || e.touches[0].clientX;
    const deltaX = clientX - previousMousePosition.x;

    if (group.current) {
      group.current.rotation.y += deltaX * 0.01; 
    }

    setPreviousMousePosition({ x: clientX });
  };

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
