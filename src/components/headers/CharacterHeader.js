import React from 'react';


function CharacterHeader(props) {
    return (
        <div className="header">
            <div id='characterHeader'>
                <p>{props.name}</p>
                <p><i>{props.characterClass[0].toUpperCase() + props.characterClass.slice(1)}</i></p>
            </div>
        </div>
    )
}

export default CharacterHeader;
