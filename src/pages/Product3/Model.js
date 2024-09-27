import React, { useRef, useEffect, useState } from "react";
import { useGLTF } from "@react-three/drei";

export function HomeModel(props) {
  const { nodes, materials } = useGLTF("models/vector_robot.glb");

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

  return (
    <group {...props} dispose={null}> <group scale={0.1}
    onPointerDown={handlePointerDown}
    onPointerMove={handlePointerMove}
    onPointerUp={handlePointerUp}
    onPointerLeave={handlePointerUp}
    onTouchStart={handlePointerDown}
    onTouchMove={handlePointerMove}
    onTouchEnd={handlePointerUp}
  >
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Object_4.geometry}
      material={materials.vector_arms}
      position={[0.0914, 0.3291, -0.9419]}
      rotation={[Math.PI / 2, 0, -Math.PI]}
      scale={[-1.9987, 1, 1]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Object_6.geometry}
      material={materials.vector_arms}
      position={[0, 0, -0.9963]}
      rotation={[Math.PI / 2, 0, -Math.PI]}
      scale={[-2.0733, 1.7748, 0.5856]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Object_8.geometry}
      material={materials.vector}
      position={[1.9761, -0.7132, -0.0049]}
      rotation={[0, 0, -Math.PI / 2]}
      scale={[0.683, 2.0187, 0.9966]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Object_10.geometry}
      material={materials.vector}
      position={[-0.502, 0, -0.799]}
      rotation={[Math.PI / 2, 0, 0]}
      scale={[2.147, 1.8159, 1.8159]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Object_12.geometry}
      material={materials.vector}
      position={[-0.3228, -0.8557, -1.1951]}
      rotation={[Math.PI / 2, 0, 0]}
      scale={[1, 2.1231, 1]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Object_14.geometry}
      material={materials.vector}
      position={[0.67, -0.9272, -0.9599]}
      rotation={[Math.PI / 2, 0, 0]}
      scale={[0.5822, 0.2656, 0.5822]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Object_16.geometry}
      material={materials.vector}
      position={[-1.5415, -1.1115, -0.9507]}
      rotation={[Math.PI / 2, 0, 0]}
      scale={[0.4137, 0.2656, 0.4137]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Object_18.geometry}
      material={materials.vector}
      position={[1.8262, 0, 0.6551]}
      rotation={[Math.PI / 2, 0, 0]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Object_20.geometry}
      material={materials.vector}
      position={[1.8168, 0, -0.8366]}
      rotation={[Math.PI / 2, 0, 0]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Object_22.geometry}
      material={materials.vector}
      position={[0.0233, -0.664, 1.5436]}
      rotation={[Math.PI / 2, 0, 0]}
      scale={[2.4956, 1.024, 1.024]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Object_24.geometry}
      material={materials.vector}
      position={[0.0233, -0.664, -0.4297]}
      rotation={[Math.PI / 2, 0, 0]}
      scale={[2.4956, 1.024, 1.024]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Object_26.geometry}
      material={materials.vector}
      position={[1.7911, -1.3483, -0.0083]}
      rotation={[0, 0, -Math.PI / 2]}
      scale={[0.0842, 0.6131, 0.8979]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Object_28.geometry}
      material={materials.vector}
      position={[0.1031, 0.6323, 0.0141]}
      scale={[0.8627, 0.9222, 0.7968]}
    />
  </group>
  </group>
  );
}

useGLTF.preload("models/vector_robot.glb");
