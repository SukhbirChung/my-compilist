import axios from 'axios';

async function getImdbId(id, type) {
    type = type === 'movies' ? 'movie' : 'tv';

    const options = {
        method: 'GET',
        url: `https://api.themoviedb.org/3/${type}/${id}/external_ids`,
        params: {
            language: 'en-US',
            api_key: process.env.REACT_APP_TMDB_KEY
        }
    }

    try {
        const response = await axios.request(options);
        return response.data.imdb_id;
    }
    catch (err) {
        return '';
    }
}

export { getImdbId };