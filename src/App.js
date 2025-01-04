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
  const [accessToken, setAccessToken] = useState(null);

  console.log('Search Result Tracks: ' + searchResultTracks);
  console.log('Access Token: ' + accessToken);

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
    const storedToken = window.localStorage.getItem('access_token');
    if (storedToken) {
      setAccessToken(storedToken);
      return;
    }

    const hash = window.location.hash;
    if (hash) {
      const params = new URLSearchParams(hash.slice(1));
      const token = params.get('access_token');
      const expiresIn = parseInt(params.get('expires_in'), 10);

      if (token) {
        setAccessToken(token);
        window.localStorage.setItem('access_token', token);

        setTimeout(() => {
          setAccessToken(null);
          window.localStorage.removeItem('access_token');
        }, expiresIn * 1000);

        window.location.hash = '';
      }
    }   
  }, []);

  useEffect(() => {
    console.log(`Updated Search Result Tracks: ${searchResultTracks}`);
  }, [searchResultTracks]);

  return (
    <>
      {!accessToken ? (
        <>
          <Login />
          <p id="error-message"></p>
        </>
      ) : (
        <>
          <SearchBar 
            setAccessToken={setAccessToken}
            setSearchResultTracks={setSearchResultTracks}
          />
          <div className="trackLists">
            <SearchResults 
              onTrackAction={handleAddTrack}
              searchResultTracks={searchResultTracks}
            />
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
