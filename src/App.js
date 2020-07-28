import React from 'react';

import Header from './components/Header';
import SpellAllotmentTable from './components/SpellAllotmentTable';
import SpellCollection from './components/SpellCollection';

import config from './data/config';
import spells from './data/spells';


// const session = 'Huffy\'s Extraordinary Adventure';
const session = "ASDXY";
const profile = config[session];

// put empty object in this session's localStorage if nothing exists there already
const storageKeys = Object.keys(localStorage);
if (!storageKeys.includes(session)) {
  localStorage.setItem(session, '{}');
}

// filter spells based on profile, then sort them alphabetically
let selectedSpells = spells.filter(spell => spell.level.hasOwnProperty(profile.class));
selectedSpells = selectedSpells.filter(spell => profile.sources.includes(spell.source));
selectedSpells.sort((spell, other) => (spell.name > other.name) ? 1 : -1);


function App() {
  return (
    <div>
      <Header session={session} name={profile.name} characterClass={profile.class} />
      <SpellAllotmentTable allotment={profile.spellAllotment} />
      <SpellCollection spells={selectedSpells} characterClass={profile.class} session={session} />
    </div>
  );
}

export default App;
