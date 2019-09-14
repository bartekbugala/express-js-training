import React, { Component } from 'react';

class Tile extends Component {
    constructor(props) {
        super(props);
        this.state = { number: 1}

        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({ number: event.target.value })
        console.log(this.state.number);
    }

    render() {
        return (
                <label>
                    <input type="number" min="1" max="9" value={this.state.number} onChange={this.handleChange} />
                </label>
        );
    }
}
export default Tile;