import styled from '@emotion/styled'
import React from 'react'

const Contenedor = styled.div`
    color: #FFF;
    font-family: 'Lato', sans-serif;

    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 30px;
`
const Imagen = styled.img`
    display: block;
    width: 120px;
`

const Texto = styled.p`
    font-size: 18px;
    span {
        font-weight: 700;
    }
`

const Precio = styled.p`
    font-size: 24px;
    span {
        font-weight: 700;
    }
`

const Result = ({result}) => {

    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} = result
  return (
        <Contenedor>
        <Imagen 
            src={`https://cryptocompare.com/${IMAGEURL}`} 
            alt="image crypto" 
        />
        <div>
            <Precio>The Price is: <span>{PRICE}</span></Precio>
            <Texto>Highest price of the day: <span>{HIGHDAY}</span></Texto>
            <Texto>Lowest price of the day: <span>{LOWDAY}</span></Texto>
            <Texto>Variation last 24 hours: <span>{CHANGEPCT24HOUR}</span></Texto>
            <Texto>Last update: <span>{LASTUPDATE}</span></Texto>
        </div>
    </Contenedor>

  )
}

export default Result