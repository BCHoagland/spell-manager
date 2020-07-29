import React from 'react';
import {getLocalStorage, setLocalStorage} from '../utils/storage';
import {highlightColors, schoolColors} from '../utils/colors';

// function SpellEntry(props) {
class SpellEntry extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            session: props.session,
            spell: props.spell,
            popup: props.popup,
            prepared: getLocalStorage(props.session, props.spell.name) === 'P',
            cast: getLocalStorage(props.session, props.spell.name) === 'C'
        }
        this.getColor = this.getHighlight.bind(this);
        this.changeCheck = this.changeCheck.bind(this);
    }

    getHighlight() {
        if (this.state.prepared) {
            return highlightColors['P'];
        } else if (this.state.cast) {
            return highlightColors['C'];
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
        if (p) {
            setLocalStorage(this.state.session, this.state.spell.name, 'P');
        } else if (c) {
            setLocalStorage(this.state.session, this.state.spell.name, 'C');
        } else {
            setLocalStorage(this.state.session, this.state.spell.name, null);
        }

        // actually update the state
        this.setState({
            prepared: p,
            cast: c,
        });
    }

    render() {
        // split the school name into the actual name and any modifiers that come after it
        const splitSchool = this.state.spell.school.split(" ");
        const schoolName = splitSchool.shift();
        const schoolPostfix = splitSchool.join(" ");

        return (
            <tr style={{backgroundColor: this.getHighlight()}}>
                {/* Prepared checkbox */}
                <td>
                    <input type="checkbox" onChange={e => {}} checked={this.state.prepared} onClick={this.changeCheck.bind(this, 'P')}></input>
                </td>
                {/* Cast checkbox */}
                <td>
                    <input type="checkbox" onChange={e => {}} checked={this.state.cast} onClick={this.changeCheck.bind(this, 'C')}></input>
                </td>
                {/* Spell name */}
                <td>
                    <div className='link' onClick={this.state.popup}>{this.state.spell.name}</div>
                </td>
                {/* School name */}
                <td>
                    <span style={{color: schoolColors[schoolName.toLowerCase()]}}>{schoolName}</span>
                    &nbsp;{schoolPostfix}
                </td>
                {/* Short description */}
                {/* <td>{this.state.spell.shortDesc}</td> */}
                {/* Spell source */}
                <td>{this.state.spell.source}</td>
            </tr>
        )
    }
}

class SpellTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            session: props.session,
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
                        {this.props.spells.map((entry) => <SpellEntry key={entry.name} session={this.state.session} spell={entry} popup={this.state.showPage.bind(this, entry)} />)}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default SpellTable;
