import React from "react";
import s from '../Nba.module.css';

const Matches = (props) => {
    // console.log(props,"props")
  return <div className={s.block}>
    <div className={s.item}>
    <div><span>Home more  </span><b>{props.statistic.procentHomeMore}%  </b>
    {props.statistic.homeMore}/{props.statistic.numberOfMatches}</div>
    <div><span>Guest more </span><b>{props.statistic.procentGuestMore}%  </b>
    {props.statistic.guestMore}/{props.statistic.numberOfMatches}</div>
    <div><span>Total more </span><b>{props.statistic.procentTotalMore}%  </b>
    </div>
    <div><span>Both teams more </span><b>{props.statistic.procentBothMore}%  </b>
    {props.statistic.bothMore}/{props.statistic.numberOfMatches}</div>
    <div><span>Both team less </span><b>{props.statistic.procentBothLess}%  </b>
    {props.statistic.bothLess}/{props.statistic.numberOfMatches}</div>
    <div><span>One team more and second team less </span><b>{props.statistic.procentMoreLess}%  </b>
    {props.statistic.moreLess}/{props.statistic.numberOfMatches}</div>
    </div>
    

  </div>
}      

export default Matches;






  