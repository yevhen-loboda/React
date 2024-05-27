import React from "react";
import s from './Nba.module.css';
import Teams from "./Teams/Teams";
import Matches from "./Matches/Matches";
import store from "../../redux/store";

const Nba = () => {
  let state = store.getState();
  // console.log(state,"state")
        let teamsElements = state.nbaPage.teams.map(el => <Teams id={el.id} name={el.name} logo={el.logo}
          homeMore={el.homeMore} guestMore={el.guestMore}
          homeEnemy={el.homeEnemy} guestEnemy={el.guestEnemy}
          middleHomePoints={el.middleHomePoints} middleGuestPoints={el.middleGuestPoints} 
          middleHomeEnemyPoints={el.middleHomeEnemyPoints} middleGuestEnemyPoints={el.middleGuestEnemyPoints}/>)
  return <div className={s.content}>
    <div>
      {teamsElements}
    </div>
    <div className={s.item}>
      <Matches  statistic={state.nbaPage.statistic} statisticProcent={state.nbaPage.statisticProcent}/>
    </div>
  </div>
}

export default Nba;