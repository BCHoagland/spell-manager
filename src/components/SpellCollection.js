import React from 'react';
import SpellTable from './table/SpellTable';
import SpellPage from './SpellPage';


function makeSpellTable(spells, profile, level, showPage, session) {
    let filteredSpells = spells.filter(spell => spell.level[profile.class] === level);
    filteredSpells = filteredSpells.filter(spell => typeof(profile.spellAllotment[level]) !== 'undefined' && profile.spellAllotment[level][0] > 0);
    if (filteredSpells.length > 0) {
        return <SpellTable
            key={level}
            level={level}
            spells={filteredSpells}
            showPage={showPage}
            session={session}
        />
    }
}


class SpellCollection extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            session: props.session,
            spells: props.spells,
            profile: props.profile,
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
                profile: this.props.profile,
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
                    i => makeSpellTable(this.state.spells, this.state.profile, i, this.showPage, this.state.session)
                )};
                <div>
                    {this.state.page != null && <SpellPage spell={this.state.page} exit={this.showPage.bind(this, null)} />}
                </div>
            </div>
        )
    }
}

export default SpellCollection;
