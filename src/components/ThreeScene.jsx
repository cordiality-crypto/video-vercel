import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function randomPosition(range) {
  return (Math.random() - 0.5) * range;
}

function getRandomColor() {
  const colors = ['#A2316A', '#1F142D', '#332468', '#B75D59', '#7B8A8D'];
  return colors[Math.floor(Math.random() * colors.length)];
}

const WireframeObject = ({ position }) => {
  const meshRef = useRef();

  useFrame(({ clock }) => {
    meshRef.current.rotation.x = clock.getElapsedTime() * 0.3;
    meshRef.current.rotation.y = clock.getElapsedTime() * 0.3;
  });

  const geometries = [
    <sphereGeometry args={[0.5, 16, 16]} />,
    <boxGeometry args={[0.7, 0.7, 0.7]} />,
    <torusGeometry args={[0.5, 0.2, 16, 100]} />,
    <coneGeometry args={[0.5, 1, 16]} />,
    <cylinderGeometry args={[0.5, 0.5, 1, 16]} />,
    <octahedronGeometry args={[0.5, 0]} />,
    <dodecahedronGeometry args={[0.5, 0]} />
  ];
  const geometry = geometries[Math.floor(Math.random() * geometries.length)];

  const color = getRandomColor();

  return (
    <mesh ref={meshRef} position={position}>
      {geometry}
      <meshBasicMaterial color={color} wireframe />
    </mesh>
  );
};

const ThreeScene = () => {
  const positions = Array.from({ length: 50 }, () => [
    randomPosition(20),
    randomPosition(20),
    randomPosition(20)
  ]);

  return (
    <Canvas className="absolute top-0 left-0 w-full h-full z-0" camera={{ position: [0, 0, 10], fov: 60 }}>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} />

      {positions.map((pos, index) => (
        <WireframeObject key={index} position={pos} />
      ))}

      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default ThreeScene;
