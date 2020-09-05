import React from 'react';
import {getSpell, setSpell} from '../../utils/storage';
import {highlightColors, schoolColors} from '../../utils/colors';


class SpellEntry extends React.Component {
    constructor(props) {
        super(props);
        const savedData = getSpell(props.session, props.spell.name);
        this.state = {
            session: props.session,
            spell: props.spell,
            popup: props.popup,
            prepared: savedData['prepared'],
            upcast: savedData['upcast'],
            preparedHistory: savedData['preparedHistory']
        }
        this.getHighlight = this.getHighlight.bind(this);
        this.prepare = this.prepare.bind(this);
        this.cast = this.cast.bind(this);
        this.upcast = this.upcast.bind(this);
        this.downcast = this.downcast.bind(this);
    }

    componentDidUpdate(prevProps) {
        const savedData = getSpell(this.props.session, this.props.spell.name);
        if (prevProps.session !== this.props.session) {
            this.setState({
                session: this.props.session,
                spell: this.props.spell,
                prepared: savedData['prepared'],
                upcast: savedData['upcast'],
                preparedHistory: savedData['preparedHistory']
            });
        }
    }

    getHighlight() {
        if (this.state.prepared > 0) {
            return highlightColors['P'];
        } else if (this.state.preparedHistory > 0) {
            return highlightColors['C'];
        } else {
            return null;
        }
    }

    prepare() {
        const n = this.state.prepared + 1;
        setSpell(this.state.session, this.state.spell.name, n, this.state.upcast);
        this.setState({
            prepared: n
        });
    }

    cast() {
        const n = Math.max(0, this.state.prepared - 1);
        setSpell(this.state.session, this.state.spell.name, n, this.state.upcast, this.state.prepared);
        this.setState({
            prepared: n,
            preparedHistory: this.state.prepared
        });
    }

    upcast() {
        const n = this.state.upcast + 1;
        setSpell(this.state.session, this.state.spell.name, this.state.prepared, n);
        this.setState({
            upcast: n
        });
    }

    downcast() {
        const n = Math.max(0, this.state.upcast - 1);
        setSpell(this.state.session, this.state.spell.name, this.state.prepared, n);
        this.setState({
            upcast: n
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
                    <div>{this.state.prepared}</div>
                </td>
                <td>
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
                {/* Upcast */}
                <td>
                    <div>{this.state.upcast > 0 ? '+' + this.state.upcast : 0}</div>
                </td>
                <td>
                    <button onClick={this.upcast}>+</button>
                    <button onClick={this.downcast}>-</button>
                </td>
            </tr>
        )
    }
}

export default SpellEntry;
