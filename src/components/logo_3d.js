import {Canvas, useFrame} from '@react-three/fiber'
import {useRef, useState} from "react";
import * as THREE from "three";
import {Trail} from "@react-three/drei";

export const Logo3d = () => {
    const [point, setPoint] = useState({x: 0, y: 0});
    return <Canvas
        onClick={(event) => {
            event.stopPropagation();
            setPoint({
                x: event.clientX, y: event.clientY
            });
        }}
    >
        <ambientLight intensity={Math.PI / 2}/>
        <spotLight position={[10, 10, 10]} penumbra={1} decay={0} intensity={Math.PI}/>
        <pointLight intensity={Math.PI / 2}/>
        <Box
            position={[-0.5, 0, 1]} color={"blue"}
            rotation={[3 * Math.PI / 4, Math.PI / 4, 0]}
            point={point}
        />
        <Box
            position={[0.5, 0.6, 1]} color={"red"}
            rotation={[Math.PI / 4, Math.PI / 4, 0]}
            point={point}
        />
        <Electron position={[0, 0, 0]} rotation={[0, 0, 0]} speed={6}/>
        <Electron position={[0, 0, 0.5]} rotation={[0, Math.PI / 3, 0]} speed={6}/>
        <Electron position={[0, 0, 0.5]} rotation={[0, -Math.PI / 3, 0]} speed={6}/>
    </Canvas>;
}

function Box(props) {
    useFrame((state, delta, frame) => {
        ref.current.rotation.x += 0.025;
    });

    const ref = useRef();
    const [hovered, setHovered] = useState(false);
    return (<mesh
        {...props}
        ref={ref}
        scale={hovered ? 1.2 : 1}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
    >
        <tetrahedronGeometry/>
        <meshStandardMaterial color={props.color}/>
    </mesh>)
}

function Electron({radius = 3, speed = 6, ...props}) {
    const ref = useRef()
    useFrame((state) => {
        const t = state.clock.getElapsedTime() * speed
        ref.current.position.set(Math.sin(t) * radius, (Math.cos(t) * radius * Math.atan(t)) / Math.PI, 0)
    });
    return (<group        {...props}    >
        <Trail local width={1} length={7} color={new THREE.Color(2, 1, 10)} attenuation={(t) => t * t}>
            <mesh ref={ref}>
                <meshBasicMaterial color={[10, 1, 10]} toneMapped={false}/>
            </mesh>
        </Trail>
    </group>)
}


