import React from 'react';
import './index.css';
import autoclickImg from './autoclicker.png';

function Autoclicker(props){
    return (
        <li key = {props.index}>
            <div className="autoclicker">Autoclicker #{props.index}</div>
            <div className="autoclicker">Cookies per second: {props.cookiePerSecond}</div>
        </li>
    );
}

class Board extends React.Component {
    constructor(props){
         super(props);
         this.state = {
             cookieNum : 0,
             cookiePerClick : 1,
             cookiePerSecond : 0,
             autoclickers: [],
             autoclickerPrice: 10
         }
    }

    componentDidMount() {
        setInterval(() => this.setState({ cookieNum: this.state.cookieNum + this.state.cookiePerSecond}), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    renderAutoclicker(index, cookiePerSecond) {
        return <Autoclicker
        index = {index}
        cookiePerSecond = {cookiePerSecond}/>
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
        const newCookieValue = this.state.cookieNum - this.state.autoclickerPrice;
        const autoclickers = this.state.autoclickers;
        const cookiePerSecondForNewAutoclicker = (autoclickers.length + 1) * 10;
        const newAutoclicker = {autoclicker : {index : autoclickers.length + 1, cookiePerSecond: cookiePerSecondForNewAutoclicker}}
        autoclickers.push(newAutoclicker);

        const newTotalCookiePerSecondValue = this.state.cookiePerSecond + cookiePerSecondForNewAutoclicker;
        const newAutoclickerPrice = this.state.autoclickerPrice + this.state.autoclickers.length * 20;

        this.setState({autoclickers: autoclickers});
        this.setState({cookieNum : newCookieValue});
        this.setState({cookiePerSecond : newTotalCookiePerSecondValue});
        this.setState({autoclikerPrice : newAutoclickerPrice});
    }

    render() {
        const autoclickers = this.state.autoclickers;
        const autoclickersView = autoclickers.map((value, index) =>
        {
            return (
                this.renderAutoclicker(value.autoclicker.index, value.autoclicker.cookiePerSecond)
            );
        });
        return (
             <div>
                 <div className="cookies">Cookies num: {this.state.cookieNum}</div>
                 <div className="cookies">Total cookies per second: {this.state.cookiePerSecond}</div>
                 <button className="click" onClick= {() => this.increaseCookie()}>
                     Click!
                 </button>
                 <button className="buy" onClick= {() => this.buyAutoClicker()}>
                     Buy Autoclicker
                 </button>
                 <div className="game-info">
                     <div>{autoclickersView}</div>
                 </div>
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
