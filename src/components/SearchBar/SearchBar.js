import React, { useState} from 'react';
import styles from './SearchBar.module.css';
import { getTracks } from '../../utils/api';
import AdvancedSearch from '../AdvancedSearch/AdvancedSearch';

const SearchBar = ({setAccessToken, setSearchResultTracks}) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [showAdvancedSearch, setShowAdvancedSearch] = useState(false);

    const handleSearchTermChange = async ({target}) => {
        setSearchTerm(target.value);
        const tracks = await getTracks({searchTerm: searchTerm});
        setSearchResultTracks(tracks);
    };

    const handleAdvancedSearchToggle = () => {
        if (!showAdvancedSearch) {
            setSearchTerm('');
            setSearchResultTracks([]);
        }
        setShowAdvancedSearch(prev => !prev);
    };

    const handleAdvancedSearch = async ({track, artist, album, genre}) => {
        const tracks = await getTracks({track: track, artist: artist, album: album, genre: genre});
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
                <button className={styles.LogoutButton} href="#" onClick={handleLogout}>Log Out</button>
            </div>
            <div className={styles.SearchBar}>
                <input 
                    placeholder="Enter a Song, Artist or Genre"
                    onChange={handleSearchTermChange}
                    onFocus={handleInputFocus}
                    value={searchTerm}/>
                <button 
                    className={styles.AdvancedSearchToggle}
                    onClick={handleAdvancedSearchToggle}
                >
                    {showAdvancedSearch ? 'Hide Advanced Search' : 'Show Advanced Search'}
                </button>
            </div>
            {showAdvancedSearch && (
                <AdvancedSearch onSearch={handleAdvancedSearch} />
            )}
        </>
    )
}

export default SearchBar;