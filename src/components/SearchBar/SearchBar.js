import React, { useState} from 'react';
import styles from './SearchBar.module.css';
import { getTracks } from '../../utils/api';

const SearchBar = ({setAccessToken, setSearchResultTracks}) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchTermChange = async ({target}) => {
        setSearchTerm(target.value);
        const tracks = await getTracks(searchTerm);
        setSearchResultTracks(tracks);
    };

    const handleLogout = () => {
        setAccessToken(null);
        window.localStorage.removeItem('access_token');
    };

    const handleInputFocus = ({target}) => {
        target.select();
    };

    return (
        <>
            <div className={styles.nav}>
                <h1 className={styles.title}>Ja<span className={styles.mmm}>mmm</span>ing</h1>
                <a className={styles.LogoutButton} href="#" onClick={handleLogout}>Log Out</a>
            </div>
            <div className={styles.SearchBar}>
                <input 
                    placeholder="Enter a Song, Artist or Genre"
                    onChange={handleSearchTermChange}
                    onFocus={handleInputFocus}
                    value={searchTerm}/>
            </div>
        </>
    )
}

export default SearchBar;