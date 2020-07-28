import React from 'react';

import Header from './components/Header';
import SpellAllotmentTable from './components/SpellAllotmentTable';
import SpellCollection from './components/SpellCollection';

import config from './data/config';
import spells from './data/spells';


const allSessions = Object.keys(config);

function filterSpells(spells, profile) {
    let selectedSpells = spells.filter(spell => spell.level.hasOwnProperty(profile.class));
    selectedSpells = selectedSpells.filter(spell => profile.sources.includes(spell.source));
    selectedSpells.sort((spell, other) => (spell.name > other.name) ? 1 : -1);
    return selectedSpells;
}


// function App() {
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            session: props.session
        }
        this.nextSession = this.nextSession.bind(this);
    }

    nextSession() {
        const ind = allSessions.findIndex(n => n === this.state.session);
        const session = allSessions[(ind + 1) % allSessions.length];

        // put empty object in this session's localStorage if nothing exists there already
        const storageKeys = Object.keys(localStorage);
        if (!storageKeys.includes(session)) {
            localStorage.setItem(session, '{}');
        }

        this.setState({session: session});
    }

    render() {
        const profile = config[this.state.session];
        return (
            <div>
                <Header session={this.state.session} name={profile.name} characterClass={profile.class} nextSession={this.nextSession} />
                <SpellAllotmentTable allotment={profile.spellAllotment} />
                <SpellCollection spells={filterSpells(spells, profile)} characterClass={profile.class} session={this.state.session} />
            </div>
        );
    }
}

// class App extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             config: props.config,
//             sessions: props.sessions,
//             session: props.sessions[0],
//             sessionInd: 0,
//             profile: props.config[props.sessions[0]],
//             spells: props.spells
//         }
//         this.nextSession = this.nextSession.bind(this);
//         this.filterSpells = this.filterSpells.bind(this);
//         this.ensureLocalStorage = this.ensureLocalStorage.bind(this);
//         this.ensureLocalStorage()
//     }

//     ensureLocalStorage() {
//         // put empty object in this session's localStorage if nothing exists there already
//         const storageKeys = Object.keys(localStorage);
//         if (!storageKeys.includes(this.state.session)) {
//             localStorage.setItem(this.state.session, '{}');
//         }
//     }

//     nextSession() {
//         const newSessionInd = (this.state.sessionInd + 1) % this.state.sessions.length;
//         const newSession = this.state.sessions[newSessionInd];
//         const newProfile = this.state.config[newSession];
//         this.ensureLocalStorage()

//         this.setState({
//             session: newSession,
//             profile: newProfile,
//             sessionInd: newSessionInd
//         });
//     }

//     filterSpells(spells, profile) {
//         let selectedSpells = spells.filter(spell => spell.level.hasOwnProperty(profile.class));
//         selectedSpells = selectedSpells.filter(spell => profile.sources.includes(spell.source));
//         selectedSpells.sort((spell, other) => (spell.name > other.name) ? 1 : -1);
//         return selectedSpells;
//     }

//     render() {
//         return (
//             <div>
//                 <Header session={this.state.session} name={this.state.profile.name} characterClass={this.state.profile.class} nextSession={this.nextSession} />
//                 <SpellAllotmentTable allotment={this.state.profile.spellAllotment} />
//                 <SpellCollection spells={this.filterSpells(this.state.spells, this.state.profile)} characterClass={this.state.profile.class} session={this.state.session} />
//             </div>
//         )
//     }
// }

export default App;
