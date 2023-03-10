import React, { useRef, useState } from "react";
import styled from "styled-components";
// import { Map } from "./Map";
import emailjs from "@emailjs/browser";
import { Box3D } from "./Box3D";

const Section = styled.div`
    margin-top: 100px;
    height: 100vh;
    scroll-snap-align: center;
`;
const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    gap: 50px;
`;
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    @media only screen and (max-width: 768px) {
        justify-content: center;
    }
`;
const Right = styled.div`
    flex: 1;
    @media only screen and (max-width: 768px) {
        display: none;
    }
`;
const Title = styled.h1`
    font-weight: 200;
`;
const Form = styled.form`
    margin-top: 80px;
    width: 500px;
    display: flex;
    flex-direction: column;
    gap: 25px;
    @media only screen and (max-width: 768px) {
        width: 300px;
    }
`;
const Input = styled.input`
    padding: 20px;
    background-color: #e8e6e6;
    border: none;
    border-radius: 5px;
`;
const TextArea = styled.textarea`
    padding: 20px;
    border: none;
    border-radius: 5px;
    background-color: #e8e6e6;
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

export const Contact = () => {
    const ref = useRef();
    const [success, setSuccess] = useState(null);
    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                "service_wcnyqea",
                "template_xmd1bet",
                ref.current,
                "g2yIuJN0X6uwLR4Gr"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    setSuccess(true);
                },
                (error) => {
                    console.log(error.text);
                    setSuccess(false);
                }
            );
    };
    return (
        <Section>
            <Container>
                <Left>
                    <Form ref={ref} onSubmit={handleSubmit}>
                        <Title>Contact us</Title>
                        <Input placeholder="Name" name="name" />
                        <Input placeholder="Email" name="email" />
                        <TextArea
                            placeholder="Write your message"
                            name="message"
                            rows={10}
                        />
                        <Button type="submit">Send</Button>
                        {success && (
                            <p>
                                Your message has been sent. We'll get back to
                                you soon.
                            </p>
                        )}
                    </Form>
                </Left>
                <Right>
                    <Box3D />
                </Right>
            </Container>
        </Section>
    );
};
