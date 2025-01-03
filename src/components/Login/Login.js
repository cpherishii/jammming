import React from 'react';
import styles from './Login.module.css';

const Login = () => {
    return (
        <div className={styles.Login}>
            <h1>Log in to your Spotify account:</h1>
            <input className={styles.LoginInput} placeholder="Enter your Spotify username" />
            <input className={styles.LoginInput} placeholder="Enter your Spotify password" type="password" />
            <button className={styles.LoginButton}>LOG IN</button>
        </div>
    );
};

export default Login;