import React, {Component} from 'react';
import PlayingCard from './PlayingCard';
import PayoutTable from './PayoutTable';
import './index.css';


class GameWrapper extends Component {

  constructor (props) {
    super(props);
    this.state = {
      curr_cards: [53,53,53,53,53],
      prev_cards: [53,53,53,53,53],
      held: ['HOLD','HOLD','HOLD','HOLD','HOLD'],
      credit: 2
    }

    this.swapCards = this.swapCards.bind(this);
    this.clickCard = this.clickCard.bind(this);
    setTimeout(this.swapCards, 2500);
  }


  swapCards() {
    let prev = this.state.curr_cards;
    this.setState({
      curr_cards: [35,36,37,38,39],
      prev_cards: prev
    });
  }

  clickCard(e) {
    let id = e.currentTarget.getAttribute("data");
    let held = this.state.held;
    held[id] = held[id] == 'HOLD' ? '' : 'HOLD';
    this.setState({
      held : held
    })
  }

  render() {
    return(
      <div id={"game_wrapper"}>
        <PayoutTable/>
        <div id={"card_row"}>
        {this.state.curr_cards.map((curr, idx) => (
          <PlayingCard key={idx} datakey={idx}
                       newval={curr}
                       oldval={this.state.prev_cards[idx]}
                       clicked={this.clickCard}
                       held={this.state.held[idx]}
          />
          )
        )}
        </div>
        <div id={"credit_row"}>
          <div id={"credit_amount"}>{this.state.credit}</div>
          <div id={"credit_text"}>CREDITS</div>
        </div>
      </div>
    )
  }
}

export default GameWrapper;
