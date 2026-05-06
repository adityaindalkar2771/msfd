import React, { useState, useEffect } from 'react';

const DataFetcher = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users?_limit=5')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch users');
        }
        return res.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div
      style={{
        background: '#0f3460',
        color: '#fff',
        padding: '40px',
        height: '100vh',
      }}
    >
      <h2>External User Registry</h2>

      {loading && <p>Loading users...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}

      {!loading && !error && (
        <div style={{ display: 'grid', gap: '10px' }}>
          {users.map((u) => (
            <div
              key={u.id}
              style={{
                background: '#16213e',
                padding: '15px',
                borderRadius: '8px',
                borderLeft: '4px solid #4ecca3',
              }}
            >
              {u.name} — {u.email}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DataFetcher; 