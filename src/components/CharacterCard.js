import React from 'react'
import styled from 'styled-components';

const Characters = styled.div`
border: 1px solid gray;
border-radius: 8px;
margin-bottom: 30px;
display: flex;
flex-direction: column;
align-items: center;
padding: 20px;

`
const CharacterPic = styled.img`
width: 300px;
border-radius: 50%;
`
const Name = styled.h1`
max-width: 300px;

`



export default function CharacterCard ({character}) {
  return (
  <Characters>
    <CharacterPic src={character.image} alt={character.name}/>
    <Name>{character.name}</Name>
    <h3>Species:</h3>
    <p>{character.species}</p>
    <h3>Status:</h3>
    <p>{character.status}</p>
    <h3>Location:</h3>
    <p>{character.location.name}</p>
    <h3>Origin:</h3>
    <p>{character.origin.name}</p>
    {console.log(character)}
  </Characters>
  )
}
