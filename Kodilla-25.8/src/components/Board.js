import React, { Component } from 'react';
import Tile from './Tile.js';

let tileId;

class Board extends Component {
    constructor(props) {
        super(props);
        this.createTiles = this.createTiles.bind(this);
    }
    
     handleChange(tileId,event) {
         let boardArray = this.props.board;
         boardArray[tileId-2] = event;
         this.props.handleChange(boardArray);
    }

    createTiles() {
        let currentBoard = Array.from(this.props.board);
        tileId = 1;
        let tiles = currentBoard.map(element => <Tile key={tileId++} inputValue={element} handleChange={this.handleChange.bind(this,tileId)}/>)
        
        return (
            <form>
                {tiles}
            </form>
        )
    }

    render() {
        return (
            <div>
                <h2>Board</h2>
                {this.createTiles()}
            </div>
        );
    }
}

export default Board;