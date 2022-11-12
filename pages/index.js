import styles from '../styles/Home.module.scss';
import Layout from '../components/layout/layout';
import TweetBox from '../components/tweet-box';
import Header from '../components/header';

export default function Home() {
  return (
    <Layout >
      <div className={styles.main}>
        <div className={styles.content}>
          <Header text={"Home"} />
          <div className={styles.main}>
            <TweetBox />
          </div>
        </div>
      </div>
    </Layout>
  );
}
