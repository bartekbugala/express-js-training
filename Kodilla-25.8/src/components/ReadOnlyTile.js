import React, { Component } from 'react';

class ReadOnlyTile extends Component {
    render() {
        return (
            <label>
                <input readOnly className="fixed-tile" type="number" min="1" max="9" value={this.props.inputValue} />
            </label>

        );
    }
}
export default ReadOnlyTile;