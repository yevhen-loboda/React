import React from "react";
import s from './Header.module.css';
import { NavLink } from "react-router-dom";


const Header = (props) => {
    return <header className={s.header}>
    <img src = 'https://marketplace.canva.com/EAFauoQSZtY/1/0/1600w/canva-brown-mascot-lion-free-logo-qJptouniZ0A.jpg' alt="Lion King"></img>
    <div className={s.loginBlock}>{props.isAuth ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>: 
      <NavLink to={'/login'}>Login</NavLink>
    }
    </div>
  </header>
}

export default Header;