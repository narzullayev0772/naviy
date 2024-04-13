import {Box} from "@mui/joy";
import {useEffect, useRef, useState} from "react";

export function HoverCard({children}) {
    const [degX, setDegX] = useState(0);
    const [degY, setDegY] = useState(0);
    const [xP, setXp] = useState(0);
    const [yP, setYp] = useState(0);
    const ref = useRef(null);

    useEffect(() => {
        const handleMouseMove = (event) => {
            const {left, top, width, height} = ref.current.getBoundingClientRect();
            const x = (left + width / 2 - event.clientX);
            const y = (top + height / 2 - event.clientY);
            setDegX(x / 10);
            setDegY(y / 10);
            const xPercent = Math.round((event.clientX - left) / width * 100);
            const yPercent = Math.round((event.clientY - top) / height * 100);
            setXp(xPercent);
            setYp(yPercent);
        };
        ref.current.addEventListener("mousemove", handleMouseMove);
    }, [ref]);
    return (<Box
        ref={ref}
        sx={{
            background: "transparent", height: "100%", perspective: "1000px", transition: "all 0.3s", "& > div": {
                transition: "inherit",
            }, "&:hover": {
                "& > div": {
                    transform: `rotateX(${degX}deg) rotateY(${degY}deg)`,
                    background: `radial-gradient(circle at ${xP}% ${yP}%,#0088cc60,transparent 80%)`,
                },
            },
        }}
    >
        {children}
    </Box>);
}
