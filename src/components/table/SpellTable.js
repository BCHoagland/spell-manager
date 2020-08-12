import React from 'react';
import SpellEntry from './SpellEntry';


class SpellTable extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            session: props.session,
            level: props.level,
            spells: props.spells,
            page: null,
            showPage: props.showPage
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.session !== this.props.session) {
            this.setState({
                session: this.props.session,
                spells: this.props.spells,
                page: null
            });
        }
    }

    render() {
        return (
            <div className='table'>
                <h1>Level {this.state.level}</h1>
                <table>
                    <thead>
                        <tr>
                            <td>Prepared</td>
                            <td>Cast</td>
                            <td>Name</td>
                            <td>School</td>
                            {/* <td>Description</td> */}
                            <td>Source</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.spells.map((entry) => <SpellEntry
                            key={entry.name}
                            session={this.state.session}
                            spell={entry}
                            popup={this.state.showPage.bind(this, entry)}
                        />)}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default SpellTable;
