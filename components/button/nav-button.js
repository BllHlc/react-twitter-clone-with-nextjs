import React from "react";
import Button from "./button";
import styles from "./nav-button.module.scss";
import cn from "classnames";

const NavButton = ({ notify, selected, children, ...props }) => {
  return (
    <Button className={cn(styles.navButton, selected && styles.selected)} {...props}>
      {children}
      {notify && <span className={styles.notify}>{notify}</span>}
    </Button>
  );
};

export default NavButton;
