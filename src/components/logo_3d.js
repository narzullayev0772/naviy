import {Canvas, useFrame} from '@react-three/fiber'
import {useRef, useState} from "react";
import {motion} from "framer-motion"

export const Logo3d = () => {
    const [animate, setAnimate] = useState(false);
    return <Canvas
        onClick={() => setAnimate(true)}
    >
        <ambientLight intensity={Math.PI / 2}/>
        <spotLight position={[10, 10, 10]} penumbra={1} decay={0} intensity={Math.PI}/>
        <pointLight intensity={Math.PI / 2}/>
        <Box
            position={[-0.5, 0, 1]} color={"blue"}
            rotation={[3 * Math.PI / 4, Math.PI / 4, 0]}
            animate={animate}
        />
        <Box
            position={[0.5, 0.6, 1]} color={"red"}
            rotation={[Math.PI / 4, Math.PI / 4, 0]}
            animate={animate}
        />
    </Canvas>;
}

function Box(props) {
    const [hover, setHover] = useState(false);

    const ref = useRef();
    useFrame((state, delta, _) => {
        if (ref.current) {
            ref.current.rotation.y += delta;
        }
    });
    return (<mesh
        {...props}
        ref={hover ? ref : null}
        onPointerEnter={(e) => {
            e.stopPropagation();
            setHover(true)
        }}
        onPointerOut={(e) => {
            e.stopPropagation();
            setHover(false);
            ref.current.rotation.y = Math.PI / 4;
        }}
    >
        <tetrahedronGeometry/>
        <meshStandardMaterial color={props.color}/>
    </mesh>)
}


const icon = {
    hidden: {
        opacity: 0,
        pathLength: 0,
        fill: "rgba(255, 255, 255, 0)"
    },
    visible: {
        opacity: 1,
        pathLength: 1,
        fill: "rgba(255, 255, 255, 1)"
    }
};

export const Example = () => (
    <div className="container">
        <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            className="item"
        >
            <motion.path
                d="M0 100V0l50 50 50-50v100L75 75l-25 25-25-25z"
                variants={icon}
                initial="hidden"
                animate="visible"
                transition={{
                    default: {duration: 2, ease: "easeInOut"},
                    fill: {duration: 2, ease: [1, 0, 0.8, 1]}
                }}
            />
        </motion.svg>
    </div>
);

