import React, {Component} from 'react';
import PlayingCard from './PlayingCard';
import './index.css';


class GameWrapper extends Component {

  constructor (props) {
    super(props);
    this.state = {
      curr_cards: [0,1,14,16,53],
      prev_cards: []
    }

    this.swapCards = this.swapCards.bind(this);
    setTimeout(this.swapCards, 2500);
  }


  swapCards() {
    let prev = this.state.curr_cards;
    this.setState({
      curr_cards: [48,49,50,51,39],
      prev_cards: prev
    });
  }

  render() {
    return(
      <div id={"game_wrapper"}>
        <div id={"card_row"}>
        {this.state.curr_cards.map((curr, idx) => (
          <PlayingCard key={idx}
                       newval={curr}
                       oldval={this.state.prev_cards[idx]}
          />
          )
        )}
        </div>
      </div>
    )
  }
}

export default GameWrapper;
