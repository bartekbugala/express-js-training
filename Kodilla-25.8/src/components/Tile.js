import React, { Component } from 'react';

class Tile extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.props.handleChange(event.target.value);
  }

  render() {
    return (
      <label>
        <input type="number" min="1" max="9" value={this.props.inputValue} onChange={this.handleChange} />
      </label>
    );
  }
}

export default Tile;
