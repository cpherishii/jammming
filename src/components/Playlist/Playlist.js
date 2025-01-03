import React from 'react';
import styles from './Playlist.module.css';
import Tracklist from '../Tracklist/Tracklist';

const Playlist = ({playlistTracks, onTrackAction}) => {

    return (
        <div className={styles.Playlist}>
            <h2>Playlist</h2>
            <Tracklist 
                tracks={playlistTracks}
                button="remove"
                onTrackAction={onTrackAction}
                keyPrefix="Playlist"/>
        </div>
    )
};

export default Playlist;