import React from 'react';
import styles from './Tracklist.module.css';
import Track from '../Track/Track';

const Tracklist = ({tracks = [], button, handleCheckboxChange, onTrackAction, keyPrefix}) => {
    console.log(`Tracks: ${tracks.map(track => track.name)}`);
    return (
        <>
            {tracks.length > 0 ? (
                tracks.map((track, i) => {
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