import React from 'react';
import styles from './Playlist.module.css';
import Tracklist from '../Tracklist/Tracklist';

const Playlist = ({playlistTracks, playlistName, onTrackAction, setPlaylistName, saveToSpotify}) => {

    const handlePlaylistNameChange = ({target}) => {
        setPlaylistName(target.value);
    }

    return (
        <div className={styles.Playlist}>
            <input 
                placeholder="New Playlist"
                onChange={handlePlaylistNameChange}
                value={playlistName}
            />
            <Tracklist 
                tracks={playlistTracks}
                button="remove"
                onTrackAction={onTrackAction}
                keyPrefix="Playlist"/>
            <button className={styles.PlaylistSave} onClick={saveToSpotify}>SAVE TO SPOTIFY</button>
        </div>
    )
};

export default Playlist;