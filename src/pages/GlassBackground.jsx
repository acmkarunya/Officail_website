// src/components/GlassBackground.js
import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import * as THREE from 'three';

const ACMLogo = () => {
  const groupRef = useRef(null);

  useEffect(() => {
    const loader = new FontLoader();
    loader.load('/helvetiker_regular.typeface.json', (font) => {
      const geometry = new TextGeometry('ACM', {
        font: font,
        size: 1,
        height: 0.2,
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 0.1,
        bevelSize: 0.05,
        bevelSegments: 5
      });
      geometry.center();

      const material = new THREE.MeshStandardMaterial({ color: 'white', roughness: 0.2, metalness: 0.5 });

      const mesh = new THREE.Mesh(geometry, material);
      groupRef.current.add(mesh);
    });
  }, []);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
    }
  });

  return <group ref={groupRef} />;
};

const GlassBackground = () => (
  <Canvas style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
    <ambientLight intensity={0.5} />
    <pointLight position={[10, 10, 10]} intensity={1.5} />
    <ACMLogo />
  </Canvas>
);

export default GlassBackground;
