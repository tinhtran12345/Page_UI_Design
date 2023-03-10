import React from "react";
import styled from "styled-components";
import { Navbar } from "./Navbar";
import LineImg from "../assets/line.png";
import MoonImg from "../assets/moon.png";

const Section = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    scroll-snap-align: center;
    justify-content: space-between;
    @media only screen and (max-width: 768px) {
        height: 200vh;
    }
`;

const Container = styled.div`
    height: 100%;
    width: 1400px;
    display: flex;
    justify-content: space-between;
    @media only screen and (max-width: 768px) {
        width: 100%;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;
const Left = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    @media only screen and (max-width: 768px) {
        flex: 1;
        align-items: center;
    }
`;
const Right = styled.div`
    flex: 3;
    position: relative;
    @media only screen and (max-width: 768px) {
        flex: 1;
        width: 100%;
    }
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
const Img = styled.img`
    width: 800px;
    height: 600px;
    object-fit: contain;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    animation: animate 1s infinite ease alternate;
    @media only screen and (max-width: 768px) {
        width: 300px;
        height: 300px;
    }
    @keyframes animate {
        to {
            transform: translateY(40px);
        }
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

export const Hero = () => {
    return (
        <Section>
            <Navbar />
            <Container>
                <Left>
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
                </Left>
                <Right>
                    <Img src={MoonImg} />
                </Right>
            </Container>
        </Section>
    );
};
