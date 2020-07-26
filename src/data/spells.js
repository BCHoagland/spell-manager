const spells = [
{
    name: 'Animate Snow',
    school: 'Transmutation [Cold]',
    fields: {
        'level': 'Druid 6',
        'components': 'V, S, M',
        'casting time': '1 standard action',
        'range': 'Medium (100 ft. + 10 ft./level)',
        'area': 'Up to a 20-ft. cube of snow',
        'duration': '1 round/level',
        'saving throw': 'None',
        'spell resistance': 'No'
    },
    shortDesc: 'Turns snow into creatures to fight for you',
    longDesc: 'You imbue a mass of fallen snow with mobility and a semblance of life. The  snow to be animated may be natural or magically created. Snow animated by this spell is treated as an animated object. You can animate four Large animated objects, two Huge animated objects, or one Gargantuan animated object. For details, see the Animated Object entry, page 13 of the Monster Manual. The animated snow can assume any basic shape you wish, and it attacks as directed by your vocal commands. Animated snow objects possess the Blind and Trample special attacks as detailed in the Monster Manual entry for animated objects. In addition, they have the cold subtype, and do an additional 1d6 points of cold damage on a successful hit. Animated snow objects take 1d6 points of damage each round if they exist in a place with temperatures above freezing. Material Component: Meltwater from a glacier.'
}, {
    name: 'Evergreen',
    school: 'Transmutation [Fire]',
    fields: {
        'level': 'Druid 2',
        'components': 'V, S, DF',
        'casting time': '1 standard action',
        'range': 'Medium (100 ft. + 10 ft./level)',
        'area': '10-ft. radius',
        'duration': '1 hour/level and instanta-',
        'saving throw': 'None',
        'spell resistance': 'No'
    },
    shortDesc: 'Magical heat warms plant life and heals',
    longDesc: 'You imbue a 10-foot-radius area of plant life with magical heat, instantly healing 1d8 points of damage +1 point per caster level (maximum +10), and granting immunity to cold for the duration of the spell. Evergreen affects natural plants as well as creatures with the plant subtype.'
}]

export default spells;