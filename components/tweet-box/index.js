import { useState } from 'react';
import styles from './style.module.scss';
import TextareaAutosize from 'react-textarea-autosize';
import { Media, Gif, Poll, Emoji, Schedule, Location } from "../icons";
import TweetButton from '../tweet-button';
import Photo from '../photo';
import { useMainContext } from "../../context";

const TweetBox = () => {
  const [tweets, setTweets] = useState([]);
  const { addTweet } = useMainContext();

  const handleAddTweet = async (e) => {
    e.preventDefault();
    const input = e.target.elements[0];
    const tweet = input.value;
    addTweet(tweet);
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