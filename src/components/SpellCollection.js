import React from 'react';
import SpellTable from './table/SpellTable';
import SpellPage from './SpellPage';


function makeSpellTable(spells, characterClass, level, showPage, session) {
    const filteredSpells = spells.filter(spell => spell.level[characterClass] === level);
    if (filteredSpells.length > 0) {
        return <SpellTable key={level} level={level} spells={filteredSpells} showPage={showPage} session={session} />
    }
}


class SpellCollection extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            session: props.session,
            spells: props.spells,
            characterClass: props.characterClass,
            page: null
        }
        this.showPage = this.showPage.bind(this);
    }

    // update state when the App gets updated (when session is changed)
    componentDidUpdate(prevProps) {
        if (prevProps.session !== this.props.session) {
            this.setState({
                session: this.props.session,
                spells: this.props.spells,
                characterClass: this.props.characterClass
            });
        }
    }

    // show the spell page for a given spell
    showPage(spell) {
        this.setState({page: spell})
    }

    render() {
        return (
            <div>
                {[0,1,2,3,4,5,6,7,8,9].map(
                    i => makeSpellTable(this.state.spells, this.state.characterClass, i, this.showPage, this.state.session)
                )};
                <div>
                    {this.state.page != null && <SpellPage spell={this.state.page} exit={this.showPage.bind(this, null)} />}
                </div>
            </div>
        )
    }
}

export default SpellCollection;
