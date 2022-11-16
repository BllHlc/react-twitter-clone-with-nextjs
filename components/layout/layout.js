import React from 'react';
import styles from "./layout.module.scss";
import Sidebar from '../col/sidebar';
import Main from '../col/main';
import Aside from '../col/aside';
import useWindowSize from '../../hooks/useWindowSize';
import CONST from '../../constants';
import { Timeline } from 'react-twitter-widgets';
import { useMainContext } from '../../context';
import Head from 'next/head';

const Layout = ({ children, title = "Öz Twitter" }) => {
  const [isMobile, setIsMobile] = React.useState(false);
  const size = useWindowSize();
  const { login } = useMainContext();

  React.useEffect(() => {
    size.width > CONST.TABLET_SIZE ? setIsMobile(false) : setIsMobile(true);
  }, [size.width]);

  return (
    <div className={styles.layout}>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={styles.header}>
        <Sidebar />
      </div>
      <div className={styles.main}>
        <Main>
          {
            login ? children :
              <Timeline
                dataSource={{
                  sourceType: 'profile',
                  screenName: 'elonmusk'
                }}
                options={{
                  height: 'auto',
                }}
              />
          }
        </Main>
        {!isMobile && <Aside login={login} />}
      </div>
    </div>
  );
};

export default Layout;