import React, { useState, useEffect } from 'react';
import './App.css';
import Login from './components/Login/Login';
import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';
import Playlist from './components/Playlist/Playlist';

function App() {
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [searchResultTracks, setSearchResultTracks] = useState([]);
  const [playlistName, setPlaylistName] = useState('New Playlist');
  const [accessToken, setAccessToken] = useState(null);

  console.log('Search Result Tracks: ' + searchResultTracks);
  console.log(`Playlist Tracks: ${playlistTracks.map(track => track.name)}`);
  console.log('Access Token: ' + accessToken);

  const handleAddTrack = (index) => {
    console.log(`Adding track ${searchResultTracks[index].name} to playlist`);
    setPlaylistTracks(prevTracks => {
      return [...prevTracks, searchResultTracks[index]];
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
              playlistName={playlistName}
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
