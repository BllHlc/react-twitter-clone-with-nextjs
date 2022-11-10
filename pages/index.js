import styles from '../styles/Home.module.scss';
import Layout from '../components/layout/layout';
import { TimelineProp } from '../components/icons';
import TweetBox from '../components/tweet-box';

export default function Home() {
  return (
    <Layout >
      <div className={styles.main}>
        <div className={styles.content}>
          <div className={styles.title}>
            <h2>Home</h2>
            <span className={styles.icon}>
              <TimelineProp />
            </span>
          </div>
          <div className={styles.main}>
            <TweetBox />
          </div>
        </div>
      </div>
    </Layout>
  );
}
