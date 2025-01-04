import React from 'react';

const getTracks = async (searchTerm) => {
    const searchUrl = `https://api.spotify.com/v1/search?type=track&q=${searchTerm}`;
    const accessToken = window.localStorage.getItem('access_token');

    try {
        const response = await fetch(searchUrl, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });
        if (response.ok) {
            const jsonResponse = await response.json();
            console.log(jsonResponse.tracks.items);
            return jsonResponse.tracks.items.map(track => {
                return {
                    id: track.id,
                    name: track.name,
                    artist: track.artists[0].name,
                    album: track.album.name,
                    uri: track.uri
                };
            });
        } else {
            console.error('API request failed:', response.status, response.statusText);
        }
    } catch (error) {
        console.log(error);
    }

    return [];
};

export { getTracks };