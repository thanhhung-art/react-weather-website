import React from 'react';
import styled from "styled-components";

const Des = {
    Container: styled.div`
        border: 1px solid #fff;
        padding: 1rem;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        align-items: center;
        width: 100%;
        gap: .5rem;

        @media (max-width: 768px){
            justify-content: center;
            gap: 1rem;
        }
    `,
    ItemWrap: styled.div`
        flex-basis: 30%;

        @media (max-width: 768px){
            flex-basis: 42%;
        }
    `,
    Title: styled.p`
        font-size: 1.2rem;
        color: #fff;
        text-align: center;
    `,
    Info: styled.p`
        font-size: 1rem;
        text-align: center;
        margin-top: .5rem;
    `
}



function Descriptions(props) {
    return (
        <Des.Container>
            <Des.ItemWrap>
                <Des.Title>hight</Des.Title>
                <Des.Info>{props.hight}&#8451;</Des.Info>
            </Des.ItemWrap>
            <Des.ItemWrap>
                <Des.Title>wind speed</Des.Title>
                <Des.Info>{props.wind + "m/s"}</Des.Info>
            </Des.ItemWrap>
            <Des.ItemWrap>
                <Des.Title>clouds</Des.Title>
                <Des.Info>{props.clouds + "%"}</Des.Info>
            </Des.ItemWrap>
            <Des.ItemWrap>
                <Des.Title>low</Des.Title>
                <Des.Info>{props.low}&#8451;</Des.Info>
            </Des.ItemWrap>
            <Des.ItemWrap>
                <Des.Title>sunrise</Des.Title>
                <Des.Info>{convertTime(props.sunrise)}</Des.Info>
            </Des.ItemWrap>
            <Des.ItemWrap>
                <Des.Title>sunset</Des.Title>
                <Des.Info>{convertTime(props.sunset)}</Des.Info>
            </Des.ItemWrap>
        </Des.Container>
    )
}

export default Descriptions;

function convertTime (time) {
    let date = new Date( time * 1000);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    if (minutes < 10){
        minutes = "0" + minutes;
    }

    return `${hours} : ${minutes}`;
}