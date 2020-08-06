import React from 'react';


function SpellFields(props) {
    const keys = Object.keys(props.spell.fields);
    const vals = Object.values(props.spell.fields);
    const listItems = keys.map(function(key, i) {
        return (
            <p key={key}>
                <b>{key[0].toUpperCase() + key.slice(1)}: </b>
                {vals[i]}
            </p>
        )
    });
    return (
        <div>{listItems}</div>
    );
}


function SpellHeader(props) {
    return (
        <div className='spellHeader'>
            <h2>{props.spell.name}</h2>
            <i>{props.spell.school}</i>
        </div>
    )
}


function SpellDescription(props) {
    return (
        <div className="description">
            {props.desc.map(
                (line, i) => <p key={i}>{line}</p>
            )}
        </div>
    )
}


class SpellPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            spell: props.spell,
            exit: props.exit
        }
        this.esc = this.esc.bind(this)
    }

    componentDidUpdate(prevProps) {
        if (prevProps.spell !== this.props.spell) {
            this.setState({
                spell: this.props.spell
            });
        }
    }

    // add key listener when created
    componentDidMount() {
        document.addEventListener("keydown", this.esc, false);
    }

    // remove key listener when removed
    componentWillUnmount() {
        document.removeEventListener("keydown", this.esc, false);
    }

    // called on keypress
    esc(event) {
        // esc key
        if (event.keyCode === 27) {
            this.state.exit();
        }
    }

    render() {
        return (
            <div className='spellPage'>
                <SpellHeader spell={this.state.spell} />
                <SpellFields spell={this.state.spell} />
                <SpellDescription desc={this.state.spell.longDesc} />
                <div className='link exitButton' onClick={this.state.exit}>X</div>
            </div>
        )
    }
}

export default SpellPage;
