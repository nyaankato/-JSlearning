import React from 'react';
import ReactDOM from 'react-dom';
import TicTacToeGame from './tic-tac-toe';

class Menu extends React.Component {
    constructor() {
        super();
        this.state = {
            clicked: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            clicked: true
        });
    }

    render() {
        return (
            <div className="menu">
                <button className="tic-tac-toe" onClick = {() => this.handleClick()}>
                    Tic-tac-toe
                    {this.state.clicked ? <TicTacToeGame /> : null}
                </button>
            </div>
        );
    }
}
ReactDOM.render(
    <Menu />,
    document.getElementById('root')
);