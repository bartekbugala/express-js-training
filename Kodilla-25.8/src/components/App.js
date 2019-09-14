import React, { Component } from 'react';
import Board from './Board.js'

class App extends Component {
    render() {
        return (
            <div>
                <h1>Sudoku</h1>
                <Board />
                <div>
                    <button>Check</button>
                    <button>New Game</button>
                    <button>Solve</button>
                    <button>Restart</button>
                </div>
            </div>
        );
    }
}
export default App;