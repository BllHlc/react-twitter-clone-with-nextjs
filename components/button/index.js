import React from "react";
import styles from "../../styles/button.module.scss";

const Button = ({ children }) => {
  return (
    <button className={styles.button} type="button">
      {children}
    </button>
  );
};

export default Button;
