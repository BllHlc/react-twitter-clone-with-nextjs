import React from 'react';
import styles from "./layout.module.scss";
import Header from '../col/header';
import Main from '../col/main';
import Extra from '../col/extra';
import useWindowSize from '../../hooks/useWindowSize';
import CONST from '../../constants';

const Layout = ({ children }) => {
  const [isMobile, setIsMobile] = React.useState(false);
  const size = useWindowSize();

  React.useEffect(() => {
    size.width > CONST.TABLET_SIZE ? setIsMobile(false) : setIsMobile(true);
  }, [size.width]);

  return (
    <div className={styles.layout}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.main}>
        <Main>{children}</Main>
        {!isMobile && <Extra />}
      </div>
    </div>
  );
};

export default Layout;