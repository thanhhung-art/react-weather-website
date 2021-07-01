import React from 'react';
import styled from 'styled-components';

const Info = {
    Container: styled.div`
        border: 1px solid #fff;
        padding: 1rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: .5rem;
    `,
    City: styled.h2`
        color: #fff;
        font-size: 1.8rem;

    `,
    Date: styled.h3`
        font-size: 1.4rem;
    `
}

function NameCity(props) {
    return (
        <Info.Container>
            <Info.City>
                {`${props.city} , ${props.country}`}
            </Info.City>
            <Info.Date>
                {getTime(props.date)}
            </Info.Date>
        </Info.Container>
    )
}

export default NameCity;

function getTime (time) {
    let objTime = new Date( time * 1000);
    let day = objTime.getDay();
    let date = objTime.getDate();
    let month = objTime.getMonth()+1;
    let year = objTime.getFullYear();

    switch(day){
        case 0: 
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2: 
            day = "Tuesday";
            break;
        case 3: 
            day = "Wednesday";
            break;
        case 4: 
            day = "Thursday";
            break;
        case 5: 
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
        default: 
            day = "Sunday";
    }

    return `${day} ${date}-${month}-${year}`;
}
