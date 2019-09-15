import React, { Component } from 'react';
import Board from '../components/Board.js'
import sudoku from 'sudoku-umd';
import style from './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            initialBoard: '',
            currentBoard: ''
        }
        
        this.newGame = this.newGame.bind(this);
        this.restart = this.restart.bind(this);
        this.solve = this.solve.bind(this);
        this.check = this.check.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }
    check() {
        const solvedBoard = sudoku.solve(this.state.initialBoard);
        if (solvedBoard === this.state.currentBoard) {
            alert('Brawo, prawidłowo rozwiązane');
            return
        }
        alert('Coś nie gra!')
    }
    newGame() {
        const generatedBoard = sudoku.generate('easy');
        this.setState({
            initialBoard: generatedBoard,
            currentBoard: generatedBoard
        },()=>console.log(this.state.currentBoard))
    }
    solve() {
        const solvedBoard = sudoku.solve(this.state.initialBoard);
        this.setState({
            currentBoard: solvedBoard
        })
    }
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
                <div className="buttons">
                    <button onClick={this.check}>Check</button>
                    <button onClick={this.newGame}>New Game</button>
                    <button onClick={this.solve}>Solve</button>
                    <button onClick={this.restart}>Restart</button>
                </div>
            </div>
        );
    }
}
export default App;