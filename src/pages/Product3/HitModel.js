import { OrbitControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { Interactive, useHitTest, useXR } from "@react-three/xr";
import { useRef, useState, useEffect } from "react";
import { HomeModel } from "./Model";

const HomeHitModel = () => {
  const reticleRef = useRef();
  const [models, setModels] = useState([]);
  const [placingModel, setPlacingModel] = useState(false); 
  const { isPresenting } = useXR(); 

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
      setTimeout(() => {
        setPlacingModel(false);
      }, 1000);
    }
  };

  return (
    <>
      <OrbitControls
        enableZoom={true} 
        minPolarAngle={Math.PI / 4} 
        maxPolarAngle={3 * Math.PI / 4} 
        minDistance={1} 
        maxDistance={10}
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
