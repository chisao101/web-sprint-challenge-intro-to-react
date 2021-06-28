// Write your Character component here
import React from 'react'
import styled from 'styled-components'


// building Friend component
const Character = (props) => {
    console.log(props)

    const character = props.character

    const Section = styled.section`
        background-color: skyblue;
        border-radius: 5px;
        margin: .5em;
        padding: .5em 1em;
    `;

    return (
        <Section >
            <h3>Character name: {character.name}</h3>
            <p>{character.name}'s birth year is {character.birth_year}</p>
        </Section> 
    )
}


export default Character