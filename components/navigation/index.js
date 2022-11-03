import React from "react";
import NavButton from "../button/nav-button";
import {
  Bookmark,
  Explore,
  Home,
  Lists,
  Messages,
  More,
  Notification,
  Profile,
  Twitter,
} from "../icons";
import styles from "./navigation.module.scss";

const Navigation = (selected) => {
  return (
    <nav className={styles.nav}>
      <NavButton>
        <Twitter />
      </NavButton>
      <NavButton selected={"home"}>
        <Home />
        <span className="titleBold">Home</span>
      </NavButton>
      <NavButton selected={selected === "explore"}>
        <Explore />
        <span className="titleBold" >Explore</span>
      </NavButton>
      <NavButton notify={17} selected={selected === "notification"}>
        <Notification />
        <span className="titleBold">Notification</span>
      </NavButton>
      <NavButton selected={selected === "messages"}>
        <Messages />
        <span className="titleBold">Messages</span>
      </NavButton>
      <NavButton selected={selected === "bookmark"}>
        <Bookmark />
        <span className="titleBold" >Bookmark</span>
      </NavButton>
      <NavButton selected={selected === "list"}>
        <Lists />
        <span className="titleBold" >Lists</span>
      </NavButton>
      <NavButton selected={selected === "profile"}>
        <Profile />
        <span className="titleBold" >Profile</span>
      </NavButton>
      <NavButton selected={selected === "more"}>
        <More />
        <span className="titleBold" >More</span>
      </NavButton>
    </nav>
  );
};

export default Navigation;
