import React, { Component } from 'react';
import Coin from './Coin';
import { choice } from './helpers';

class CoinContainer extends Component {
// defaultProps is where you store things that are not gonna change, Static    
    static defaultProps = {
        coins: [
        { side: 'heads', imgSrc: "https://tinyurl.com/react-coin-heads-jpg" },
        { side: 'tails', imgSrc: "https://tinyurl.com/react-coin-tails-jpg" }
        ]
    }

    constructor(props) {
        super(props);
        this.state = {
            currCoin: null,
            numFlips: 0,
            numHeads: 0,
            numTails: 0
        }
        this.handleClick = this.handleClick.bind(this)
    }

    flipCoin() {
        const newCoin = choice(this.props.coins);
// st is the old state
        this.setState(st => {
            return {
                currCoin: newCoin,
                numFlips: st.numFlips + 1,
                numHeads: st.numHeads + ( newCoin.side === 'heads' ? 1:0 ),
                numTails: st.numTails + ( newCoin.side === 'tails' ? 1:0 )
            }
        })

    }

    handleClick(e) {
        this.flipCoin();
    }

    render() {
        return (
            <div className='CoinContainer'>
                <h2>Flip a Coin!!</h2>
                <button onClick={this.handleClick}>Flip</button>
                {this.state.currCoin && <Coin info={this.state.currCoin} />}
                <p>Out of {this.state.numFlips}, There have been {this.state.numHeads} Heads and {this.state.numTails} Tails</p>
            </div>
        )
    }
}

export default CoinContainer
