import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";

export function HomeModel(props) {
  const { nodes, materials } = useGLTF(
    "models/nanashi_mumei_-_hololive_en_council.glb"
  );

  // Create a reference to the 3D model group
  const group = useRef();

  // Use the useEffect hook to update the rotation
  useEffect(() => {
    const animate = () => {
      // Check if group.current is not null before accessing its properties
      if (group.current) {
        // Rotate the group by a small angle on the Y-axis
        group.current.rotation.y += 0.005;
      }
      // Request the next animation frame
      requestAnimationFrame(animate);
    };

    // Start the animation
    animate();

    // Cleanup function to stop the animation on component unmount
    return () => cancelAnimationFrame(animate);
  }, []);

  return (
    <group ref={group} {...props} dispose={null} scale={[0.2, 0.2, 0.2]}>
      {/* Adjust the scale values as needed */}
      <primitive object={nodes.GLTF_created_0_rootJoint} />
      <skinnedMesh
        geometry={nodes.Object_7.geometry}
        material={materials.Mumei}
        skeleton={nodes.Object_7.skeleton}
      />
    </group>
  );
}

useGLTF.preload("models/nanashi_mumei_-_hololive_en_council.glb");
