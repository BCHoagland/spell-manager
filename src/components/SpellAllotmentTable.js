import React from 'react';


function getAllotmentRow(level, allotment) {
    if (allotment[0] === 0 && allotment[1] === 0) {
        return null;
    } else {
        let canCast;
        let slots;
        if (allotment[0] === 0) {
            canCast = 0;
            slots = allotment[1];
        } else {
            canCast = allotment[0] + allotment[1];
            slots = allotment[0] + allotment[1];
        }
        return (
            <tr key={level}>
                <td>{level}</td>
                <td>{canCast}</td>
                <td>{slots}</td>
            </tr>
        )
    }
}

function SpellAllotmentTable(props) {
    const levels = Object.keys(props.allotment);
    return (
        <div className='table'>
            <h1>Spell Allotment</h1>
            <table>
                <thead>
                    <tr>
                        <td>Level</td>
                        <td>Can Cast</td>
                        <td>Slots</td>
                    </tr>
                </thead>
                <tbody>
                    {levels.map(level => getAllotmentRow(level, props.allotment[level]))}
                </tbody>
            </table>
        </div>
    )
}

export default SpellAllotmentTable;
