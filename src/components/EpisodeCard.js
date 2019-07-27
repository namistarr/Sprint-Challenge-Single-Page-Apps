import React from 'react';
import styled from 'styled-components';

 const Episode = styled.div`
  border: 1px solid grey;
  width: 360px;
  border-radius: 8px;  
  padding-top: 10px;
  padding-bottom: 10px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

 export default function EpisodeCard({episode}) {
    return (
        <Episode>
            <h1>{episode.name}</h1>
            <h3>Episode: {episode.episode}</h3>
            <h3>Air Date: {episode.air_date}</h3>            
        </Episode>
    )
}