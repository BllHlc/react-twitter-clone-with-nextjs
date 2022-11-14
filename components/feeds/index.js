import React from 'react';
import styles from './style.module.scss';
import { useMainContext } from '../../context';
import Image from 'next/image';
import { BlueTick } from '../icons';

const Feeds = () => {
  const { tweets } = useMainContext();
  tweets?.sort((a, b) => b.date - a.date);

  return (
    <div className={styles.feeds}>
      {tweets && tweets.map((tweet) => {
        return (
          <div className={styles.feed} key={tweet.id}>
            <div className={styles.header}>
              <div className={styles.left}>
                <Image
                  width={47}
                  height={47}
                  src={tweet.photo}
                  alt={tweet.user}
                  style={{ borderRadius: '99px' }}
                />
                <div className={styles.name}>
                  <div>{tweet.user}</div>
                  <span className={styles.icon}>
                    <BlueTick />
                  </span>
                  <div>@{tweet.slug}</div>
                </div>
              </div>
              <div className={styles.feed__header__right}>
                <i className="fas fa-ellipsis-h"></i>
              </div>
            </div>
            <div className={styles.feed__body}>
              <p>{tweet.tweet}</p>
            </div>
            <div className={styles.feed__footer}>
              <div className={styles.feed__footer__left}>
                <i className="far fa-comment"></i>
                <p>{tweet.comments}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Feeds;