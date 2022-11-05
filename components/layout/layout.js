import React from 'react';
import styles from "./layout.module.scss";
import Header from '../col/header';
import Main from '../col/main';
import Extra from '../col/extra';
import useWindowSize from '../../hooks/useWindowSize';
import CONST from '../../constants';

const Layout = ({ children }) => {
  const size = useWindowSize();
  return (
    <div className={styles.layout}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.main}>
        <Main />
        {
          size.width > CONST.BREAKPOINT && (
            <div className={styles.extra}>
              <Extra />
            </div>
          )
        }
      </div>
    </div>
  );
};

export default Layout;