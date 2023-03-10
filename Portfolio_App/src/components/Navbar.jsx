import React from "react";
import styled from "styled-components";
import search from "../assets/search.png";
import LogoImg from "../assets/logo-removebg-preview.png";

const Section = styled.div`
    top: 0;
    position: fixed;
    display: flex;
    justify-content: center;
    @media only screen and (max-width: 768px) {
        width: 100%;
    }
`;

const Container = styled.div`
    width: 1400px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0px;
    @media only screen and (max-width: 768px) {
        width: 100%;
        padding: 10px;
    }
`;

const Links = styled.div`
    display: flex;
    align-items: center;
    gap: 50px;
`;

const Logo = styled.img`
    height: 60px;
`;

const List = styled.ul`
    display: flex;
    gap: 20px;
    list-style: none;
    @media only screen and (max-width: 768px) {
        display: none;
    }
`;

const ListItem = styled.li`
    cursor: pointer;
    padding: 10px 15px;
    &:hover {
        color: #2f58cd;
        transition: linear 0.2s;
        transform: scale(1.1);
    }
`;

const Icons = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;

const Icon = styled.img`
    width: 20px;
    cursor: pointer;
`;

const Button = styled.button`
    width: 100px;
    padding: 10px;
    background-color: #da4ea2;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: 700;
    &:hover {
        transform: scale(1.1);
        transition: ease-in-out 0.2s;
    }
`;

export const Navbar = () => {
    return (
        <Section>
            <Container>
                <Links>
                    <Logo src={LogoImg} />
                    <List>
                        <ListItem>Home</ListItem>
                        <ListItem>Studio</ListItem>
                        <ListItem>Works</ListItem>
                        <ListItem>Contact</ListItem>
                    </List>
                </Links>
                <Icons>
                    <Icon src={search} />
                    <Button>Hire now</Button>
                </Icons>
            </Container>
        </Section>
    );
};
