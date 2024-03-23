import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber"; //   this will give a background frame to work on for canvas
import { OrbitControls, Preload, meshBounds, useGLTF } from "@react-three/drei"; //   few 3D model handling objects, 'useGLTF' is to get/render 3D model

import CanvasLoader from "../Loader";

const Computers = () => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight position={[-20, 50, 10]}
      angle={0.12}
      penumbra={1}
      intensity={1}
      castShadow
      shadow-mapSize={1024} />
      <primitive 
      object={computer.scene} 
      scale={0.75}
      position={[0, -3.25, -1.5]}
      rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      // x,y,z position of camera and feild of view of the model
      camera={{ position: [20, 3, 5], fov: 25 }}
      // this needs to be there to properly render our model
      gl={{ preserveDrawingBuffer: true }}
    >
      {/* not related to 3js, but to react. this allows us to have a loader while our model is loading */}
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls 
        enableZoom={false}        //  this will dis-allow us to let us zoom the model
        // this will restrict the rotation, we will not be able to rotate it all the way around, up and down left and right but a specific axis
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2} 
        />
        <Computers />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
