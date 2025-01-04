import React from 'react';
import styles from './Tracklist.module.css';
import Track from '../Track/Track';

const Tracklist = ({searchResultTracks = [], button, handleCheckboxChange, onTrackAction, keyPrefix}) => {
    console.log(`Search Result Tracks: ${searchResultTracks}`);
    return (
        <>
            {searchResultTracks.length > 0 ? (
                searchResultTracks.map((track, i) => {
                    return (
                        <Track 
                            track={track}
                            handleCheckboxChange={handleCheckboxChange}
                            key={keyPrefix + i}
                            index={i}
                            button={button}
                            onTrackAction={onTrackAction} 
                        />
                    );
                }
            )) : (
                <p>No tracks found.</p>
            )
            }
        </>
    );
};

export default Tracklist;