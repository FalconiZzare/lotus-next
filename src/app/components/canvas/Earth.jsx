"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "@/app/components/canvas/Loader.jsx";

const Earth = () => {
  const stylizedEarth = useGLTF(`${process.env.NEXT_PUBLIC_GH_PAGES ? "" : "/lotus-next"}/3DModels/stylized_planet/stylized_planet.glb`);
  return <primitive object={stylizedEarth.scene} scale={2.5} position-y={0} rotation-y={0} />;
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop={"always"}
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 80,
        near: 0.1,
        far: 200,
        position: [-4, 3, 1]
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
