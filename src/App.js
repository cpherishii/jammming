import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';
import Playlist from './components/Playlist/Playlist';

const tracks = [
  {
      'id': 0,
      'name': 'What a Fool Believes',
      'artist': 'The Doobie Brothers',
      'album': 'Minute by Minute',
      'duration_ms': 205000
  },
  {
      'id': 1,
      'name': 'Peg',
      'artist': 'Steely Dan',
      'album': 'Aja',
      'duration_ms': 237000
  },
  {
      'id': 2,
      'name': 'Disarm',
      'artist': 'The Smashing Pumpkins',
      'album': 'Siamese Dream',
      'duration_ms': 200000
  }
];

function App() {
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [searchResultTracks, setSearchResultTracks] = useState([]);

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

  return (
    <>
      <SearchBar />
      <div className="trackLists">
        <SearchResults onTrackAction={handleAddTrack} tracks={tracks} />
        <Playlist onTrackAction={handleRemoveTrack} playlistTracks={playlistTracks} />
      </div>
    </>
  );
}

export default App;
