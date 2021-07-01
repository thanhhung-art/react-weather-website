import React from 'react';
import styled, { keyframes } from "styled-components";

const show = keyframes`
    from {
        opacity: 0;
        transform: translateY(50px);
    }

    to {
        opacity; 1;
        transform: translateY(0);
    }
`;

const Component = {
    Container: styled.div`
        height: 30rem;
        animation: ${show} 1s linear;
    `,
    Error: styled.h1`
        font-size: 5rem;
        text-align: center;
    `,
    Des: styled.p`
        text-align: center;
        font-size: 1.5rem;
        margin-top: 2rem;
        color: rgba(0,0,0,.6);
    `
}

function NotFound() {
    return (
        <Component.Container>
            <Component.Error>
                Not Found
            </Component.Error>
            <Component.Des>
                try to add or delete space between the word
            </Component.Des>
        </Component.Container>
    )
}

export default NotFound;
