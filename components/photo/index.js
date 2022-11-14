import React from 'react';
import cn from 'classnames';
import styles from './style.module.scss';
import { useMainContext } from '../../context';
import Image from 'next/image';

const Photo = ({
  src = 'https://avatars2.githubusercontent.com/u/187922?s=200',
  alt,
  size = 47
}) => {
  const { user } = useMainContext();
  src = user ? user.photoURL : src;

  return (
    <div className={cn([styles.photo])} style={{ width: size, height: size }}>
      <Image src={src} alt={alt} width={size} height={size} style={{ borderRadius: '99px' }} />
    </div>
  );
};
export default Photo;
