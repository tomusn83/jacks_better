import React, {Component} from 'react';
import styled, { keyframes } from 'styled-components';
import './index.css';

class PlayingCard extends Component{

  render() {
    var oldrow, oldcol, row, column, row_str, col_str;
    var old_row_str, old_col_str;
    console.log('render', this.props);

    oldrow = -(Math.floor(this.props.oldval/13) * 240);
    oldcol = -((this.props.oldval % 13) * 154);
    old_row_str = oldrow < 0 ? oldrow + "px " : "0 ";
    old_col_str = oldcol < 0 ? oldcol + "px" : "0";

    row = -(Math.floor(this.props.newval/13) * 240);
    column = -((this.props.newval % 13) * 154);
    row_str = row < 0 ? row + "px " : "0 ";
    col_str = column < 0 ? column + "px" : "0";

    //const style = {backgroundPosition: col_str + " " + row_str};
    const flip = keyframes`
    0% { 
      transform: rotateY(0deg);
      background-position: ${old_col_str} ${old_row_str}
    }
    50% {
      transform: rotateY(90deg);
      background-position: ${old_col_str} ${old_row_str}
    }
    50.1% {
      background-position: ${col_str} ${row_str}
    }
    100% {
      transform: rotateY(0deg);
      background-position: ${col_str} ${row_str}
    }
  `
    const CardDiv = styled.div`
    animation: 0.5s ${flip}
    animation-fill-mode: forwards;
  `

    return (
      <CardDiv className={"card_base "}
               onClick={this.doFlip}
      />
    );
  }

}

export default PlayingCard;
