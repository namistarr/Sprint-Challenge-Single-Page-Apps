import React from 'react';


export default function LocationCard ({location}) {
  // image={image}
  return (
    <div>
      <h2>{location.name}</h2>
      <h3>{location.type}</h3>
      <h3>{location.dimension}</h3>
      <p># Residents: {location.residents.length}</p>
    </div>
  )
}
