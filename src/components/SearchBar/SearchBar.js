import React, { useState} from 'react';
import styles from './SearchBar.module.css';

const SearchBar = () => {


    return (
        <>
            <div className={styles.nav}>
                <h1>Jammming</h1>
            </div>
            <div className={styles.SearchBar}>
                <input placeholder="Enter a Song, Artist or Genre" />
                <button className={styles.SearchButton}>SEARCH</button>
            </div>
        </>
    )
}

export default SearchBar;