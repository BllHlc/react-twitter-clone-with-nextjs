import { useState } from 'react';
import styles from './style.module.scss';
import TextareaAutosize from 'react-textarea-autosize';
import { Media, Gif, Poll, Emoji, Schedule, Location, Close } from "../icons";
import TweetButton from '../tweet-button';
import Photo from '../photo';
import { useMainContext } from "../../context";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import EmojiPicker from 'emoji-picker-react';
import Image from 'next/image';

const TweetBox = () => {
  const [tweets, setTweets] = useState([]);
  const [image, setImage] = useState(null);
  const [emojiModal, setEmojiModal] = useState(false);
  const { addTweet } = useMainContext();

  const handleImage = (e) => {
    if (e.target.files[0]) {
      const storage = getStorage();
      const storageRef = ref(storage, `images/${e.target.files[0].name}`);
      const uploadTask = uploadBytesResumable(storageRef, e.target.files[0]);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          // console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        async () => {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          setImage(downloadURL);
        }
      );
    }
  };


  const handleTweet = (e) => {
    e.preventDefault();
    if (image) {
      addTweet(tweets, image);
    } else {
      addTweet(tweets, null);
    }
    e.target.tweet.value = "";
    e.target.image.value = "";
    setImage(null);
    setTweets([]);
  };

  return (
    <div className={styles.tweetBox}>
      <div className={styles.photo}>
        <Photo size={48} />
      </div>
      <div className={styles.form}>
        <form onSubmit={handleTweet}>
          <TextareaAutosize
            placeholder="What’s happening?"
            maxLength="280"
            name="tweet"
            value={tweets}
            onChange={(e) => setTweets(e.target.value)}
            onFocus={() => setEmojiModal(false)}
          />
          {image && (
            <div id='image' className={styles.image}>
              <div
                className={styles.close}
                onClick={() => setImage(null)}
              >
                <Close />
              </div>
              <Image src={image} width={500} height={500} alt='image' />
            </div>
          )}
          <footer>
            <div className={styles.icons}>
              <div className={styles.icon}>
                <label >
                  <Media />
                  <input
                    type="file"
                    name="image"
                    accept="image/png, image/gif, image/jpeg"
                    onChange={handleImage}
                  />
                </label>
              </div>
              <div className={styles.icon}>
                <Gif />
              </div>
              <div className={styles.icon}>
                <Poll />
              </div>
              <div className={styles.icon}>
                <Emoji
                  onClick={() => setEmojiModal(!emojiModal)}
                />
                {
                  emojiModal && (
                    <div className={styles.emojiModal}>
                      <EmojiPicker
                        onEmojiClick={(e) => {
                          setTweets(tweets + " " + e.emoji);
                          setEmojiModal(false);
                        }}
                      />
                    </div>
                  )
                }
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
              disabled={
                tweets.length === 0
                && image === null
              }
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