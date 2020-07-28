import React from 'react';


// function SpellEntry(props) {
class SpellEntry extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            spell: props.spell,
            popup: props.popup,
            prepared: localStorage[props.spell.name] === 'P',
            cast: localStorage[props.spell.name] === 'C',
        }
        this.getColor = this.getColor.bind(this);
        this.changeCheck = this.changeCheck.bind(this);
    }

    getColor() {
        if (this.state.prepared) {
            return 'rgba(102, 205, 170, 0.4)';
        } else if (this.state.cast) {
            return 'rgba(250, 128, 114, 0.4)';
        } else {
            return null;
        }
    }

    changeCheck(action) {
        let p = null;
        let c = null;

        // set checks for each checkbox
        if (action === 'P') {
            p = !this.state.prepared;
            c = false;
        } else if (action === 'C') {
            p = false;
            c = !this.state.cast;
        }

        // save checked status of this spell in localStorage
        // localStorage
        if (p) {
            localStorage.setItem(this.state.spell.name, 'P');
        } else if (c) {
            localStorage.setItem(this.state.spell.name, 'C');
        } else {
            localStorage.removeItem(this.state.spell.name);
        }

        // actually update the state
        this.setState({
            prepared: p,
            cast: c,
        });
    }

    render() {
        return (
            // <tr style={{backgroundColor: this.state.color}}>
            <tr style={{backgroundColor: this.getColor()}}>
                <td>
                    <input type="checkbox" onChange={e => {}} checked={this.state.prepared} onClick={this.changeCheck.bind(this, 'P')}></input>
                </td>
                <td>
                    <input type="checkbox" onChange={e => {}} checked={this.state.cast} onClick={this.changeCheck.bind(this, 'C')}></input>
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
            <div className='table'>
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
        )
    }
}

export default SpellTable;
