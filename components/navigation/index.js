import { useRouter } from 'next/router';
import { MENU } from "../../constants";
import styles from "./navigation.module.scss";
import cn from "classnames";
import Link from 'next/link';
import * as Icon from '../icons';
import ThemeSelect from '../theme-select';
import { useState } from 'react';

const Navigation = () => {
  const [showModel, setShowModel] = useState(false);
  const router = useRouter();
  useState;

  return (
    <nav className={styles.nav}>
      {MENU.map((menu) => {
        const selected = router.pathname === menu.path;
        return (
          <Link
            key={menu.key}
            notify={menu.notify}
            selected={selected}
            href={menu.path}
            className={cn(styles.navButton, menu.key)}
          >
            <div className={styles.buttonContent}>
              <div className={styles.icon}>
                {selected ? menu.iconSelected : menu.icon}
                {menu.notify && (
                  <span className={styles.notify}>
                    {menu.notify}
                  </span>
                )}
              </div>
              {menu.title && (
                <div className={cn(styles.title, selected ? styles.selectedTitle : "")}>
                  {menu.title}
                </div>
              )}
            </div>
          </Link>
        );
      })}
      <button className={cn(styles.navButton, "more")}
        onClick={() => setShowModel(true)}
      >
        <div className={styles.buttonContent}>
          <div className={styles.icon}>
            <Icon.More />
          </div>
          <div className={styles.title}>More</div>
        </div>
      </button>
      {
        showModel && <ThemeSelect onClose={() => setShowModel(false)} />
      }
    </nav >
  );
};

export default Navigation;
