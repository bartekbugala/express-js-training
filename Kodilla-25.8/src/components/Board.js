import React, { Component } from 'react';
import Tile from './Tile.js'

class Board extends Component {
    render() {
        return (
            <div>
                <h2>Board</h2>
                <Tile />
            </div>
        );
    }
}
export default Board;