import React from 'react';
import './index.css';

let payout_data = [
  {hand: "ROYAL FLUSH", payout: 250},
  {hand: "STRAIGHT FLUSH", payout: 50},
  {hand: "FOUR OF A KIND", payout: 25},
  {hand: "FULL HOUSE", payout: 9},
  {hand: "FLUSH", payout: 6},
  {hand: "STRAIGHT", payout: 4},
  {hand: "THREE OF A KIND", payout: 3},
  {hand: "TWO PAIR", payout: 2},
  {hand: "JACKS OR BETTER", payout: 1}
];

export default function PayoutTable(props) {

  return(
    <div id={'payout_table_wrap'}>
    <table id={'payout_table'}><tbody>

      {payout_data.map( (curr, idx) => (
        <tr key={idx}>
          <td>{curr.hand}</td>
          <td className={'payout_num'}>{curr.payout}</td>
        </tr>
      ))}
    </tbody>
    </table>
    </div>

  );
}
