import React from 'react';
import cn from 'classnames';
import styles from './style.module.scss';
import useWindowSize from '../../hooks/useWindowSize';
import CONST from '../../constants';
import { Tweet } from '../icons';

function TweetButton({ className, children, big = false, ...props }) {
  const size = useWindowSize();

  return (
    <div
      className={cn(styles.button, big && styles.bigButton, className)}
      {...props}
    >
      {
        size.width < CONST.DESKTOP_SIZE ?
          <Tweet className={styles.icon} /> :
          children
      }
    </div>
  );
}

export default TweetButton;
