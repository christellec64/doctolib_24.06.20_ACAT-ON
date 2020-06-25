import React from 'react';
import styles from './Home.module.css'
import logo from './img/logo.png';

function Home() {
  return (
    <div className={styles.containerLogo}>
      <div>
      <img src={logo} alt="logo app" className={styles.logo} />
      <p className={styles.title}>MediMe</p>
      </div>
    </div>
  );
}

export default Home;