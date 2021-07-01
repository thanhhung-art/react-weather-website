import React from 'react';
import styled from "styled-components";
import EveryForecast from './EveryForecast';

const Forecast = {
    Container: styled.div`
        border: 1px solid #fff;
        overflow-x: scroll;
        display: flex;
        gap: 1rem;
        padding: 1rem;
    `,
}

function ForecastInfo(props) {

    return (
        <Forecast.Container>
            {
                props.lists.map( (el,i) => {
                    return (
                        <EveryForecast 
                            content={el.main.temp}
                            time={el.dt_txt.slice(10,16)}
                            icon={el.weather[0].description}
                            key={i}
                        />
                    )
                })
            }
        </Forecast.Container>
    )
}

export default ForecastInfo;
