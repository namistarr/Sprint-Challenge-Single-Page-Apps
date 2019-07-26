import React from 'react'

export default function CharacterCard ({character}) {
  return (
  <div>
    <img src={character.image} alt={character.name}/>
    <h2>{character.name}</h2>
    <h3>Species:</h3>
    <p>{character.species}</p>
    <h3>Status:</h3>
    <p>{character.status}</p>
    <h3>Location:</h3>
    <p>{character.location}</p>
    <h3>Origin:</h3>
    <p>{character.origin}</p>
  </div>
  )
}
