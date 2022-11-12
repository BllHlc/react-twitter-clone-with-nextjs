import React, { useRef } from 'react';
import styles from "./aside.module.scss";
import { Search } from "../icons";
import { Timeline } from 'react-twitter-widgets';

const Aside = () => {

  return (
    <div className={styles.aside}>
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
            screenName: 'elonmusk'
          }}
          options={{
            height: '1500',
          }}
        />
      </div>
    </div>
  );
};

export default Aside;