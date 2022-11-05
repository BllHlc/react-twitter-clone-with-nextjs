import styles from '../styles/Home.module.scss';
import { ArrowDown, Bookmark } from "../components/icons";
import Navigation from '../components/navigation';
import Layout from '../components/layout/layout';

export default function Home() {
  return (
    <div className={styles.container}>
      <Layout />
    </div>
  );
}
