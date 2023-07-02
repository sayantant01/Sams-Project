import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';

const Reserve = () => {
  const [tables, setTables] = useState([]);

  useEffect(() => {
    fetchTables();
  }, []);

  const fetchTables = () => {
    fetch('your-api-endpoint-for-tables')
      .then(response => response.json())
      .then(data => setTables(data))
      .catch(error => {
        console.error('Error fetching tables:', error);
      });
  };

  const [date, setDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [userId, setUserId] = useState('');
  const [tableId, setTableId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const reservation = {
      date,
      startTime,
      endTime,
      userId,
      tableId
    };

    fetch('your-api-endpoint-for-reservations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(reservation)
    })
      .then(response => response.json())
      .then(data => {
        console.log('Reservation submitted:', data);
        // Reset the form fields
        setDate('');
        setStartTime('');
        setEndTime('');
        setUserId('');
        setTableId('');
      })
      .catch(error => {
        console.error('Error submitting reservation:', error);
      });
  };

  return (
    <div>
      <Navbar />
      <div className='container'>
        <h1>Table Details</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Table Number</th>
              <th>Capacity</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {tables.map(table => (
              <tr key={table.id}>
                <td>{table.number}</td>
                <td>{table.capacity}</td>
                <td>{table.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="container">
        <h1>Reservation Form</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="date" className="form-label">Date:</label>
            <input
              type="date"
              id="date"
              className="form-control"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="startTime" className="form-label">Start Time:</label>
            <input
              type="time"
              id="startTime"
              className="form-control"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="endTime" className="form-label">End Time:</label>
            <input
              type="time"
              id="endTime"
              className="form-control"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="userId" className="form-label">User ID:</label>
            <input
              type="text"
              id="userId"
              className="form-control"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="tableId" className="form-label">Table ID:</label>
            <input
              type="text"
              id="tableId"
              className="form-control"
              value={tableId}
              onChange={(e) => setTableId(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Reserve;