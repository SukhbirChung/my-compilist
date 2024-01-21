import axios from 'axios';

let searchResults = [];

async function submitSearchBoxForm(query, category) {
    const options = {
        method: 'GET',
        params: category === 'books' ?
            {
                title: query,
                limit: 10,
                language: 'eng'
            } :
            {
                api_key: process.env.REACT_APP_TMDB_KEY,
                query: query
            }
    };

    if (category === 'movies') {
        options.url = 'https://api.themoviedb.org/3/search/movie';
    } else if (category === 'books') {
        options.url = `https://openlibrary.org/search.json`;
    } else {
        options.url = `https://api.themoviedb.org/3/search/tv`;
    }

    try {
        const response = await axios.request(options);
        searchResults = category === 'books' ?
            response.data.docs : response.data.results;
        console.log(response.data.docs);
        return response;
    }
    catch (err) {
        return err.response;
    }
}

export { submitSearchBoxForm, searchResults };