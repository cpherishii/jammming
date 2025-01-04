import React, { useState, useEffect } from 'react';
import styles from './SearchResults.module.css';
import Tracklist from '../Tracklist/Tracklist';


const SearchResults = ({onTrackAction, searchResultTracks}) => {

    return (
        <div className={styles.SearchResults}>
            <h2>Results</h2>
            <Tracklist
                searchResultTracks={searchResultTracks}
                button="add"
                onTrackAction={onTrackAction}
                keyPrefix="SearchResults"
            />
        </div>
    );
};

export default SearchResults;