import React, { Suspense } from "react";
import styled from "styled-components";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import LineImg from "../assets/line.png";
import { Cube } from "./Cube";

const Section = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    scroll-snap-align: center;
`;
const Container = styled.div`
    height: 100%;
    width: 1400px;
    display: flex;
    justify-content: space-between;
    scroll-snap-align: center;
`;
const Title = styled.h1`
    font-size: 74px;
    @media only screen and (max-width: 768px) {
        text-align: center;
    }
`;
const WhatWeDo = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;
const Line = styled.img`
    height: 5px;
`;
const Subtitle = styled.h2`
    color: #da4ea2;
`;
const Desc = styled.p`
    font-size: 24px;
    color: lightgray;
    @media only screen and (max-width: 768px) {
        padding: 20px;
        text-align: center;
    }
`;
const Button = styled.button`
    background-color: #da4ea2;
    color: white;
    font-weight: 500;
    width: 100px;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: 700;
    &:hover {
        transform: scale(1.1);
        transition: ease-in-out 0.2s;
    }
`;
const Left = styled.div`
    flex: 1;
    @media only screen and (max-width: 768px) {
        display: none;
    }
`;
const Right = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    @media only screen and (max-width: 768px) {
        align-items: center;
        text-align: center;
    }
`;

export const Who = () => {
    return (
        <Section>
            <Container>
                <Left>
                    <Canvas camera={{ position: [5, 5, 5], fov: 25 }}>
                        <Suspense fallback={null}>
                            <ambientLight intensity={0.5} />
                            <directionalLight position={[3, 2, 1]} />
                            <Cube />
                            <OrbitControls enableZoom={false} autoRotate />
                        </Suspense>
                    </Canvas>
                </Left>
                <Right>
                    <Title>Think. Make. Solve. </Title>
                    <WhatWeDo>
                        <Line src={LineImg} />
                        <Subtitle>What we do</Subtitle>
                    </WhatWeDo>
                    <Desc>
                        We enjoy creating delightful, human-centered digital
                        experiences
                    </Desc>
                    <Button>Learn more</Button>
                </Right>
            </Container>
        </Section>
    );
};
