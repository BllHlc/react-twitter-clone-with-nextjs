import React from 'react';
import styles from './style.module.scss';
import { useMainContext } from '../../context';
import Image from 'next/image';
import { BlueTick, TreeDot, Reply, Retweet, Like, Share } from '../icons';

const Feeds = () => {
  const { tweets } = useMainContext();
  tweets?.sort((a, b) => b.date - a.date);

  function getDate(date) {
    const d = new Date(date);
    const dateNow = new Date();
    const diff = dateNow - d;
    const diffInMonths = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
    const diffInWeeks = Math.floor(diff / (1000 * 60 * 60 * 24 * 7));
    const diffInDays = Math.floor(diff / (1000 * 60 * 60 * 24));
    const diffInHours = Math.floor(diff / (1000 * 60 * 60));
    const diffInMinutes = Math.floor(diff / (1000 * 60));

    if (diffInMonths > 0) {
      return new Date(date).toLocaleDateString('tr-TR', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      });
    }
    if (diffInWeeks > 0) {
      return `${diffInWeeks}w`;
    }
    if (diffInDays > 0) {
      return `${diffInDays}d`;
    }
    if (diffInHours > 0) {
      return `${diffInHours}h`;
    }
    if (diffInMinutes > 0) {
      return `${diffInMinutes}m`;
    }
    return 'now';
  }

  return (
    <div className={styles.feeds}>
      {tweets && tweets.map((tweet) => {
        return (
          <div className={styles.feed} key={tweet.id}>
            <section className={styles.left}>
              <Image
                width={48}
                height={48}
                src={tweet.photo}
                alt={tweet.user}
                style={{ borderRadius: '99px' }}
              />
            </section>
            <section className={styles.right}>
              <div className={styles.header}>
                <div>{tweet.user}</div>
                <span className={styles.icon}>
                  <BlueTick />
                </span>
                <div>@{tweet.slug}</div>
                <div className={styles.dot}>·</div>
                <div>{getDate(tweet.timestamp)}</div>
                <span className={styles.dots}>
                  <TreeDot />
                </span>
              </div>
              <div className={styles.body}>
                <div className={styles.text}>{tweet.tweet}</div>
                <div className={styles.image}>
                  {tweet.image && (
                    <div className={styles.imageContainer}>
                      <Image
                        width={500}
                        height={300}
                        src={tweet.image}
                        alt={tweet.user}
                      />
                    </div>
                  )}
                </div>
              </div>
              <div className={styles.footer}>
                <div className={styles.icons}>
                  <div className={styles.icon}>
                    <span className={styles.svg}></span>
                    <Reply />
                    {tweet.comments}
                  </div>
                  <div className={styles.icon}>
                    <span className={styles.svg}></span>
                    <Retweet />
                    {tweet.retweets}
                  </div>
                  <div className={styles.icon}>
                    <span className={styles.svg}></span>
                    <Like />
                    {tweet.likes}
                  </div>
                  <div className={styles.icon}>
                    <span className={styles.svg}></span>
                    <Share />
                  </div>
                </div>
              </div>
            </section>
          </div>
        );
      })}
    </div>
  );
};

export default Feeds;