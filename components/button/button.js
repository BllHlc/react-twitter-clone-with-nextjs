import React from "react";
import styles from "./button.module.scss";
import cn from "classnames";

const Button = ({ children, className, ...props }) => {
  return (
    <button className={cn(styles.buttons, className)} {...props}>{children}</button>
  );
};

export default Button;
