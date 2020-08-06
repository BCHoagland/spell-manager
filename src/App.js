import React from 'react';

import SessionHeader from './components/headers/SessionHeader';
import CharacterHeader from './components/headers/CharacterHeader';
import SpellAllotmentTable from './components/table/SpellAllotmentTable';
import SpellCollection from './components/SpellCollection';

import {termsInString} from './utils/string';

import config from './data/config';
import spells from './data/spells';


const allSessions = Object.keys(config);


function filterSpells(spells, profile) {
    let s = spells.filter(spell => spell.level.hasOwnProperty(profile.class));
    // if (profile.knownSpells !== undefined) {
    //     s = s.filter(spell => termsInString(spell.name, profile.knownSpells, true));
    // }
    s = s.filter(spell => profile.sources.includes(spell.source));
    if (profile.banned !== undefined) {
        s = s.filter(spell => !termsInString(spell.school, profile.banned));
    }
    s.sort((spell, other) => (spell.name > other.name) ? 1 : -1);
    return s;
}


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            session: props.session
        }
        this.nextSession = this.nextSession.bind(this);
    }

    // switch to the next session in the config
    nextSession() {
        // determine the next session
        const ind = allSessions.findIndex(n => n === this.state.session);
        const session = allSessions[(ind + 1) % allSessions.length];

        // put empty object in this session's localStorage if nothing exists there already
        const storageKeys = Object.keys(localStorage);
        if (!storageKeys.includes(session)) {
            localStorage.setItem(session, '{}');
        }

        // change the session
        this.setState({session: session});
    }

    render() {
        const profile = config[this.state.session];
        return (
            <div>
                <SpellAllotmentTable profile={profile} />
                <SpellCollection spells={filterSpells(spells, profile)} characterClass={profile.class} session={this.state.session} />
                <SessionHeader session={this.state.session} nextSession={this.nextSession} />
                <CharacterHeader name={profile.name} characterClass={profile.class} />
            </div>
        );
    }
}

export default App;
