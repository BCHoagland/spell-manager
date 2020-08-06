import React from 'react';


function SessionHeader(props) {
    return (
        <div className="header">
            <div id="sessionHeader">
                <p>{props.session}</p>
                <p id="nextSesstionBtn" onClick={props.nextSession}>Next</p>
            </div>
        </div>
    )
}

export default SessionHeader;
