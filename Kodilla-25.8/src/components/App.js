import React, { Component } from 'react';
import Board from './Board.js'
import sudoku from 'sudoku-umd';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            initialBoard: '',
            currentBoard: ''
        }
        
        this.newGame = this.newGame.bind(this);
        this.restart = this.restart.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }
    //check() { }
    newGame() {
        const generatedBoard = sudoku.generate('easy');
        this.setState({
            initialBoard: generatedBoard,
            currentBoard: generatedBoard
        })
    }
    //solve() { }
    restart() {
        this.setState({
            currentBoard: this.state.initialBoard
        })
    }

    handleChange(updatedBoard) {
                 this.setState({
                     currentBoard: updatedBoard
                 }) 
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