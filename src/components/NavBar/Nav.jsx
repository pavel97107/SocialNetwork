import React from "react";
import s from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <a>My page</a>
      </div>
      <div className={`${s.item} ${s.active}`}>
        <a>News</a>
      </div>
      <div className={s.item}>
        <a>Message</a>
      </div>
      <div className={s.item}>
        <a>Music</a>
      </div>
      <div className={s.item}>
        <a>Video</a>
      </div>
      <div className={s.item}>
        <a>Settings</a>
      </div>
    </nav>
  );
};

export default Nav;
