import React from 'react';
import styled, { keyframes } from 'styled-components';
import './index.css';

export default function PlayingCard(props){

  var oldrow, oldcol, row, column, row_str, col_str;
  var old_row_str, old_col_str;

  oldrow = -(Math.floor(props.oldval/13) * 240);
  oldcol = -((props.oldval % 13) * 154);
  old_row_str = oldrow < 0 ? oldrow + "px " : "0 ";
  old_col_str = oldcol < 0 ? oldcol + "px" : "0";

  row = -(Math.floor(props.newval/13) * 240);
  column = -((props.newval % 13) * 154);
  row_str = row < 0 ? row + "px " : "0 ";
  col_str = column < 0 ? column + "px" : "0";

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
  var CardWrap = styled.div`
    float: left;
  `;

  var CardDiv;

  if (props.oldval !== props.newval) {
      CardDiv = styled.div`
      animation: 0.5s ${flip}
      animation-fill-mode: forwards;
    `
  }
  else
    CardDiv = styled.div``;

  var CardText = styled.div`
    height: 30px;
    padding-top: 5px;
    text-align: center;
    font-family: Verdana, monospace;
    font-weight: bold;
    font-size: 18px;
    color: white;
  `;

  return (
    <CardWrap>
      <CardText>{props.held}</CardText>
      <CardDiv className={"card_base "} data={props.datakey} onClick={props.clicked}/>
    </CardWrap>
  )

}
