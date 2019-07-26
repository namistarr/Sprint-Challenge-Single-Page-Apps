import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LocationCard from './LocationCard';
import styled from 'styled-components';

const LocationList = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
`
export default function LocationsList() {

    const [locations, setLocations] = useState([]);

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/location`)
        
        .then(response => {
            setLocations(response.data.results);
        })
        .catch(error => {
            console.log('error', error);
        })
    }, [])

    return (
        <LocationList>
            {locations.map((location, index) => <LocationCard location={location} key={index} />)}
        </LocationList>
    )
}
