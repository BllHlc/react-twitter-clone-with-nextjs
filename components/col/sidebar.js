import { useState } from 'react';
import Navigation from '../navigation';
import TweetButton from '../tweet-button';
import ProfileBox from '../profile-box';
import styles from "./sidebar.module.scss";
import TweetBox from '../tweet-box';
import { Close } from '../icons';

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={styles.sidebar}>
      <Navigation />
      <TweetButton big onClick={() => setShowModal(true)}>Tweet</TweetButton>
      {
        showModal && (
          <div className={styles.modal}>
            <div className={styles.modalContent}>
              <div className={styles.close} onClick={() => setShowModal(false)}>
                <Close />
              </div>
              <TweetBox />
            </div>
            <div className={styles.overlay} onClick={() => setShowModal(false)} />
          </div>
        )
      }
      <ProfileBox />
    </div>
  );
};

export default Header;