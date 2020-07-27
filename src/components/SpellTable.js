import React from 'react';


// function SpellEntry(props) {
class SpellEntry extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            spell: props.spell,
            popup: props.popup,
            prepared: false,
            cast: false,
        }
        this.colors = {
            'P': 'rgba(102, 205, 170, 0.4)',
            'C': 'rgba(250, 128, 114, 0.4)'
        }
    }

    highlight(action) {
        let p = null;
        let c = null;
        let color = null;

        // set checks for each checkbox
        if (action === 'P') {
            p = !this.state.prepared;
            c = false;
        } else if (action === 'C') {
            p = false;
            c = !this.state.cast;
        }

        // set color for the entire row
        if (c) {
            color = 'rgba(250, 128, 114, 0.4)';
        } else if (p) {
            color = 'rgba(102, 205, 170, 0.4)';
        } else {
            color = null;
        }

        // actually update the state
        this.setState({
            prepared: p,
            cast: c,
            color: color
        });
    }

    render() {
        return (
            <tr style={{backgroundColor: this.state.color}}>
                <td>
                    <input type="checkbox" onChange={e => {}} checked={this.state.prepared} onClick={this.highlight.bind(this, 'P')}></input>
                </td>
                <td>
                    <input type="checkbox" onChange={e => {}} checked={this.state.cast} onClick={this.highlight.bind(this, 'C')}></input>
                </td>
                <td>
                    <div className='link' onClick={this.state.popup}>{this.state.spell.name}</div>
                </td>
                <td>{this.state.spell.school}</td>
                {/* <td>{this.state.spell.shortDesc}</td> */}
                <td>{this.state.spell.source}</td>
            </tr>
        )
    }
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
                            <td>Prepared</td>
                            <td>Cast</td>
                            <td>Name</td>
                            <td>School</td>
                            {/* <td>Description</td> */}
                            <td>Source</td>
                        </tr>
                        </thead>
                        <tbody>
                            {this.props.spells.map((entry) => <SpellEntry key={entry.name} spell={entry} popup={this.state.showPage.bind(this, entry)} />)}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default SpellTable;
