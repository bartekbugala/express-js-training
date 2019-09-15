import React, { Component } from 'react';
import Board from './Board.js'
import sudoku from 'sudoku-umd';
let initialBoard;
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentBoard: ''
        }
        
        this.newGame = this.newGame.bind(this);
        this.restart = this.restart.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }
    //check() { }
    newGame() {
        initialBoard = sudoku.generate('easy').split('').map(tile => tile === '.'?'':tile);
        this.setState({
            currentBoard: initialBoard
        })
    }
    //solve() { }
    restart() {

        this.setState({
            currentBoard: initialBoard
        },()=>{console.log('restart'+initialBoard)})
    }

    handleChange(updatedBoard) {
                 this.setState({
                     currentBoard: updatedBoard
                 },()=>{console.log('handleChange'+this.state.currentBoard)}) 
            }

    render() {
        return (
            <div>
                <h1>Sudoku</h1>
                <Board board={this.state.currentBoard} handleChange={this.handleChange}/>
                <div>
                    <button>Check</button>
                    <button onClick={this.newGame}>New Game</button>
                    <button>Solve</button>
                    <button onClick={this.restart}>Restart</button>
                </div>
            </div>
        );
    }
}
export default App;