import React from 'react';


function SpellEntry(props) {
    return (
        <tr>
            <td>
                <div className='link' onClick={props.click}>{props.spell.name}</div>
            </td>
            <td>{props.spell.school}</td>
            {/* <td>{props.spell.shortDesc}</td> */}
            <td>{props.spell.source}</td>
        </tr>
    )
}
  
class SpellTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            level: props.level,
            spells: props.spells,
            page: null,
            showPage: props.showPage
        }
    }

    render() {
        return (
            <div>
                <div className='spellTable'>
                    <h1>Level {this.state.level}</h1>
                    <table>
                        <thead>
                        <tr>
                            <td>Name</td>
                            <td>School</td>
                            {/* <td>Description</td> */}
                            <td>Source</td>
                        </tr>
                        </thead>
                        <tbody>
                            {this.props.spells.map((entry) => <SpellEntry key={entry.name} spell={entry} click={this.state.showPage.bind(this, entry)} />)}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default SpellTable;
