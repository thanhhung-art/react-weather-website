import React from 'react';
import styled from "styled-components";

const Info = {
    Wrapper: styled.div`
        padding: 1rem;
        border: 1px solid #ccc;
        text-align: center;
        display: flex;
        gap: 1rem;
        align-items: center;
        justify-content: center;
    `,
    ColLeft: styled.div``,
    ColRight: styled.div``,
    Temprature : styled.h1`
        font-size: 5rem;
        color: #fff;
    `,
    Description: styled.h2`
        font-size: 1.2rem;
        margin-top: 1rem;
    `,
    Icon: styled.i`
        font-size: 6rem;

        @media (max-width: 768px){
            font-size: 4rem;
        }
    `,
    Symbol: styled.span`
        font-size: .9em;
    `
}

function Temprature(props) {
    return (
        <div className="">
            <Info.Wrapper >
                <Info.ColLeft>
                    <Info.Icon className={`fas fa-${props.icon}`}></Info.Icon>
                    <Info.Description>
                        {props.des}
                    </Info.Description>
                </Info.ColLeft>
                <Info.ColRight>
                    <Info.Temprature>
                        {props.temp}<Info.Symbol>&#8451;</Info.Symbol>
                    </Info.Temprature>
                </Info.ColRight>
            </Info.Wrapper>
        </div>
    )
}

export default Temprature;
