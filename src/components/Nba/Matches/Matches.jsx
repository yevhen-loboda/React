import React from "react";
import s from '../Nba.module.css';

const Matches = (props) => {
  console.log(props, "props")
  return <div className={s.block}>
    <div className='stat'>
      <div className='stat'><span>Home more  </span><b>{props.statistic.procentHomeMore}%  </b>
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

    <div>
      <span>Betwen 0%-10% Home More </span><b>{props.statisticProcent.procent0_10.procentHomeMore}%  </b>
    </div>
    <div>
      <span>Betwen 0%-10% Guest More </span><b>{props.statisticProcent.procent0_10.procentGuestMore}%  </b>
    </div>
    <div>
      <span>Betwen 0%-10% Middle Home More </span><b>{props.statisticProcent.procent0_10.procentMiddleHomeMore}%  </b>
    </div>
    <div>
      <span>Betwen 0%-10% Middle Guest More </span><b>{props.statisticProcent.procent0_10.procentMiddleGuestMore}%  </b>
    </div>

    <div>
      <span>Betwen 10%-20% Home More </span><b>{props.statisticProcent.procent10_20.procentHomeMore}%  </b>
    </div>
    <div>
      <span>Betwen 10%-20% Guest More </span><b>{props.statisticProcent.procent10_20.procentGuestMore}%  </b>
    </div>
    <div>
      <span>Betwen 10%-20% Middle Home More </span><b>{props.statisticProcent.procent10_20.procentMiddleHomeMore}%  </b>
    </div>
    <div>
      <span>Betwen 10%-20% Middle Guest More </span><b>{props.statisticProcent.procent10_20.procentMiddleGuestMore}%  </b>
    </div>

    <div>
      <span>Betwen 20%-30% Home More </span><b>{props.statisticProcent.procent20_30.procentHomeMore}%  </b>
    </div>
    <div>
      <span>Betwen 20%-30% Guest More </span><b>{props.statisticProcent.procent20_30.procentGuestMore}%  </b>
    </div>
    <div>
      <span>Betwen 20%-30% Middle Home More </span><b>{props.statisticProcent.procent20_30.procentMiddleHomeMore}%  </b>
    </div>
    <div>
      <span>Betwen 20%-30% Middle Guest More </span><b>{props.statisticProcent.procent20_30.procentMiddleGuestMore}%  </b>
    </div>

    <div>
      <span>Betwen 30%-40% Home More </span><b>{props.statisticProcent.procent30_40.procentHomeMore}%  </b>
    </div>
    <div>
      <span>Betwen 30%-40% Guest More </span><b>{props.statisticProcent.procent30_40.procentGuestMore}%  </b>
    </div>
    <div>
      <span>Betwen 30%-40% Middle Home More </span><b>{props.statisticProcent.procent30_40.procentMiddleHomeMore}%  </b>
    </div>
    <div>
      <span>Betwen 30%-40% Middle Guest More </span><b>{props.statisticProcent.procent30_40.procentMiddleGuestMore}%  </b>
    </div>

    <div>
      <span>Betwen 40%-50% Home More </span><b>{props.statisticProcent.procent40_50.procentHomeMore}%  </b>
    </div>
    <div>
      <span>Betwen 40%-50% Guest More </span><b>{props.statisticProcent.procent40_50.procentGuestMore}%  </b>
    </div>
    <div>
      <span>Betwen 40%-50% Middle Home More </span><b>{props.statisticProcent.procent40_50.procentMiddleHomeMore}%  </b>
    </div>
    <div>
      <span>Betwen 40%-50% Middle Guest More </span><b>{props.statisticProcent.procent40_50.procentMiddleGuestMore}%  </b>
    </div>

    <div>
      <span>Betwen 50%-60% Home More </span><b>{props.statisticProcent.procent50_60.procentHomeMore}%  </b>
    </div>
    <div>
      <span>Betwen 50%-60% Guest More </span><b>{props.statisticProcent.procent50_60.procentGuestMore}%  </b>
    </div>
    <div>
      <span>Betwen 50%-60% Middle Home More </span><b>{props.statisticProcent.procent50_60.procentMiddleHomeMore}%  </b>
    </div>
    <div>
      <span>Betwen 50%-60% Middle Guest More </span><b>{props.statisticProcent.procent50_60.procentMiddleGuestMore}%  </b>
    </div>

    <div>
      <span>Betwen 60%-70% Home More </span><b>{props.statisticProcent.procent60_70.procentHomeMore}%  </b>
    </div>
    <div>
      <span>Betwen 60%-70% Guest More </span><b>{props.statisticProcent.procent60_70.procentGuestMore}%  </b>
    </div>
    <div>
      <span>Betwen 60%-70% Middle Home More </span><b>{props.statisticProcent.procent60_70.procentMiddleHomeMore}%  </b>
    </div>
    <div>
      <span>Betwen 60%-70% Middle Guest More </span><b>{props.statisticProcent.procent60_70.procentMiddleGuestMore}%  </b>
    </div>

    <div>
      <span>Betwen 70%-80% Home More </span><b>{props.statisticProcent.procent70_80.procentHomeMore}%  </b>
    </div>
    <div>
      <span>Betwen 70%-80% Guest More </span><b>{props.statisticProcent.procent70_80.procentGuestMore}%  </b>
    </div>
    <div>
      <span>Betwen 70%-80% Middle Home More </span><b>{props.statisticProcent.procent70_80.procentMiddleHomeMore}%  </b>
    </div>
    <div>
      <span>Betwen 70%-80% Middle Guest More </span><b>{props.statisticProcent.procent70_80.procentMiddleGuestMore}%  </b>
    </div>

    <div>
      <span>Betwen 80%-90% Home More </span><b>{props.statisticProcent.procent80_90.procentHomeMore}%  </b>
    </div>
    <div>
      <span>Betwen 80%-90% Guest More </span><b>{props.statisticProcent.procent80_90.procentGuestMore}%  </b>
    </div>
    <div>
      <span>Betwen 80%-90% Middle Home More </span><b>{props.statisticProcent.procent80_90.procentMiddleHomeMore}%  </b>
    </div>
    <div>
      <span>Betwen 80%-90% Middle Guest More </span><b>{props.statisticProcent.procent80_90.procentMiddleGuestMore}%  </b>
    </div>

    <div>
      <span>Betwen 90%-100% Home More </span><b>{props.statisticProcent.procent90_100.procentHomeMore}%  </b>
    </div>
    <div>
      <span>Betwen 90%-100% Guest More </span><b>{props.statisticProcent.procent90_100.procentGuestMore}%  </b>
    </div>
    <div>
      <span>Betwen 90%-100% Middle Home More </span><b>{props.statisticProcent.procent90_100.procentMiddleHomeMore}%  </b>
    </div>
    <div>
      <span>Betwen 90%-100% Middle Guest More </span><b>{props.statisticProcent.procent90_100.procentMiddleGuestMore}%  </b>
    </div>

    <div>
      <span>Betwen 100%-101% Home More </span><b>{props.statisticProcent.procent100_101.procentHomeMore}%  </b>
    </div>
    <div>
      <span>Betwen 100%-101% Guest More </span><b>{props.statisticProcent.procent100_101.procentGuestMore}%  </b>
    </div>
    <div>
      <span>Betwen 100%-101% Middle Home More </span><b>{props.statisticProcent.procent100_101.procentMiddleHomeMore}%  </b>
    </div>
    <div>
      <span>Betwen 100%-101% Middle Guest More </span><b>{props.statisticProcent.procent100_101.procentMiddleGuestMore}%  </b>
    </div>



  </div>
}

export default Matches;






