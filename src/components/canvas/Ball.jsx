import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Decal, Float, OrbitControls, Preload, useTexture } from "@react-three/drei";

import CanvasLoader from "../Loader";

const COLS = 5;
const SPACING = 6;

const Ball = ({ imgUrl, position }) => {
  const [decal] = useTexture([imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2} position={position}>
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icons }) => {
  const totalRows = Math.ceil(icons.length / COLS);
  const cameraZ = 12 + totalRows * 3;

  return (
    <Canvas
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{ position: [0, 0, cameraZ], fov: 75 }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.25} />
        <directionalLight position={[0, 0, 0.05]} />
        {icons.map((icon, index) => {
          const col = index % COLS;
          const row = Math.floor(index / COLS);
          const x = (col - (COLS - 1) / 2) * SPACING;
          const y = ((totalRows - 1) / 2 - row) * SPACING;
          return <Ball key={index} imgUrl={icon} position={[x, y, 0]} />;
        })}
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
