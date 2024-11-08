import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, shaderMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { extend } from '@react-three/fiber';

const BlobShaderMaterial = shaderMaterial(
  {
    time: 0,
    colorArray: [
      new THREE.Color('#856088'),
      new THREE.Color('#563C5C'),
      new THREE.Color('#8806CE'),
      new THREE.Color('#32174D'),
      new THREE.Color('#B57EDC')
    ],
  },
  // Vertex Shader
  `
    uniform float time;
    varying vec2 vUv;
    varying float vDistortion;
    
    void main() {
      vUv = uv;
      vec3 pos = position;
      float frequency = 2.0;
      float amplitude = 0.2;
      pos.x += sin(pos.y * frequency + time * 1.5) * amplitude;
      pos.y += sin(pos.x * frequency * 1.2 + time * 1.5) * amplitude;
      pos.z += cos(pos.x * frequency + time * 0.5) * amplitude;
      vDistortion = sin(pos.x * frequency * 0.5 + time) * amplitude;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `,
  // Fragment Shader
  `
    uniform float time;
    uniform vec3 colorArray[5];
    varying vec2 vUv;
    varying float vDistortion;

    void main() {
      float mixStrength = vDistortion * 4.0 + 0.5;
      float index = abs(sin(mixStrength + time * 0.2)) * 4.0;
      int colorIndex1 = int(floor(index));
      int colorIndex2 = int(ceil(index));
      float blendFactor = fract(index);
      vec3 color = mix(colorArray[colorIndex1], colorArray[colorIndex2], blendFactor);
      gl_FragColor = vec4(color, 1.0);
    }
  `
);

extend({ BlobShaderMaterial });

const Blob = ({ isDarkMode }) => {
  const meshRef = useRef();

  useEffect(() => {
    const colors = isDarkMode
      ? [
          new THREE.Color('#856088'),
          new THREE.Color('#563C5C'),
          new THREE.Color('#8806CE'),
          new THREE.Color('#32174D'),
          new THREE.Color('#B57EDC')
        ]
      : [
          new THREE.Color('#D86E77'),
          new THREE.Color('#EA899A'),
          new THREE.Color('#C34D5C'),
          new THREE.Color('#F08080'),
          new THREE.Color('#D95959')
        ];

    colors.forEach((color, i) => {
      meshRef.current.material.uniforms.colorArray.value[i] = color;
    });
  }, [isDarkMode]);

  useFrame(({ clock }) => {
    meshRef.current.material.uniforms.time.value = clock.getElapsedTime();
  });

  return (
    <mesh ref={meshRef} scale={1.5}>
      <sphereGeometry args={[1, 512, 512]} />
      <blobShaderMaterial attach="material" />
    </mesh>
  );
};

const ThreeScene = ({ isDarkMode }) => {
  return (
    <Canvas className="absolute top-0 left-0 w-full h-full z-0">
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      
      <Blob isDarkMode={isDarkMode} />

      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default ThreeScene;
