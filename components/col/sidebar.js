import { useState } from 'react';
import Navigation from '../navigation';
import TweetButton from '../tweet-button';
import ProfileBox from '../profile-box';
import styles from "./sidebar.module.scss";
import TweetBox from '../tweet-box';
import { Close } from '../icons';
import { useMainContext } from '../../context';

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const { user } = useMainContext();
  const { logout } = useMainContext();


  return (
    <div className={styles.sidebar}>
      <Navigation />
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
      {
        user &&
        <>
          <TweetButton big onClick={() => setShowModal(true)}>Tweet</TweetButton>
          <button className={styles.logout} onClick={logout}>
            <ProfileBox
              name={user.displayName}
              slug={user.displayName.split(" ")[0]}
              img={user.photoURL}
            />
          </button>
        </>
      }
    </div>
  );
};

export default Header;