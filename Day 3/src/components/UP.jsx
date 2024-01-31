// UserDashboard.js
import React from 'react';

const UserDashboard = () => {
  const dashboardStyle = {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  };

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '20px',
  };

  const sectionStyle = {
    width: '48%',
  };

  const marginBottom10 = {
    marginBottom: '10px',
  };

  return (
    <div style={dashboardStyle}>
      <header style={headerStyle}>
        <h1>User Dashboard</h1>
      </header>
      <main style={{ display: 'flex', justifyContent: 'space-between' }}>
        <section style={sectionStyle}>
          <h2 style={marginBottom10}>User Information</h2>
          {/* Display user information here */}
        </section>
        <section style={sectionStyle}>
          <h2 style={marginBottom10}>Dashboard Widgets</h2>
          {/* Add your dashboard widgets here */}
        </section>
      </main>
    </div>
  );
};

export default UserDashboard;
