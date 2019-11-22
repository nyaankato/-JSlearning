import React from 'react';
import './index.css';

// function Square (props) {
//     return (
//         <button className="square" onClick= {props.onClick}>
//             {props.value}
//         </button>
//     );
// }

class Board extends React.Component {
    constructor(props){
         super(props);
         this.state = {
             cookieNum : 0,
             cookiePerClick : 1,
             cookiePerSecond : 0,
             autoclickers: 0,
             autoclickerPrice: 10
         }
    }
    increaseCookie() {
        let cookieNum = this.state.cookieNum;
        cookieNum += this.state.cookiePerClick;
        this.setState({cookieNum: cookieNum});
    }

    buyAutoClicker() {
        if (this.state.autoclickerPrice > this.state.cookieNum) {
            alert("Not enough cookies!");
            return;
        }
        this.setState({cookieNum : this.state.cookieNum - this.state.autoclickerPrice});
        this.setState({autoclickers: this.state.autoclickers + 1}); //do I need this?
        this.setState({cookiePerSecond : this.state.cookiePerSecond + this.state.autoclickers * 5});
        this.setState({autoclikerPrice : this.state.autoclickerPrice += this.state.autoclickers * 20})
    }

    render() {
        return (
             <div>
                 <div className="cookies">Cookies num: {this.state.cookieNum}</div>
                 <div className="cookies">Cookies per second: {this.state.cookiePerSecond}</div>
                 <button className="click" onClick= {() => this.increaseCookie()}>
                     Click!
                 </button>
                 <button className="buy" onClick= {() => this.buyAutoClicker()}>
                     Buy Autoclicker
                 </button>
             </div>
         );
    }
}

class ClickerGame extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}
export default ClickerGame
