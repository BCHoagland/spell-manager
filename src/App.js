import React from 'react';
import './App.css';
import SpellTable from './components/SpellTable';
import spells from './data/spells'


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


// APP
function App() {
  return (
    <div>
      <Header />
      <SpellTable level={0} entries={spells} />
    </div>
  );
}

export default App;
