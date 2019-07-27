import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EpisodeCard from './EpisodeCard';
import styled from 'styled-components';

const EpisodeContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
`

export default function EpisodeList() {
    const [episode, setEpisode] = useState([]);

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/episode/`)

        .then(response => {
            setEpisode(response.data.results);
        })
        .catch(error => {
            console.log('error', error);
        })
    }, [])

    return (
        <EpisodeContainer>
            {episode.map((episode, index) => <EpisodeCard episode={episode} key={index} />)}
        </EpisodeContainer>
    )
}