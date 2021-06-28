// Write your Character component here
import React from 'react'
import styled from 'styled-components'


// building Friend component
const Character = (props) => {
    console.log(props)

    const character = props.character

    const Article = styled.article`
        background-color: skyblue;
        border-radius: 5px;
        margin: .5em;
        padding: .5em 1em;
        text-align: left;
    `;

    return (
        <Article>
            <h3>{character.name}</h3>
            <p>{character.name}'s birth year is {character.birth_year}</p>
            <p>{character.name}'s gender is {character.gender}</p>
            <p>{character.name}'s eye color is {character.eye_color}</p>
        </Article> 
    )
}


export default Character