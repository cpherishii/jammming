import React, { useState} from 'react';
import styles from './SearchBar.module.css';

const SearchBar = ({setAccessToken}) => {
    const handleLogout = () => {
        setAccessToken(null);
        window.localStorage.removeItem('access_token');
    }

    return (
        <>
            <div className={styles.nav}>
                <h1>Jammming</h1>
                <a className={styles.LogoutButton} href="#" onClick={handleLogout}>Log Out</a>
            </div>
            <div className={styles.SearchBar}>
                <input placeholder="Enter a Song, Artist or Genre" />
                <button className={styles.SearchButton}>SEARCH</button>
            </div>
        </>
    )
}

export default SearchBar;