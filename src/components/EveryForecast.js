import React from 'react';
import styled from 'styled-components';

const Card = {
    Container: styled.div`
        background-color: rgba(0,0,0,0.2);
        padding: 1rem;
        min-width: 77px;
        text-align: center;
        border-radius: .4rem;
    `,
    Time: styled.section`
    `,
    Temp: styled.h3`
        font-size: 1.3rem;
        margin: 1rem 0;
        font-weight: 400;
    `,
    Symbol: styled.span`
        font-size: .9em;
    `,
    Icon: styled.i`
        font-size: 2rem;
    `
}

function EveryForecast(props) {

    const handleIcon = (e) => {
        const icons = ["cloud","cloud-showers-heavy","cloud-sun","cloud-rain"];
        switch (e) {
          case "clear sky":
            return icons[2];
          case "light rain":
            return icons[1];
          case "broken clouds":
            return icons[0];
          default: 
            return icons[0];
        }
      }

    return (
        <Card.Container>
            <Card.Time>
                {props.time}
            </Card.Time>
            <Card.Temp>
                {Math.round(props.content)}<Card.Symbol>&#8451;</Card.Symbol>
            </Card.Temp>
            <Card.Icon className={`fas fa-${handleIcon(props.icon)}`}/>
        </Card.Container>
    )
}

export default EveryForecast;
