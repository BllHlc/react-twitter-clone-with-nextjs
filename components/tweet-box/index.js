import { useEffect, useState } from 'react';
import { writeUserData } from "../../constants/firebase";


import styles from './style.module.scss';
import TextareaAutosize from 'react-textarea-autosize';
import { Media, Gif, Poll, Emoji, Schedule, Location } from "../icons";
import TweetButton from '../tweet-button';
import Photo from '../photo';

const TweetBox = () => {
  const [tweets, setTweets] = useState([]);

  const handleAddTweet = async (e) => {
    e.preventDefault();
    // writeUserData("2", "bilal", "test@test.com", "test123", tweets);
    setTweets("");
  };


  return (
    <div className={styles.tweetBox}>
      <div className={styles.photo}>
        <Photo size={48} />
      </div>
      <div className={styles.form}>
        <form onSubmit={handleAddTweet}>
          <TextareaAutosize
            placeholder="What’s happening?"
            maxLength="280"
            value={tweets}
            onChange={(e) => setTweets(e.target.value)}
          />
          <footer>
            <div className={styles.icons}>
              <div className={styles.icon}>
                <Media />
              </div>
              <div className={styles.icon}>
                <Gif />
              </div>
              <div className={styles.icon}>
                <Poll />
              </div>
              <div className={styles.icon}>
                <Emoji />
              </div>
              <div className={styles.icon}>
                <Schedule />
              </div>
              <div className={styles.icon}>
                <Location />
              </div>
            </div>
            <TweetButton
              className={styles.tweetButton}
              disabled={tweets.length === 0}
            >
              Tweet
            </TweetButton>
          </footer>
        </form>
      </div>
    </div>
  );
};

export default TweetBox;