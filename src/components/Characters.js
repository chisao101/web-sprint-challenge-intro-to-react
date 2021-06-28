import React from 'react' 
import Character from './Character'
import styled from 'styled-components'

const Characters = (props) => {
    // const { name, birthYear } = props
    console.log(props) 

    const Section = styled.section`
        background-color: #fff;
        border-radius: 5px;
        margin: 0 auto;
        padding: 2rem;
        width: 80%;
    `;


    return(
        <Section>
            {
                props.characters.map((character, index) => (
                    <Character character={character} />
                ))
            }
        </Section>
    )
}

export default Characters