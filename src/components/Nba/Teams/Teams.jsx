import React from "react";
import s from './Teams.module.css';


const Teams = (props) => {
  // console.log(props,"props")
  return <div>
    <div className={s.item}>
      <div className={s.content}>
        <img src={props.logo} alt="" /><b>{props.id}</b><span> <b>{props.name}</b> </span>
      </div>

      <div>
        <span> MiddleHomePoints <b>{props.middleHomePoints} </b></span>
        <span> MiddleGuestPoints <b>{props.middleGuestPoints} </b></span>
      </div>

      <div>
        <span> HomeEnemyPoints <b>{props.middleHomeEnemyPoints} </b></span>
        <span> GuestEnemyPoints <b>{props.middleGuestEnemyPoints} </b></span>
      </div>

      <div>
        <span> HomeMore <b>{props.homeMore}% </b></span>
        <span> GuestMore <b>{props.guestMore}% </b></span>


      </div>
      <div>
        <span> HomeEnemy <b>{props.homeEnemy}% </b></span>
        <span> GuestEnemy <b>{props.guestEnemy}% </b></span>

      </div>


    </div>
  </div>
}

export default Teams;