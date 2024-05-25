import CustomEffects from "./Effects";
import Experience from "./Experience";
import { Canvas, useFrame } from '@react-three/fiber'

export default function CanvasContainer({ showOtherDiv, setShowOtherDiv }) {

    return (
        <>
         <Canvas shadows camera={{ position: [0, 0, 1], fov: 35 }} >
            <Experience showOtherDiv={showOtherDiv} setShowOtherDiv={setShowOtherDiv} />
            <CustomEffects />
         </Canvas>
        </>
    )
}