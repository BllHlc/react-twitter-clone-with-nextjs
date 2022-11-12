import React from 'react';
import styles from "./layout.module.scss";
import Sidebar from '../col/sidebar';
import Main from '../col/main';
import Aside from '../col/aside';
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
        <Sidebar />
      </div>
      <div className={styles.main}>
        <Main>{children}</Main>
        {!isMobile && <Aside />}
      </div>
    </div>
  );
};

export default Layout;