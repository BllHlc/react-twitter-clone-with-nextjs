import Photo from '../photo';
import styles from './style.module.scss';
import TextareaAutosize from 'react-textarea-autosize';
import { Media, Gif, Poll, Emoji, Schedule, Location } from "../icons";
import TweetButton from '../tweet-button';

const TweetBox = () => {
  return (
    <div className={styles.tweetBox}>
      <div className={styles.photo}>
        <Photo size={48} />
      </div>
      <div className={styles.form}>
        <form>
          <TextareaAutosize placeholder="What’s happening?" maxLength="280" />
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
            <TweetButton className={styles.tweetButton} disabled> Tweet </TweetButton>
          </footer>
        </form>
      </div>
    </div>
  );
};

export default TweetBox;