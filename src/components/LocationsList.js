import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LocationCard from './LocationCard';

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
        <div>
            {locations.map((location, index) => <LocationCard location={location} key={index} />)}
        </div>
    )
}
