import React, { useState, useEffect } from 'react';
import styles from './SearchResults.module.css';
import Tracklist from '../Tracklist/Tracklist';


const SearchResults = ({onTrackAction, tracks}) => {

    return (
        <div className={styles.SearchResults}>
            <h2>Results</h2>
            <Tracklist
                tracks={tracks}
                button="add"
                onTrackAction={onTrackAction}
                keyPrefix="SearchResults"
            />
        </div>
    );
};

export default SearchResults;