import React from 'react';
import ReactDOM from 'react-dom';
import TicTacToeGame from './tic-tac-toe';

class Menu extends React.Component {
    constructor() {
        super();
        this.state = {
            displayTictactoe : false
         };
    }

    showTictactoe() {
        this.setState({
            displayTictactoe: true
        });
    }

    hideTictactoe() {
        this.setState({
            displayTictactoe: false
        });
    }

    render() {
        if (this.state.displayTictactoe)
            return(
            <div>
                <TicTacToeGame />
                <button className="menu" onClick = {() => this.hideTictactoe()}>
                    Back to menu
                </button>
            </div>
            );

        return (
            <div className="menu">
                <button className="tic-tac-toe" onClick = {() => this.showTictactoe()}>
                    Tic-tac-toe
                </button>
            </div>
        );
    }
}
ReactDOM.render(
    <Menu />,
    document.getElementById('root')
);