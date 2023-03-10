import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Box } from "@react-three/drei";

const Scene = () => {
    const scene = useRef();
    const [hovered, setHovered] = useState(false);
    const [clicked, setClicked] = useState(false);
    useFrame(() => {
        scene.current.rotation.y += 0.05;
        scene.current.rotation.x += 0.05;
        scene.current.rotation.z += 0.05;
    });
    return (
        <group ref={scene}>
            <Box
                args={[1.5, 1.5, 1.5]}
                onClick={() => setClicked(!clicked)}
                scale={clicked ? 1.5 : 1}
                onPointerOver={(e) => setHovered(true)}
                onPointerOut={(e) => setHovered(false)}
            >
                <meshLambertMaterial color={hovered ? "#D9ACF5" : "orange"} />
            </Box>
        </group>
    );
};
export const Box3D = () => {
    return (
        <Canvas>
            <directionalLight intensity={0.5} />
            <Scene />
        </Canvas>
    );
};
