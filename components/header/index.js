import React from 'react';
import { TimelineProp } from '../icons';
import styles from "./style.module.scss";

const Header = ({ text }) => {
  return (
    <div>
      <div className={styles.header}>
        <h2>{text}</h2>
        <span className={styles.icon}>
          <TimelineProp />
        </span>
      </div>
    </div>
  );
};

export default Header;