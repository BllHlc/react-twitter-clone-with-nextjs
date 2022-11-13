import React from 'react';
import cn from 'classnames';
import styles from './style.module.scss';
import { useMainContext } from '../../context';

const Photo = ({
  src = 'https://avatars2.githubusercontent.com/u/187922?s=200',
  alt,
  size = 47
}) => {
  const { user } = useMainContext();
  src = user ? user.photoURL : src;

  return (
    <div className={cn([styles.photo])} style={{ width: size, height: size }}>
      <img className={styles.img} src={src} alt={alt} />
    </div>
  );
};
export default Photo;
