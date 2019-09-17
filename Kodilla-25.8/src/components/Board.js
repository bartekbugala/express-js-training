import React, { Component } from 'react';
import Tile from './Tile.js';
import ReadOnlyTile from './ReadOnlyTile.js';

class Board extends Component {
  constructor(props) {
    super(props);
    this.createTiles = this.createTiles.bind(this);
    this.tilesArrayFromString = this.tilesArrayFromString.bind(this);
  }

  handleChange(tileId, event) {
    let boardArray = this.tilesArrayFromString(this.props.board);
    boardArray[tileId] = event;
    boardArray = boardArray.map(tile => (tile === '' ? '.' : tile));
    let boardString = boardArray.join('');
    this.props.handleChange(boardString);
  }

  tilesArrayFromString(string) {
    let array = string.split('').map(tile => (tile === '.' ? '' : tile));
    return array;
  }

  createTiles() {
    let currentBoard = this.tilesArrayFromString(this.props.board);
    let initialBoard = this.tilesArrayFromString(this.props.initialBoard);
    let tileId = 0;

    let tiles = currentBoard.map((element, i) => {
      if (element !== '' && element === initialBoard[i]) {
        tileId++;
        return <ReadOnlyTile key={i} inputValue={initialBoard[i]} />;
      }
      return <Tile key={i} inputValue={element} handleChange={this.handleChange.bind(this, tileId++)} />;
    });
    return <form>{tiles}</form>;
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
