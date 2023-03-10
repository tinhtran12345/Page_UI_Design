import React, { useRef } from "react";
import styled from "styled-components";

const Container = styled.div`
    font-size: 80px;
    font-weight: bold;
    @media only screen and (max-width: 768px) {
        display: none;
    }
`;

export const ShowContent = ({ content }) => {
    return <Container>{content}</Container>;
};
