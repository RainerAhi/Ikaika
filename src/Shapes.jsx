import React, { useState, useMemo, useCallback } from "react";
import { Html, useGLTF, Text3D, Center, Float, MeshTransmissionMaterial } from "@react-three/drei";
import gsap from 'gsap';
import { useThree } from "@react-three/fiber";
import * as THREE from 'three';

const HoverableMesh = React.memo(({ geometry, position, scale, rotation, color, hoverText, handleMouseEnter, handleMouseLeave }) => (
  <Float speed={1.5} rotationIntensity={1.5}>
    <mesh
      scale={scale}
      position={position}
      rotation={rotation}
      onPointerEnter={(e) => handleMouseEnter(e.object, hoverText)}
      onPointerLeave={handleMouseLeave}
    >
      {geometry}
      <MeshTransmissionMaterial color={color} thickness={2} />
    </mesh>
  </Float>
));

export default function Shapes() {
  const { camera, scene } = useThree();
  const [hoveredText, setHoveredText] = useState("IKAIKA");

  const handleMouseEnter = useCallback((mesh, text) => {
    document.body.style.cursor = 'pointer';
    gsap.to(mesh.rotation, {
      y: mesh.rotation.y + Math.PI * 2, // 360 degrees
      duration: 2,
      ease: 'power2.inOut'
    });
    setHoveredText(text);
  }, []);

  const handleMouseLeave = useCallback(() => {
    document.body.style.cursor = 'default';
  }, []);

  const text3DProps = useMemo(() => ({
    smooth: 1,
    scale: 0.02,
    size: 80,
    height: 1,
    curveSegments: 10,
    bevelThickness: 10,
    bevelSize: 2,
    bevelOffset: 0,
    bevelSegments: 5,
    font: "/Inter_Bold.json",
  }), []);

  const meshes = useMemo(() => [
    {
      geometry: <boxGeometry args={[0.75, 0.75, 0.75]} />,
      position: [-2.5, 1.15, 0],
      scale: 2,
      color: "#8DC0FF",
      hoverText: "ABOU1"
    },
    {
      geometry: <sphereGeometry args={[0.5, 22, 50]} />,
      position: [0, 1.15, 0],
      scale: 2,
      color: "#007FFF",
      hoverText: "ABOU2"
    },
    {
      geometry: <torusGeometry args={[3, 1.5, 16, 100]} />,
      position: [2.5, 1.15, 0],
      scale: 0.2,
      color: "#8DC0FF",
      hoverText: "ABOU3"
    },
    {
      geometry: <torusKnotGeometry args={[3, 1, 100, 16]} />,
      position: [-2.5, -1.15, 0],
      scale: 0.2,
      color: "#007FFF",
      hoverText: "ABOU4"
    },
    {
      geometry: <octahedronGeometry args={[5, 0]} />,
      position: [0, -1.15, 0],
      scale: 0.2,
      color: "#8DC0FF",
      hoverText: "ABOU5"
    },
    {
      geometry: <coneGeometry args={[5, 7.5, 10]} />,
      position: [2.5, -1.15, 0],
      scale: 0.2,
      color: "#007FFF",
      hoverText: "ABOU6",
      rotation: [0, 0, Math.PI * 1]
    }
  ], []);

  return (
    <>
      <Center position={[0, 0, -1]}>
        <Text3D {...text3DProps}>
          {hoveredText}
          <meshStandardMaterial color={"#010100"} />
        </Text3D>
      </Center>

      {meshes.map((meshProps, index) => (
        <group key={index} position={meshProps.position}>
          <HoverableMesh
            geometry={meshProps.geometry}
            position={[0, 0.15, 0]}
            scale={meshProps.scale}
            rotation={meshProps.rotation}
            color={meshProps.color}
            hoverText={meshProps.hoverText}
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
          />
        </group>
      ))}
    </>
  );
}

