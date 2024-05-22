import React, { useState } from "react";
import { Html, useGLTF, Text, Text3D, Center, Float, MeshTransmissionMaterial } from "@react-three/drei";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from 'three';

export default function Shapes1() {
  const { camera, scene } = useThree();
  const [hoveredText, setHoveredText] = useState(null);

  // Function to handle mouse enter
  const handleMouseEnter = (text) => {
    document.body.style.cursor = 'pointer';
    setHoveredText(text);
    gsap.to(text.material.color, {
      r: new THREE.Color("#007FFF").r,
      g: new THREE.Color("#007FFF").g,
      b: new THREE.Color("#007FFF").b,
      duration: 0.5
    });
  };

  const handleMouseLeave = (text) => {
    setHoveredText(null);
    document.body.style.cursor = 'default';
    gsap.to(text.material.color, {
      r: new THREE.Color("#010100").r,
      g: new THREE.Color("#010100").g,
      b: new THREE.Color("#010100").b,
      duration: 0.5
    });
  };

  const handleMouseEnterBox = (mesh) => {
    document.body.style.cursor = 'pointer';
    gsap.to(mesh.rotation, {
      y: mesh.rotation.y + Math.PI * 2, // 360 degrees
      duration: 2,
      ease: 'power2.inOut'
    });
    gsap.to(mesh.position, {
      y: mesh.position.y + 0.2, // Move upwards
      duration: 1,
      yoyo: true,
      repeat: 1,
      ease: 'power2.inOut'
    });
  };



  // Function to handle mouse leave for the boxGeometry mesh
  const handleMouseLeaveBox = () => {
    document.body.style.cursor = 'default';
  };
  

  return (
      <group position={[0, 0, 1.75]}>
        <Float speed={ 1.5 } rotationIntensity={ 1.5 } >
          <mesh position={ [ 0, 0.15, 0 ] } scale={0.1} castShadow receiveShadow onPointerEnter={(e) => handleMouseEnterBox(e.object)} onPointerLeave={handleMouseLeaveBox} >
            <octahedronGeometry args={[5, 0]} />
            <MeshTransmissionMaterial backside backsideThickness={5} thickness={2} />
          </mesh>
        </Float>
        <Text position={[0, -0.49, 0.7]} fontSize={0.15} textAlign="center" lineHeight={1} color="#010100" anchorX="center" anchorY="middle" onPointerEnter={(e) => handleMouseEnter(e.object)} onPointerLeave={(e) => handleMouseLeave(e.object)} >
          STARTUP PLAYGROUND
        </Text>
      </group>
  );
}