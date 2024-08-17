import React from 'react';
import { Rings } from 'react-loader-spinner';
import styles from './Loader.module.css';

const Loader = () => {
  return (
    <div className={styles.loader}>
      <Rings color="#00BFFF" height={80} width={80} />
    </div>
  );
};

export default Loader;