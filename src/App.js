import React from 'react';
import './App.css';
import SpellCollection from './components/SpellCollection';
// import phbSpells from './data/phb';
// import frostburnSpells from './data/frostburn';
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

// const spells = phbSpells.concat(frostburnSpells);

const characterClass = 'druid';
const selectedSpells = spells.filter(spell => spell.level.hasOwnProperty(characterClass));

// APP
function App() {
  return (
    <div>
      <Header />
      <SpellCollection spells={selectedSpells} characterClass={characterClass} />
    </div>
  );
}

export default App;
