import React from 'react';
import Navbar from './Navbar';
import ContentDashboard from './ContentDashboard';
import Footer from './Footer';

import styles from './Dashboard.module.css';


function Dashboard() {
  return (
    <div className={styles.containerDashboard}>
      <div className={styles.content}>
      <Navbar title="My dashboard" />
      <ContentDashboard />
      </div>
      <Footer />
    </div>
  );
}

export default Dashboard;