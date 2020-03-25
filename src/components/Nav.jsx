import React from "react";
import s from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <a>Profile1</a>
      </div>
      <div className={`${s.item} ${s.active}`}>
        <a>Profile1</a>
      </div>
      <div className={s.item}>
        <a>Profile1</a>
      </div>
      <div className={s.item}>
        <a>Profile1</a>
      </div>
      <div className={s.item}>
        <a>Profile1</a>
      </div>
      <div className={s.item}>
        <a>Profile1</a>
      </div>
    </nav>
  );
};

export default Nav;
