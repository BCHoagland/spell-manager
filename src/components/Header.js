import React from 'react';


function Header(props) {
    return (
        <div className='header'>
            <div id="sessionName">
                <p>{props.session}</p>
                <p id="nextSesstionBtn" onClick={props.nextSession}>Next</p>
            </div>
            <div id="characterInfo">
                <p>{props.name}</p>
                <p><i>{props.characterClass[0].toUpperCase() + props.characterClass.slice(1)}</i></p>
            </div>
        </div>
    )
}

export default Header;
