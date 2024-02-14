import React, { useState } from 'react';

import '../components/Admin1/Udash.css';

function Udash() {
  // Sample upcoming events data
  const [upcomingEvents, setUpcomingEvents] = useState([
    {
      id: 1,
      title: 'STARTER',
      date: '2024-02-15',
      description: '10',
    },
    {
      id: 2,
      title: 'STARTER',
      date: '2024-02-16',
      description: '9',
    },
    {
      id: 3,
      title: 'STARTER',
      date: '2024-02-17',
      description: '25',
    },
  
  ]);

  const [editId, setEditId] = useState(null);

  const handleEdit = (id) => {
    setEditId(id);
  };

  const handleSave = (id) => {
    setEditId(null);
    // You can add logic here to save the edited data, e.g., make an API call
  };

  const handleInputChange = (id, field, value) => {
    const updatedEvents = upcomingEvents.map((event) =>
      event.id === id ? { ...event, [field]: value } : event
    );
    setUpcomingEvents(updatedEvents);
  };

  return (
    <div className="admin-container">
     
      <div className="admin-content">
        <h1>User Dashboard</h1>
        {/* Upcoming Events Table */}
        <div className="upcoming-events-box">
          <h2>Course Enrolled</h2>
          {upcomingEvents.length === 0 ? (
            <p>No upcoming events</p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Course</th>
                  <th>Last Active Date</th>
                  <th>Pending lesson</th>
                </tr>
              </thead>
              <tbody>
                {upcomingEvents.map((event) => (
                  <tr key={event.id}>
                    <td>
                      {editId === event.id ? (
                        <input
                          type="text"
                          value={event.title}
                          onChange={(e) => handleInputChange(event.id, 'title', e.target.value)}
                        />
                      ) : (
                        event.title
                      )}
                    </td>
                    <td>
                      {editId === event.id ? (
                        <input
                          type="text"
                          value={event.date}
                          onChange={(e) => handleInputChange(event.id, 'date', e.target.value)}
                        />
                      ) : (
                        event.date
                      )}
                    </td>
                    <td>
                      {editId === event.id ? (
                        <input
                          type="text"
                          value={event.description}
                          onChange={(e) => handleInputChange(event.id, 'description', e.target.value)}
                        />
                      ) : (
                        event.description
                      )}
                    </td>
                    
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
        {/* Add the rest of your admin content here */}
      </div>
    </div>
  );
}

export default Udash;