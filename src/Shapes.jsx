import React, { useState } from "react";
import { Html, useGLTF, Text, Text3D, Center, Float } from "@react-three/drei";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from 'three';

export default function Shapes() {
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
    gsap.to(mesh.material.color, { // Change material color
      r: new THREE.Color("#007FFF").r,
      g: new THREE.Color("#007FFF").g,
      b: new THREE.Color("#007FFF").b,
      duration: 0.5
    });
  };

  
  const handleMouseEnterCircle = (mesh) => {
    document.body.style.cursor = 'pointer';
    gsap.to(mesh.rotation, {
      z: mesh.rotation.z + Math.PI * 2, // 360 degrees
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
    <>
      <Center position={ [ 0, -0.25, 0 ] } >
        <Text3D
          rotation={[Math.PI / -2, 0, 0]}
          smooth={1}
          scale={0.01}
          size={80}
          height={40}
          curveSegments={10}
          bevelThickness={10}
          bevelSize={2}
          bevelOffset={0}
          bevelSegments={5}
          font="/Inter_Bold.json"
        >
          IKAIKA
          <meshStandardMaterial color={"#010100"} />
        </Text3D>
      </Center>
      
      <group position={[-2.25, 0, -1.75]}>
        <Float speed={ 1.5 } rotationIntensity={ 1.5 } >
          <mesh position={[0, 0.15, 0]} castShadow receiveShadow onPointerEnter={(e) => handleMouseEnterBox(e.object)} onPointerLeave={handleMouseLeaveBox} >
            <boxGeometry args={[0.75, 0.75, 0.75]} />
            <meshStandardMaterial color="#2A8AFF" />
          </mesh>
        </Float>
        <Text position={[0, -0.49, 0.7]} fontSize={0.15} rotation={[Math.PI / -2, 0, 0]} textAlign="center" lineHeight={1} color="#010100" anchorX="center" anchorY="middle" onPointerEnter={(e) => handleMouseEnter(e.object)} onPointerLeave={(e) => handleMouseLeave(e.object)} >
          ABOUT
        </Text>
      </group>

      <group position={[0, 0, -1.75]}>
        <Float speed={ 1.5 } rotationIntensity={ 1.5 } >
          <mesh position={ [ 0, 0.15, 0 ] } castShadow receiveShadow onPointerEnter={(e) => handleMouseEnterBox(e.object)} onPointerLeave={handleMouseLeaveBox} >
            <sphereGeometry args={[0.5, 22, 50]} />
            <meshStandardMaterial color="#2A8AFF" />
          </mesh>
        </Float>
        <Text position={[0, -0.49, 0.7]} fontSize={0.15} rotation={[Math.PI / -2, 0, 0]} textAlign="center" lineHeight={1} color="#010100" anchorX="center" anchorY="middle" onPointerEnter={(e) => handleMouseEnter(e.object)} onPointerLeave={(e) => handleMouseLeave(e.object)} >
          INVESTED ALONGSIDE
        </Text>
      </group>

      <group position={[2.25, 0, -1.75]}>
        <Float speed={ 1.5 } rotationIntensity={ 1.5 } >
          <mesh position={ [ 0, 0, 0 ] } rotation={[Math.PI / 2, 0, 0]} scale={0.1} castShadow receiveShadow onPointerEnter={(e) => handleMouseEnterCircle(e.object)} onPointerLeave={handleMouseLeaveBox} >
            <torusGeometry args={[3, 1.5, 16, 100]} />
            <meshStandardMaterial color="#2A8AFF" />
          </mesh>
        </Float>
        <Text position={[0, -0.49, 0.7]} fontSize={0.15} rotation={[Math.PI / -2, 0, 0]} textAlign="center" lineHeight={1} color="#010100" anchorX="center" anchorY="middle" onPointerEnter={(e) => handleMouseEnter(e.object)} onPointerLeave={(e) => handleMouseLeave(e.object)} >
          AS SEEN IN
        </Text>
      </group>

      <group position={[-2.25, 0, 1.75]}>
        <Float speed={ 1.5 } rotationIntensity={ 1.5 } >
          <mesh position={ [ 0, 0, 0 ] } rotation={[Math.PI / 2, 0, 0]} scale={0.1} castShadow receiveShadow onPointerEnter={(e) => handleMouseEnterCircle(e.object)} onPointerLeave={handleMouseLeaveBox} >
            <torusKnotGeometry args={[3, 1, 100, 16]} />
            <meshStandardMaterial color="#2A8AFF" />
          </mesh>
        </Float>
        <Text position={[0, -0.49, 0.7]} fontSize={0.15} rotation={[Math.PI / -2, 0, 0]} textAlign="center" lineHeight={1} color="#010100" anchorX="center" anchorY="middle" onPointerEnter={(e) => handleMouseEnter(e.object)} onPointerLeave={(e) => handleMouseLeave(e.object)} >
          RESOURCES
        </Text>
      </group>

      <group position={[0, 0, 1.75]}>
        <Float speed={ 1.5 } rotationIntensity={ 1.5 } >
          <mesh position={ [ 0, 0.15, 0 ] } scale={0.1} castShadow receiveShadow onPointerEnter={(e) => handleMouseEnterBox(e.object)} onPointerLeave={handleMouseLeaveBox} >
            <octahedronGeometry args={[5, 0]} />
            <meshStandardMaterial color="#2A8AFF" />
          </mesh>
        </Float>
        <Text position={[0, -0.49, 0.7]} fontSize={0.15} rotation={[Math.PI / -2, 0, 0]} textAlign="center" lineHeight={1} color="#010100" anchorX="center" anchorY="middle" onPointerEnter={(e) => handleMouseEnter(e.object)} onPointerLeave={(e) => handleMouseLeave(e.object)} >
          STARTUP PLAYGROUND
        </Text>
      </group>

      <group position={[2.25, 0, 1.75]}>
        <Float speed={ 1.5 } rotationIntensity={ 1.5 } >
          <mesh position={ [ 0, 0.15, 0 ] } scale={0.1} castShadow receiveShadow onPointerEnter={(e) => handleMouseEnterBox(e.object)} onPointerLeave={handleMouseLeaveBox} >
            <coneGeometry args={[5, 7.5, 10]} />
            <meshStandardMaterial color="#2A8AFF" />
          </mesh>
        </Float>
        <Text position={[0, -0.49, 0.7]} fontSize={0.15} rotation={[Math.PI / -2, 0, 0]} textAlign="center" lineHeight={1} color="#010100" anchorX="center" anchorY="middle" onPointerEnter={(e) => handleMouseEnter(e.object)} onPointerLeave={(e) => handleMouseLeave(e.object)} >
          CONTACT
        </Text>
      </group>
    </>
  );
}
