import { OrbitControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { Interactive, useHitTest, useXR } from "@react-three/xr";
import { useRef, useState, useEffect } from "react";
import { HomeModel } from "./Model";

const HomeHitModel = () => {
  const reticleRef = useRef();
  const [models, setModels] = useState([]);
  const [placingModel, setPlacingModel] = useState(false); // New state for visual feedback
  const { isPresenting } = useXR(); // Move useXR inside the XR context

  const { camera } = useThree();
  
  useEffect(() => {
    if (!isPresenting) {
      camera.position.z = 3;
    }
  }, [isPresenting, camera]);

  useHitTest((hitMatrix) => {
    hitMatrix.decompose(
      reticleRef.current.position,
      reticleRef.current.quaternion,
      reticleRef.current.scale
    );

    reticleRef.current.rotation.set(-Math.PI / 2, 0, 0);
  });

  const placeModel = (e) => {
    if (!placingModel) {
      let position = e.intersection.object.position.clone();
      let id = Date.now();
      setModels([{ position, id }]);
      setPlacingModel(true);

      // Optionally, set a timeout to reset placingModel after a certain duration
      setTimeout(() => {
        setPlacingModel(false);
      }, 1000);
    }
  };

  return (
    <>
      <OrbitControls
        enableZoom={true} // Enable zooming
        minPolarAngle={Math.PI / 4} // Set the minimum polar angle (elevation) of the camera
        maxPolarAngle={3 * Math.PI / 4} // Set the maximum polar angle (elevation) of the camera
        minDistance={1} // Set the minimum distance of the camera from the target
        maxDistance={10} // Set the maximum distance of the camera from the target
      />
      <ambientLight />
      {isPresenting &&
        models.map(({ position, id }) => (
          <HomeModel key={id} position={position} />
        ))}
      {isPresenting && (
        <Interactive onSelect={placeModel}>
          <mesh ref={reticleRef} rotation-x={-Math.PI / 2}>
            <ringGeometry args={[0.1, 0.25, 32]} />
            <meshStandardMaterial color={placingModel ? "green" : "white"} />
          </mesh>
        </Interactive>
      )}
    </>
  );
};

export default HomeHitModel;
