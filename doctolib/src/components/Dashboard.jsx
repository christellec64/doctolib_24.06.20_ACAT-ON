import React from 'react';
import Navbar from './Navbar';
import ContentDashboard from './ContentDashboard';
import Footer from './Footer';


function Dashboard() {
  return (
    <div>
      <Navbar />
      <ContentDashboard />
      <Footer />
    </div>
  );
}

export default Dashboard;