import React from 'react';
import {setLocalStorage, getSpellCount} from '../../utils/storage';
import {highlightColors, schoolColors} from '../../utils/colors';


class SpellEntry extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            session: props.session,
            spell: props.spell,
            popup: props.popup,
            numPrepared: getSpellCount(props.session, props.spell.name)
        }
        this.getHighlight = this.getHighlight.bind(this);
        this.prepare = this.prepare.bind(this);
        this.cast = this.cast.bind(this);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.session !== this.props.session) {
            this.setState({
                session: this.props.session,
                spell: this.props.spell,
                numPrepared: getSpellCount(this.props.session, this.props.spell.name)
            });
        }
    }

    getHighlight() {
        if (this.state.numPrepared > 0) {
            return highlightColors['P'];
        // } else if (this.state.cast) {
        //     return highlightColors['C'];
        } else {
            return null;
        }
    }

    prepare() {
        const n = this.state.numPrepared + 1;
        setLocalStorage(this.state.session, this.state.spell.name, n);
        this.setState({
            numPrepared: n
        });
    }

    cast() {
        const n = Math.max(0, this.state.numPrepared - 1);
        setLocalStorage(this.state.session, this.state.spell.name, n);
        this.setState({
            numPrepared: n
        });
    }

    render() {
        // split the school name into the actual name and any modifiers that come after it
        const splitSchool = this.state.spell.school.split(" ");
        const schoolName = splitSchool.shift();
        const schoolPostfix = splitSchool.join(" ");

        return (
            <tr style={{backgroundColor: this.getHighlight()}}>
                {/* Prepared */}
                <td>
                    <div>{this.state.numPrepared}</div>
                    <button onClick={this.prepare}>+</button>
                    <button onClick={this.cast}>-</button>
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

export default SpellEntry;
