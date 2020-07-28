import React from 'react';

function Header(props) {
    return (
        <div className='header'>
            <p id="sessionName">{props.session}</p>
                <div id="characterInfo">
                <p>{props.name}</p>
                <p><i>{props.characterClass[0].toUpperCase() + props.characterClass.slice(1)}</i></p>
            </div>
        </div>
    )
}

export default Header;
