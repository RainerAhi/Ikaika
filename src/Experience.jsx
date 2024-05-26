import { Suspense, useRef, useState, useLayoutEffect, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Center, AccumulativeShadows, RandomizedLight, OrbitControls, Environment, Lightformer, MeshReflectorMaterial, Sparkles, Float, MeshPortalMaterial, useTexture, useHelper, Stage, SoftShadows, Effects, Shape, ContactShadows } from '@react-three/drei'
import { easing } from 'maath'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useThree } from "@react-three/fiber";
import * as THREE from "three"
import CustomEffects from './Effects'
import { Loading } from './Loading'
import Shapes from './Shapes'
gsap.registerPlugin(ScrollTrigger)

export default function Experience({ showOverlayOne, setShowOverlayOne, showOverlayTwo, setShowOverlayTwo, showOverlayThree, setShowOverlayThree, showOverlayFour, setShowOverlayFour, showOverlayFive, setShowOverlayFive, showOverlaySix, setShowOverlaySix }) {

  const { camera, scene } = useThree()

  const controlsRef = useRef()

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 767);
    };

    // Add event listener to listen for window resize
    window.addEventListener('resize', handleResize);

    // Initial check for mobile device on component mount
    handleResize();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  console.log(isMobile)
  

  return (
    <>
      <color attach="background" args={["#e0e0e0"]} />
      <spotLight position={[20, 20, 10]} penumbra={1} castShadow angle={0.2} />

      {/* <OrbitControls minPolarAngle={Math.PI / -2} maxPolarAngle={Math.PI / 2} enableZoom={ true } enableRotate={ true } enablePan={ true } /> */}
      <Environment preset="city">
        <Lightformer intensity={8} position={[10, 5, 0]} scale={[10, 50, 1]} />
      </Environment>
      <Shapes
        showOverlayOne={showOverlayOne} setShowOverlayOne={setShowOverlayOne}
        showOverlayTwo={showOverlayTwo} setShowOverlayTwo={setShowOverlayTwo} 
        showOverlayThree={showOverlayThree} setShowOverlayThree={setShowOverlayThree}
        showOverlayFour={showOverlayFour} setShowOverlayFour={setShowOverlayFour}
        showOverlayFive={showOverlayFive} setShowOverlayFive={setShowOverlayFive}
        showOverlaySix={showOverlaySix} setShowOverlaySix={setShowOverlaySix}
      />
      <ContactShadows scale={100} position={[0, -4, 0]} blur={1} far={10} opacity={0.7} />
      <Rig />

      </>
  )
}

function Rig() {
  useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [Math.sin(-state.pointer.x) * 5, state.pointer.y * 3.5, 7.5 + Math.cos(state.pointer.x) * 10],
      0.2,
      delta,
    )
    state.camera.lookAt(0, 0, 0)
  })
}