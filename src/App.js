import React from 'react';
import './App.css';


const thing1 = {
  name: 'Animate Snow',
  school: 'Transmutation [Cold]',
  fields: [
    'level: Druid 6',
    'components: V, S, M',
    'casting time: 1 standard action',
    'range: Medium (100 ft. + 10 ft./level)',
    'area: Up to a 20-ft. cube of snow',
    'duration: 1 round/level',
    'saving throw: None',
    'spell resistance: No'
  ],
  shortDesc: 'GET THIS FROM NEW-SPELLS LIST',
  longDesc: 'You imbue a mass of fallen snow with mobility and a semblance of life. The  snow to be animated may be natural or magically created. Snow animated by this spell is treated as an animated object. You can animate four Large animated objects, two Huge animated objects, or one Gargantuan animated object. For details, see the Animated Object entry, page 13 of the Monster Manual. The animated snow can assume any basic shape you wish, and it attacks as directed by your vocal commands. Animated snow objects possess the Blind and Trample special attacks as detailed in the Monster Manual entry for animated objects. In addition, they have the cold subtype, and do an additional 1d6 points of cold damage on a successful hit. Animated snow objects take 1d6 points of damage each round if they exist in a place with temperatures above freezing. Material Component: Meltwater from a glacier.'
}

const thing2 = {
  name: 'Evergreen',
  school: 'Transmutation [Fire]',
  fields: [
    'level: Druid 2',
    'components: V, S, DF',
    'casting time: 1 standard action',
    'range: Medium (100 ft. + 10 ft./level)',
    'area: 10-ft. radius',
    'duration: 1 hour/level and instanta-',
    'saving throw: None',
    'spell resistance: No'],
  shortDesc: 'GET THIS FROM NEW-SPELLS LIST',
  longDesc: 'You imbue a 10-foot-radius area of plant life with magical heat, instantly healing 1d8 points of damage +1 point per caster level (maximum +10), and granting immunity to cold for the duration of the spell. Evergreen affects natural plants as well as creatures with the plant subtype.'
}

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

// SPELL TABLE
function SpellEntry(props) {
  return (
    <tr>
      <td>{props.spell.name}</td>
      <td>{props.spell.school}</td>
      <td>{props.spell.shortDesc}</td>
    </tr>
  )
}

function SpellTable(props) {
  return (
    <div className='spellTable'>
      <h1>Level {props.level}</h1>
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>School</td>
            <td>Name</td>
          </tr>
        </thead>
        <tbody>
          <SpellEntry spell={props.thing1} />
          <SpellEntry spell={props.thing2} />
        </tbody>
      </table>
    </div>
  )
}

// SPELL PAGE
function SpellFields(props) {
  const listItems = props.spell.fields.map(function(entry) {
    const words = entry.split(':')
    return (
      <p key={words[0]}>
        <b>{words[0][0].toUpperCase() + words[0].slice(1)}:</b>
        {words[1]}
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

function SpellPage(props) {
  return (
    <div className='spellPage'>
      <SpellHeader spell={props.spell} />
      <SpellFields spell={props.spell} />
      <div>{props.spell.longDesc}</div>
    </div>
  )
}

// APP
function App() {
  return (
    <div>
      <Header />
      <SpellTable level={0} thing1={thing1} thing2={thing2} />
      <SpellTable level={1} thing1={thing1} thing2={thing2} />
      <SpellPage spell={thing1} />
    </div>
  );
}

export default App;
