import {Canvas, useFrame} from '@react-three/fiber'
import {useRef, useState} from "react";
import * as THREE from "three";
import {CameraControls, Float, Stars, Trail} from "@react-three/drei";

export const Logo3d = () => {
    const [start] = useState(true);
    return <Canvas
        title={"3D Logo: Use mouse to animate the logo"}
    >
        <ambientLight intensity={Math.PI / 2}/>
        <spotLight position={[10, 10, 10]} penumbra={1} decay={0} intensity={Math.PI}/>
        <pointLight intensity={Math.PI / 2}/>
        <Float speed={4} rotationIntensity={start ? 1 : 0} floatIntensity={start ? 2 : 0}>
            <Atom start={start}/>
        </Float>
        <Stars saturation={1} count={start ? 500 : 0} speed={0.5}/>
        <CameraControls/>
    </Canvas>;
}

function Box(props) {
    return (<mesh
        {...props}
    >
        <tetrahedronGeometry/>
        <meshStandardMaterial color={props.color}/>
    </mesh>)
}

function Electron({radius = 3, speed = 3, ...props}) {
    const ref = useRef()
    useFrame((state) => {
        if (props.start) {
            const t = state.clock.getElapsedTime() * speed
            ref.current.position.set(Math.sin(t) * radius, (Math.cos(t) * radius * Math.atan(t)) / Math.PI / 1.25, 0)
        }
    })
    return (<group {...props}>
        <Trail local width={1} length={2} color={new THREE.Color(2, 1, 10)} attenuation={(t) => t * t * t}>
            <mesh ref={ref}>
                <meshBasicMaterial color={[10, 1, 10]} toneMapped={false}/>
            </mesh>
        </Trail>
    </group>)
}

function Atom(props) {
    return (<group {...props}>
        <Electron {...props} position={[0, 0, 0.5]} speed={3}/>
        <Electron {...props} position={[0, 0, 0.5]} rotation={[0, 0, Math.PI / 3]} speed={3.5}/>
        <Electron {...props} position={[0, 0, 0.5]} rotation={[0, 0, -Math.PI / 3]} speed={4}/>
        <Box
            {...props}
            position={[-0.5, 0, 1]} color={"blue"}
            rotation={[3 * Math.PI / 4, Math.PI / 4, 0]}
        />
        <Box
            {...props}
            position={[0.5, 0.6, 1]} color={"red"}
            rotation={[Math.PI / 4, Math.PI / 4, 0]}
        />
    </group>)
}
