import React from 'react';
import './index.css';
import autoclickImg from './autoclicker.png';

class Autoclicker extends React.Component {

    //TODO: use props not state here
    constructor(props){
        super(props);
        this.state = {
            number: this.props.number,
            cookiePerSecond : this.state.number * 5,
            price : this.state.number * 10
            //isAvailable : props.isAvailable
        }
    }
    render() {
        return (
            <div>
                <div className="autoclicker">new Autoclicker!</div>
            </div>
        );
    }
}

class Board extends React.Component {
    constructor(props){
         super(props);
         this.state = {
             cookieNum : 0,
             cookiePerClick : 1,
             cookiePerSecond : 0,
             autoclickers: [],
             //autoclickers: [],
             autoclickerPrice: 10
         }
    }

    // renderArticles(articles) {
    //     if (articles.length > 0) {
    //         return articles.map((article, index) => (
    //             <Article key={index} article={article} />
    //         ));
    //     }
    //     else return [];
    // }

    componentDidMount() {
        setInterval(() => this.setState({ cookieNum: this.state.cookieNum + this.state.cookiePerSecond}), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    renderAutoclicker(i) {
        return <Autoclicker
            number = {i}
        />
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
        //this.state.autoclickers.push();
        const newCookieValue = this.state.cookieNum - this.state.autoclickerPrice;
        const autoclickers = this.state.autoclickers;
        const newAutoclicker = this.renderAutoclicker(autoclickers.length + 1)
        autoclickers.push({autoclicker : newAutoclicker});
        this.setState({autoclickers: autoclickers});
        // let newAutoclickerValue = this.state.autoclickers.length * 5;
        const newCookiesPerSecondValue = this.state.cookiePerSecond + this.state.autoclickers[this.state.autoclickers.length - 1].cookiePerSecond;
        const newAutoclickerPrice = this.state.autoclickerPrice + this.state.autoclickers.length * 20
        this.setState({cookieNum : newCookieValue});
        // this.setState({autoclickers: this.state.autoclickers.push(newAutoclickerValue)});
        this.setState({cookiePerSecond : newCookiesPerSecondValue});
        this.setState({autoclikerPrice : newAutoclickerPrice});
        // //return Autoclicker({value=)};
        // this.renderAutoclicker(this.state.autoclickers.length - 1)
    }

    render() {
        const autoclickers = this.state.autoclickers;
        const autoclickersView = autoclickers.map((autoclicker, index) =>
        {
            return (
                <li key = {index}>
                    <div className="autoclicker">Autoclicker #{index}</div>
                    <div className="autoclicker">Cookies per second: {autoclicker.cookiePerSecond}</div>
                </li>
            );
        });
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
