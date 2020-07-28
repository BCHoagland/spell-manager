import React from 'react';
import SpellCollection from './components/SpellCollection';
import spells from './data/spells';


// HEADER
function Header() {
  return (
    <div className='header'>
      <p>ASDXY</p>
      <div>
        <p>Keruth&nbsp;</p>
        <p>(Wizard)</p>
      </div>
    </div>
  )
}

const characterClass = 'druid';
const selectedSpells = spells.filter(spell => spell.level.hasOwnProperty(characterClass));

// SPELL STUFF
function App() {
  return (
    <div>
      <Header />
      <SpellCollection spells={selectedSpells} characterClass={characterClass} />
    </div>
  );
}

export default App;
