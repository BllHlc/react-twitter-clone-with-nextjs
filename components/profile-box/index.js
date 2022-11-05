import React from 'react';
import styles from './style.module.scss';
import cn from 'classnames';
import Photo from '../photo';
import { TreeDot } from '../icons';


const ProfileBox = ({ flat = false, name = 'Bilal Halıcı', slug = 'bllhlc' }) => {
  return (
    <div className={cn([styles.box])}>
      <Photo size={39} />
      <div className={styles.info}>
        <span className={styles.name}>{name}</span>
        <span className={styles.slug}>@{slug}</span>
      </div>
      <TreeDot />
    </div>
  );
};
export default ProfileBox;
