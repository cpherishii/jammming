import React from 'react';
import styles from './Login.module.css';

const Login = () => {
    const CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
    const REDIRECT_URI = 'http://localhost:3000';
    const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
    const RESPONSE_TYPE = 'token';
    const SCOPES = [
        'playlist-read-private',
        'playlist-modify-public',
        'playlist-modify-private'
    ];
    const loginUrl = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(
        REDIRECT_URI
    )}&response_type=${RESPONSE_TYPE}&scope=${SCOPES.join(' ')}`;

    console.log('Environment Variable: ' + process.env.REACT_APP_SPOTIFY_CLIENT_ID);
    return (
        <div className={styles.Login}>
            <h1>Log in to your Spotify account:</h1>
            <a href={loginUrl}>
                LOG IN
            </a>
        </div>
    );
};

export default Login;