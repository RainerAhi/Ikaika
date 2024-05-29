import CustomEffects from "./Effects";
import Experience from "./Experience";
import { Canvas, useFrame } from '@react-three/fiber'

export default function CanvasContainer({ showOverlayOne, setShowOverlayOne, showOverlayTwo, setShowOverlayTwo, showOverlayThree, setShowOverlayThree, showOverlayFour, setShowOverlayFour, showOverlayFive, setShowOverlayFive, showOverlaySix, setShowOverlaySix }) {

    return (
        <>
         <Canvas shadows camera={{ position: [0, 0, 7.5], fov: 35 }} >
            <Experience
                showOverlayOne={showOverlayOne} setShowOverlayOne={setShowOverlayOne}
                showOverlayTwo={showOverlayTwo} setShowOverlayTwo={setShowOverlayTwo} 
                showOverlayThree={showOverlayThree} setShowOverlayThree={setShowOverlayThree}
                showOverlayFour={showOverlayFour} setShowOverlayFour={setShowOverlayFour}
                showOverlayFive={showOverlayFive} setShowOverlayFive={setShowOverlayFive}
                showOverlaySix={showOverlaySix} setShowOverlaySix={setShowOverlaySix}
            />
            <CustomEffects />
         </Canvas>
        </>
    )
}