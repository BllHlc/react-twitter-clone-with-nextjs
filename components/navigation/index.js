import { useRouter } from 'next/router';
import { MENU } from "../../constants";
import styles from "./navigation.module.scss";
import cn from "classnames";
import Link from 'next/link';

const Navigation = () => {
  const router = useRouter();

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

          // className={selected ? "selected" : ""}
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
    </nav >
  );
};

export default Navigation;
