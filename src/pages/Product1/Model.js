import React, { useRef, useEffect, useState } from "react";
import { useGLTF } from "@react-three/drei";

export function HomeModel(props) {
  const { nodes, materials } = useGLTF("models/bmo (1).glb");

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
<group {...props} dispose={null}> <group scale={0.001}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
      onTouchStart={handlePointerDown}
      onTouchMove={handlePointerMove}
      onTouchEnd={handlePointerUp}
    >
        <group position={[0, 334.4, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_Material010_0.geometry}
            material={materials['Material.010']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_Material004_0.geometry}
            material={materials['Material.004']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_Material009_0.geometry}
            material={materials['Material.009']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_Material003_0.geometry}
            material={materials['Material.003']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_Material_0.geometry}
            material={materials.Material}
          />
        </group>
        <group position={[65.6, -114.4, 41.4]} rotation={[-Math.PI / 2, 1.5, 0]} scale={100}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.BezierCurve001_Material004_0.geometry}
            material={materials['Material.004']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.BezierCurve002_Material004_0.geometry}
            material={materials['Material.004']}
            position={[-0.6, 1.3, 2.4]}
            scale={1.3}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text_Material001_0.geometry}
          material={materials['Material.001']}
          position={[47, 364.8, -218]}
          rotation={[-Math.PI, 0, Math.PI / 2]}
          scale={149.6}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_Material005_0.geometry}
          material={materials['Material.005']}
          position={[100.9, 158.9, 132.5]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={17.2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_Material007_0.geometry}
          material={materials['Material.007']}
          position={[95, 142.9, -77.9]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[16.6, 25.6, 23.9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_Material008_0.geometry}
          material={materials['Material.008']}
          position={[88.2, 136.2, -148.5]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[16.4, 16.4, 22.4]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_Material006_0.geometry}
          material={materials['Material.006']}
          position={[76.7, 65, -124.6]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[34.8, 34.8, 47.4]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve_Material004_0.geometry}
          material={materials['Material.004']}
          position={[0, -10, -308.8]}
          rotation={[0, Math.PI / 2, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Layer_1-2_Material002_0'].geometry}
          material={materials['Material.002']}
          position={[-5.2, 0, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
      </group>
    </group>
  );
}

useGLTF.preload("models/bmo (1).glb");
