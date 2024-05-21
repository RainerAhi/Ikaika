import React, { useRef, useState } from "react";
import { Html, useGLTF, Text, Text3D, Center } from "@react-three/drei";
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useThree } from "@react-three/fiber";

export default function Shapes() {

  const { camera, scene } = useThree()

  return (
    <>

      <Center>
        <Text3D position={ [ 0, -1, 0 ] } rotation={ [ Math.PI / -2, 0, 0 ] } letterSpacing={0} size={0.5} font="/Inter_Bold.json"  >
          Ikaika
          <meshStandardMaterial color={ "black" } />
        </Text3D>
      </Center>

      <group position={ [ -1.15, 0, -2 ] } >
        <mesh castShadow receiveShadow >
          <boxGeometry args={ [ 0.75, 0.75, 0.75 ] } />
          <meshStandardMaterial color={ "#007FFF" } />
        </mesh>
        <Text position={ [ 0, -0.49, 0.35 ] } fontSize={ 0.25 } rotation={ [ Math.PI / -2, 0, 0 ] } color="black" anchorX="center" anchorY="middle">
          ABOUT
        </Text>
      </group>
      
      <group position={ [ 1.15, 0, -2 ] } >
        <mesh castShadow receiveShadow >
          <sphereGeometry args={ [ 0.5, 22, 50 ] } />
          <meshStandardMaterial color={ "#007FFF" } />
        </mesh>
        <Text position={ [ 0, -0.49, 0.75 ] } fontSize={ 0.25 } rotation={ [ Math.PI / -2, 0, 0 ] } textAlign="center" lineHeight={ 1 } color="black" anchorX="center" anchorY="middle">
        {`INVESTED\nALONGSIDE`}
        </Text>
      </group>

      <group position={ [ -2.5, 0, 0 ] } >
        <mesh scale={ 0.1 } castShadow receiveShadow >
          <torusGeometry args={ [ 3, 1.5, 16, 100] } />
          <meshStandardMaterial color={ "#007FFF" } />
        </mesh>
        <Text position={ [ 0, -0.49, 0.35 ] } fontSize={ 0.25 } rotation={ [ Math.PI / -2, 0, 0 ] } color="black" anchorX="center" anchorY="middle">
          AS SEEN IN
        </Text>
      </group>

      <group position={ [ 2.5, 0, 0 ] } >
        <mesh scale={ 0.1 } castShadow receiveShadow >
          <torusKnotGeometry args={ [ 3, 1, 100, 16] } />
          <meshStandardMaterial color={ "#007FFF" } />
        </mesh>
        <Text position={ [ 0, -0.49, 0.35 ] } fontSize={ 0.25 } rotation={ [ Math.PI / -2, 0, 0 ] } color="black" anchorX="center" anchorY="middle">
          RESOURCES
        </Text>
      </group>

      <group position={ [ 1.15, 0, 2 ] } >
        <mesh scale={ 0.1 } castShadow receiveShadow >
          <octahedronGeometry args={ [ 5, 0] } />
          <meshStandardMaterial color={ "#007FFF" } />
        </mesh>
        <Text position={ [ 0, -0.49, 0.75 ] } fontSize={ 0.25 } rotation={ [ Math.PI / -2, 0, 0 ] } textAlign="center" lineHeight={ 1 } color="black" anchorX="center" anchorY="middle">
        {`STARTUP\nPLAYGROUND`}
        </Text>
      </group>

      <group position={ [ -1.15, 0, 2 ] } >
        <mesh scale={ 0.1 } castShadow receiveShadow >
          <coneGeometry args={ [5, 10, 5] } />
          <meshStandardMaterial color={ "#007FFF" } />
        </mesh>
        <Text position={ [ 0, -0.49, 0.35 ] } fontSize={ 0.25 } rotation={ [ Math.PI / -2, 0, 0 ] } color="black" anchorX="center" anchorY="middle">
          CONTACT
        </Text>
      </group>
    </>
  );
}