import React from 'react';
import ReactDOM from 'react-dom';
import TicTacToeGame from './tic-tac-toe';
import ClickerGame from './clicker';

class Menu extends React.Component {
    constructor() {
        super();
        this.state = {
            displayTictactoe : false,
            displayClicker : false
         };
    }

    showClicker() {
        this.setState({
            displayClicker: true
        });
    }

    hideClicker() {
        this.setState({
            displayClicker: false
        });
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

        if (this.state.displayClicker)
            return(
                <div>
                    <ClickerGame />
                    <button className="menu" onClick = {() => this.hideClicker()}>
                        Back to menu
                    </button>
                </div>
            );

        return (
            <div className="menu">
                <button className="tic-tac-toe" onClick = {() => this.showTictactoe()}>
                    Tic-tac-toe
                </button>
                <button className="Clicker" onClick = {() => this.showClicker()}>
                    Clicker
                </button>
            </div>
        );
    }
}
ReactDOM.render(
    <Menu />,
    document.getElementById('root')
);