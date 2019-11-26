import React from 'react';
import './index.css';
import autoclickImg from './autoclicker.png';

function Autoclicker (props) {
    return (
        <div>
        <img src={autoclickImg} alt="autoclicker">

        </img>
        </div>
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
            value={this.state.autoclickers[i]}
            //onClick={() => this.handleClick(i)}
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
        this.state.autoclickers.push()
        let newCookieValue = this.state.cookieNum - this.state.autoclickerPrice;
        let newAutoclickerValue = this.state.autoclickers.length * 5;
        let newCookiesPerSecondValue = this.state.cookiePerSecond + newAutoclickerValue;
        let newAutoclickerPrice = this.state.autoclickerPrice + this.state.autoclickers.length * 20
        this.setState({cookieNum : newCookieValue});
        this.setState({autoclickers: this.state.autoclickers.push(newAutoclickerValue)});
        this.setState({cookiePerSecond : newCookiesPerSecondValue});
        this.setState({autoclikerPrice : newAutoclickerPrice});
        //return Autoclicker({value=)};
        this.renderAutoclicker(this.state.autoclickers.length - 1)
    }

    render() {
        return (
             <div>
                 <div className="cookies">Cookies num: {this.state.cookieNum}</div>
                 <div className="cookies">autocl: {this.state.autoclickers.length}</div>
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
