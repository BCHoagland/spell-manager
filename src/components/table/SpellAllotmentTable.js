import React from 'react';


function getAllotmentRow(level, profile) {
    const allotment = profile.spellAllotment[level];
    const sum = allotment.reduce((total, num) => total + num, 0);

    // if all zeros, don't bother showing a row in the table for this zero
    if (sum === 0) {
        return null;
    } else {
        // calculate how many spells can be cast/how many total spell slots we have for this level
        const canCast = (allotment[0] === 0) ? 0 : sum;
        const slots = sum;

        // put the info in a table row
        return (
            <tr key={level}>
                <td>{level}</td>
                {(allotment[2] > 0) ? <td>{canCast} ({sum - allotment[2]} + {allotment[2]} {profile.school})</td> : <td>{canCast}</td>}
                <td>{slots}</td>
            </tr>
        )
    }
}

function SpellAllotmentTable(props) {
    const levels = Object.keys(props.profile.spellAllotment);
    return (
        <div className='table'>
            <h1 id="allotmentTitle">Spell Allotment</h1>
            <table>
                <thead>
                    <tr>
                        <td>Level</td>
                        <td>Can Cast</td>
                        <td>Slots</td>
                    </tr>
                </thead>
                <tbody>
                    {levels.map(level => getAllotmentRow(level, props.profile))}
                </tbody>
            </table>
        </div>
    )
}

export default SpellAllotmentTable;
