import React from 'react';
import styled from 'styled-components';

const Location = styled.div`
border: 1px solid gray;
width: 360px;
border-radius: 8px;
padding-top: 10px;
padding-bottom: 10px;
margin-bottom: 30px;
display: flex;
flex-direction: column;
align-items: center;

`


export default function LocationCard ({location}) {
  // image={image}
  return (
    <Location>
      <h1>{location.name}</h1>
      <h3>Location Type: {location.type}</h3>
      <h3>Dimension: {location.dimension}</h3>
      <p># Residents: {location.residents.length}</p>
    </Location>
  )
}
