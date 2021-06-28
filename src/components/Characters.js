import React from 'react' 
import Character from './Character'

const Characters = (props) => {
    // const { name, birthYear } = props
    console.log(props) 


    return(
        <section>
            {
                props.characters.map((character, index) => (
                    <Character character={character} />
                ))
            }
        </section>
    )
}

export default Characters