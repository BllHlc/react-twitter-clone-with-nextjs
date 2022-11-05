import React from 'react';
import Navigation from '../../components/navigation';
import TweetButton from '../../components/tweet-button';
import ProfileBox from '../profile-box';
import styles from "./header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <Navigation />
      <TweetButton big>Tweet</TweetButton>
      <ProfileBox />
    </div>
  );
};

export default Header;