import React from 'react';
import styles from './Dashboard.module.css'
import logo from './img/logo.png';

function Dashboard() {
  return (
    <div>
      <div className={styles.navbar}>
        <ul className={styles.listItem}>
          <li className={styles.Item}><img src={logo} alt='logo app' />MediMe</li>
          <li className={styles.Item}>MediMe</li>
        </ul>
      </div>

    </div>
  );
}

export default Dashboard;