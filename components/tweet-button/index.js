import React from 'react';
import cn from 'classnames';
import styles from './style.module.scss';
import useWindowSize from '../../hooks/useWindowSize';
import CONST from '../../constants';
import { Tweet } from '../icons';

function TweetButton({ className, children, big = false, ...props }) {
  const [isMobile, setIsMobile] = React.useState(false);
  const size = useWindowSize();

  React.useEffect(() => {
    size.width > CONST.DESKTOP_SIZE ? setIsMobile(false) : setIsMobile(true);
  }, [size.width]);


  return (
    <button
      className={cn(styles.button, big && styles.bigButton, className)}
      {...props}
    >
      {isMobile && big ? <Tweet /> : children}
    </button>
  );
}

export default TweetButton;
