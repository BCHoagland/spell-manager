import React from 'react';
import SpellPage from './SpellPage'


function SpellEntry(props) {
    return (
        <tr>
            <td>
                <div className='link' onClick={props.click}>{props.spell.name}</div>
            </td>
            <td>{props.spell.school}</td>
            <td>{props.spell.shortDesc}</td>
        </tr>
    )
}
  
class SpellTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            level: props.level,
            entries: props.entries,
            page: null
        }
        // this.showPage = this.showPage.bind(this);
    }

    showPage(spell) {
        this.setState({page: spell});
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
                            <td>Name</td>
                        </tr>
                        </thead>
                        <tbody>
                            {this.props.entries.map((entry) => <SpellEntry key={entry.name} spell={entry} click={this.showPage.bind(this, entry)} />)}
                        </tbody>
                    </table>
                </div>
                <div>
                    {this.state.page != null && <SpellPage spell={this.state.page} exit={this.showPage.bind(this, null)} />}
                </div>
            </div>
        )
    }
}

export default SpellTable;
