import styles from '../styles/Home.module.scss';
import Layout from '../components/layout/layout';
import TweetBox from '../components/tweet-box';
import Header from '../components/header';
import Feeds from '../components/feeds';

export default function Home() {
  return (
    <Layout title="Home">
      <div className={styles.main}>
        <div className={styles.content}>
          <Header text={"Home"} />
          <div className={styles.main}>
            <TweetBox />
            <Feeds />
          </div>
        </div>
      </div>
    </Layout>
  );
}
