import React, { useState, useEffect } from 'react';
import './App.css';
import Login from './components/Login/Login';
import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';
import Playlist from './components/Playlist/Playlist';

const tracks = [
  {
      'id': 0,
      'uri': 'spotify:track:2yBVeksU2EtrPJbTu4ZslK',
      'name': 'What a Fool Believes',
      'artist': 'The Doobie Brothers',
      'album': 'Minute by Minute',
      'duration_ms': 205000
  },
  {
      'id': 1,
      'uri': 'spotify:track:5emxp4RqsF6QoAWXW2Afrk',
      'name': 'Peg',
      'artist': 'Steely Dan',
      'album': 'Aja',
      'duration_ms': 237000
  },
  {
      'id': 2,
      'uri': 'spotify:track:6YIggUJW3ttAAPRdnki8RM',
      'name': 'Disarm',
      'artist': 'The Smashing Pumpkins',
      'album': 'Siamese Dream',
      'duration_ms': 200000
  }
];

function App() {
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [searchResultTracks, setSearchResultTracks] = useState([]);
  const [playlistName, setPlaylistName] = useState('New Playlist');
  const isLoggedIn = true;

  const handleAddTrack = (index) => {
    setPlaylistTracks(prevTracks => {
      return [...prevTracks, tracks[index]];
    });
  };

  const handleRemoveTrack = (index) => {
    setPlaylistTracks(prevTracks => {
      return prevTracks.filter((track, i) => i !== index);
    });
  };

  const saveToSpotify = () => {
    const uris = playlistTracks.map(track => track.uri);
    console.log(`Saving playlist ${playlistName} with tracks:`);
    console.log(uris);
  };

  useEffect(() => {
    console.log(playlistName);
  }, [playlistName]);

  return (
    <>
      {!isLoggedIn ? (
        <Login />
      ) : (
        <>
          <SearchBar />
          <div className="trackLists">
            <SearchResults onTrackAction={handleAddTrack} tracks={tracks} />
            <Playlist 
              onTrackAction={handleRemoveTrack}
              playlistTracks={playlistTracks}
              setPlaylistName={setPlaylistName}
              saveToSpotify={saveToSpotify}
            />
          </div>
        </>
      )}
    </>
  );
}

export default App;
