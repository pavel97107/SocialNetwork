import React from "react";
import s from "./Nav.module.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink  className={s.navLink} to="/profile" activeClassName={s.active}>
          Profile
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink className={s.navLink} to="/news" activeClassName={s.active}>
          News
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink className={s.navLink} to="/dialogs" activeClassName={s.active}>
          Message
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink className={s.navLink} to="/music" activeClassName={s.active}>
          Music
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink className={s.navLink} to="/settings" activeClassName={s.active}>
          Settings
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;
