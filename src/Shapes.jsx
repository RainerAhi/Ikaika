import React, { useState } from "react";
import { useGLTF, Text, Text3D, Center, Float, MeshTransmissionMaterial, Html } from "@react-three/drei";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from 'three';

export default function Shapes({ showOverlayOne, setShowOverlayOne, showOverlayTwo, setShowOverlayTwo, showOverlayThree, setShowOverlayThree, showOverlayFour, setShowOverlayFour, showOverlayFive, setShowOverlayFive, showOverlaySix, setShowOverlaySix }) {
  const { camera, scene } = useThree();
  const [hoveredText, setHoveredText] = useState("     IKAIKA      ");

  const handleMouseEnter = (mesh, text) => {
      document.body.style.cursor = 'pointer';
      gsap.to(mesh.rotation, {
        y: mesh.rotation.y + Math.PI * 2, // 360 degrees
        duration: 2,
        ease: 'power2.inOut'
      });
      setHoveredText(text);
  };

  const handleMouseLeave = () => {
    document.body.style.cursor = 'default';
  };

  const overlayOne = () => {
    setShowOverlayOne(!showOverlayOne);
  };

  const overlayTwo = () => {
    setShowOverlayTwo(!showOverlayTwo);
  };

  const overlayThree = () => {
    setShowOverlayThree(!showOverlayThree);
  };

  const overlayFour = () => {
    setShowOverlayFour(!showOverlayFour);
  };

  const overlayFive = () => {
    setShowOverlayFive(!showOverlayFive);
  };

  const overlaySix = () => {
    setShowOverlaySix(!showOverlaySix);
  };
  

  return (
    <>
      <Center position={ [ 0, 0, -1 ] } >
        <Text3D
          smooth={1}
          scale={0.02}
          size={80}
          height={1}
          curveSegments={10}
          bevelThickness={10}
          bevelSize={2}
          bevelOffset={0}
          bevelSegments={5}
          font="/Inter_Bold.json"
        >
          {hoveredText}
          <meshStandardMaterial color={"#010100"} />
        </Text3D>
      </Center>

      {/* <Text position={ [ 0, 0, -1 ] } color={ "black" } fontSize={ 2 } >
        {hoveredText}
      </Text> */}
      
      <group position={[-2.5, 1.15, 0]}>
        <Float speed={ 1.5 } rotationIntensity={ 1.5 } >
          <mesh onClick={overlayOne} scale={ 2 } position={[0, 0.15, 0]} onPointerEnter={(e) => handleMouseEnter(e.object, "     ABOUT     ")} onPointerLeave={handleMouseLeave}>
            <boxGeometry args={[0.75, 0.75, 0.75]} />
            <MeshTransmissionMaterial transmissionSampler={ true } color={ "#8DC0FF" } thickness={2} />
          </mesh>
        </Float>
      </group>

      <group position={[0, 1.15, 0]}>
        <Float speed={ 1.5 } rotationIntensity={ 1.5 } >
          <mesh onClick={overlayTwo} scale={ 2 } position={[0, 0.15, 0]} onPointerEnter={(e) => handleMouseEnter(e.object, "AS SEEN IN")} onPointerLeave={handleMouseLeave}>
            <sphereGeometry args={[0.5, 22, 50]} />
            <MeshTransmissionMaterial transmissionSampler={ true } color={ "#007FFF" } thickness={2} />
          </mesh>
        </Float>
      </group>

      <group position={[2.5, 1.15, 0]}>
        <Float speed={ 1.5 } rotationIntensity={ 1.5 } >
          <mesh onClick={overlayThree} scale={ 0.2 } position={[0, 0, 0]} onPointerEnter={(e) => handleMouseEnter(e.object, "ADVISORY")} onPointerLeave={handleMouseLeave}>
            <torusGeometry args={[3, 1.5, 16, 100]} />
            <MeshTransmissionMaterial transmissionSampler={ true } color={ "#8DC0FF" } thickness={2} />
          </mesh>
        </Float>
      </group>

      <group position={[-2.5, -1.15, 0]}>
        <Float speed={ 1.5 } rotationIntensity={ 1.5 } >
          <mesh onClick={overlayFour} scale={ 0.2 } position={[0, 0, 0]} onPointerEnter={(e) => handleMouseEnter(e.object, "RESOURCE")} onPointerLeave={handleMouseLeave}>
            <torusKnotGeometry args={[3, 1, 100, 16]} />
            <MeshTransmissionMaterial transmissionSampler={ true } color={ "#007FFF" } thickness={2} />
          </mesh>
        </Float>
      </group>

      <group position={[0, -1.15, 0]}>
        <Float speed={ 1.5 } rotationIntensity={ 1.5 } >
          <mesh onClick={overlayFive} scale={ 0.2 } position={[0, 0, 0]} onPointerEnter={(e) => handleMouseEnter(e.object, "STARTUPS")} onPointerLeave={handleMouseLeave}>
            <octahedronGeometry args={[5, 0]} />
            <MeshTransmissionMaterial transmissionSampler={ true } color={ "#8DC0FF" } thickness={2} />
          </mesh>
        </Float>
      </group>

      <group position={[2.5, -1.15, 0]}>
        <Float speed={ 1.5 } rotationIntensity={ 1.5 } >
          <mesh onClick={overlaySix} scale={ 0.2 } position={[0, 0, 0]} rotation={ [ 0, 0, Math.PI * 1 ] } onPointerEnter={(e) => handleMouseEnter(e.object, "CONTACTS")} onPointerLeave={handleMouseLeave}>
            <coneGeometry args={[5, 7.5, 10]} />
            <MeshTransmissionMaterial transmissionSampler={ true } color={ "#007FFF" } thickness={2} />
          </mesh>
        </Float>
      </group>
    </>
  );
}
