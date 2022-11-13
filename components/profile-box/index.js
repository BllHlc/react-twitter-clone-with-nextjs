import React from 'react';
import styles from './style.module.scss';
import cn from 'classnames';
import Photo from '../photo';
import { TreeDot } from '../icons';
import { useMainContext } from '../../context';

const ProfileBox = ({ flat = false, name = 'Bilal Halıcı', slug = 'bllhlc', img }) => {
  const { logout } = useMainContext();

  return (
    <div className={cn([styles.box])}>
      <Photo size={39} src={img} />
      <div className={styles.info}>
        <span className={styles.name}>{name}</span>
        <span className={styles.slug}>@{slug}</span>
      </div>
      <button
        className={styles.button}
        onClick={logout}
      >
        <TreeDot />
      </button>
    </div>
  );
};
export default ProfileBox;
