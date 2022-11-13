import React, { useState } from 'react';
import styles from "./login-box.module.scss";
import { Google } from "../icons";
import { useMainContext } from '../../context';

const LoginBox = () => {
  const [showModal, setShowModal] = useState(false);
  const { loginWithGoogle } = useMainContext();


  return (
    <div className={styles.loginBox}>
      <div className={styles.header}>
        <h2 className={styles.title}>New to Twitter?</h2>
        <p className={styles.text}>Sign up now to get your own personalized timeline!</p>
      </div>
      <div className={styles.buttons}>
        <button className={styles.button}>Sign up with phone or email</button>
        <button className={styles.button}>Log in with phone or email</button>
        <button
          className={styles.button}
          onClick={loginWithGoogle}
        >
          <Google />
          Log in with Google
        </button>
      </div>
    </div>
  );
};

export default LoginBox;