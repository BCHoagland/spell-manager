import React from 'react';
import SpellTable from './SpellTable';
import SpellPage from './SpellPage';


class SpellCollection extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            spells: props.spells,
            characterClass: props.characterClass,
            page: null
        }
        this.showPage = this.showPage.bind(this);
    }

    showPage(spell) {
        this.setState({page: spell})
    }

    render() {
        return (
            <div>
                {[0,1,2,3,4,5,6,7,8,9].map(
                    i => <SpellTable key={i} level={i} spells={this.state.spells.filter(spell => spell.level[this.state.characterClass] === i)} showPage={this.showPage} />
                )}
                <div>
                    {this.state.page != null && <SpellPage spell={this.state.page} exit={this.showPage.bind(this, null)} />}
                </div>
            </div>
        )
    }
}

export default SpellCollection;
