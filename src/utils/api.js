
const getTracks = async ({searchTerm = '', track = '', artist = '', album = '', genre = ''}) => {
    let queryParts = [];

    if (track || artist || album || genre) {
        if (track) queryParts.push(`track:${encodeURIComponent(track)}`);
        if (artist) queryParts.push(`artist:${encodeURIComponent(artist)}`);
        if (album) queryParts.push(`album:${encodeURIComponent(album)}`);
        if (genre) queryParts.push(`genre:${encodeURIComponent(genre)}`);
    } else if (searchTerm) {
        queryParts.push(encodeURIComponent(searchTerm));
    } else {
        console.error('No search term provided.');
        return [];
    }

    const searchQuery = queryParts.join(' ');
    const searchUrl = `https://api.spotify.com/v1/search?type=track&q=${searchQuery}`;
    console.log('Search URL: ' + searchUrl);
    const accessToken = window.localStorage.getItem('access_token');
    if (!accessToken) {
        console.error('Access token not found.');
        window.location.href = '/';
        return [];
    }

    try {
        const response = await fetch(searchUrl, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });

        if (response.status === 401) {
            console.error('Token expired or invalid.');
            window.localStorage.removeItem('access_token');
            window.location.href = '/';
            return [];
        }
        if (response.ok) {
            const jsonResponse = await response.json();
            console.log('JSON Response: ' + jsonResponse.tracks);
            console.log('Album Image URL: ' + jsonResponse.tracks.items[0].album.images[1].url);
            return jsonResponse.tracks.items.map(track => {
                const artistsArray = track.artists.map(artist => artist.name);
                return {
                    id: track.id,
                    name: track.name,
                    artists: artistsArray.length < 3 ? artistsArray.join(', ') : `${artistsArray[0]}, ${artistsArray[1]} & more`,
                    album: track.album.name,
                    imgUrl: track.album.images[1].url,
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