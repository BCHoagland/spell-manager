import React from 'react';
import './App.css';
import SpellCollection from './components/SpellCollection';
import spells from './data/fullSpells'


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

// APP
function App() {
  return (
    <div>
      <Header />
      {/* <div>
        {[0,1,2,3,4,5,6,7,8,9].map(i => <SpellTable key={i} level={i} entries={selectedSpells.filter(spell => spell.level[characterClass] === i)} />)}
      </div> */}
      <SpellCollection spells={selectedSpells} characterClass={characterClass} />
    </div>
  );
}

export default App;
