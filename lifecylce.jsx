import React, { useState, useEffect } from 'react';
const LifecycleCounter = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = `Sync: ${count}`;
    }, [count]);
    return (
        <div style={styles.container}>
            <h1 style={styles.count}>{count}</h1>
            <p style={styles.text}>
                Check the browser tab title for sync status.
            </p>
            <button
                style={styles.button}
                onClick={() => setCount((prev) => prev + 1)}
            >
                Increment Pulse
            </button>
        </div>
    );
};
const styles = {
    container: {
        background: '#0f3460',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        fontFamily: 'Arial, sans-serif',
    },
    count: {
        fontSize: '90px',
        margin: 0,
    },
    text: {
        color: '#4ecca3',
        marginBottom: '20px',
    },
    button: {
        background: '#4ecca3',
        color: '#1a1a2e',
        border: 'none',
        padding: '12px 30px',
        borderRadius: '8px',
        cursor: 'pointer',
        fontWeight: 'bold',
        transition: '0.3s',
    },
};
export default LifecycleCounter;