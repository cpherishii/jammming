import React from 'react';
import styles from './Tracklist.module.css';
import Track from '../Track/Track';

const Tracklist = ({tracks, button, handleCheckboxChange, onTrackAction, keyPrefix}) => {
    return (
        <>
            {tracks.map((track, i) => {
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
            })}
        </>
    );
};

export default Tracklist;