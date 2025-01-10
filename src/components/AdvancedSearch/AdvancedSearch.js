import React, { useState } from 'react';
import styles from './AdvancedSearch.module.css';

const AdvancedSearch = ({ onSearch }) => {
    const [artist, setArtist] = useState('');
    const [album, setAlbum] = useState('');
    const [track, setTrack] = useState('');
    const [genre, setGenre] = useState('');

    const handleAdvancedSearch = () => {
        onSearch({ track, artist, album, genre });
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter' && (track || artist || album || genre)) {
            handleAdvancedSearch();
        }
    };

    return (
        <div className={styles.AdvancedSearch}>
            <input
                className={styles.AdvancedSearchInput}
                placeholder='Track'
                value={track}
                onChange={(({target}) => setTrack(target.value))}
                onKeyDown={handleKeyDown}
            />
            <input 
                className={styles.AdvancedSearchInput}
                placeholder="Artist"
                value={artist}
                onChange={(({target}) => setArtist(target.value))}
                onKeyDown={handleKeyDown}
            />
            <input
                className={styles.AdvancedSearchInput}
                placeholder='Album'
                value={album}
                onChange={(({target}) => setAlbum(target.value))}
                onKeyDown={handleKeyDown}
            />
            <input
                className={styles.AdvancedSearchInput}
                placeholder='Genre'
                value={genre}
                onChange={(({target}) => setGenre(target.value))}
                onKeyDown={handleKeyDown}
            />
            <button onClick={handleAdvancedSearch}>SEARCH</button>
        </div>
    );
}

export default AdvancedSearch;