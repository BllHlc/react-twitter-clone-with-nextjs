import React from 'react';
import styles from "./aside.module.scss";
import { Search } from "../icons";
import { Timeline } from 'react-twitter-widgets';
import LoginBox from '../login/login-box';

const Aside = ({ login }) => {

  return (
    <div className={styles.aside}>
      {
        login ?
          <>
            <div className={styles.search}>
              <label>
                <span className={styles.icon}>
                  <Search />
                </span>
                <input type="text" placeholder="Search Twitter" className={styles.input} />
              </label>
            </div>
            <div className={styles.timeline}>
              <Timeline
                dataSource={{
                  sourceType: 'profile',
                  screenName: 'firatkalkinma'
                }}
                options={{
                  height: '1500',
                }}
              />
            </div>
          </> :
          <div className={styles.login}>
            <LoginBox />
          </div>
      }
    </div>
  );
};

export default Aside;