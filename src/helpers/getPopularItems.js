import axios from 'axios';

async function getPopularItems() {
    const popularItems = {};

    const movieOptions = {
        method: 'GET',
        url: `https://api.themoviedb.org/3/trending/movie/week`,
        params: {
            language: 'en-US',
            api_key: process.env.REACT_APP_TMDB_KEY
        }
    }

    try {
        const response = await axios.request(movieOptions);
        popularItems.movies = response.data.results;
    }
    catch (err) {
        let errorMessage;
        errorMessage = err.message === 'Network Error' ?
            `${err.message}. Please connect to the internet.` :
            `Couldn't fetch this week's popular lists. Try refreshing the page, fetching lists via search box or login to access your personalized lists.`
        return errorMessage;
    }

    const tvOptions = {
        method: 'GET',
        url: `https://api.themoviedb.org/3/trending/tv/week`,
        params: {
            language: 'en-US',
            api_key: process.env.REACT_APP_TMDB_KEY
        }
    }

    try {
        const response = await axios.request(tvOptions);
        popularItems.shows = response.data.results;
    }
    catch (err) {
        let errorMessage;
        errorMessage = err.message === 'Network Error' ?
            `${err.message}. Please connect to the internet.` :
            `Couldn't fetch this week's popular lists. Try refreshing the page, fetching lists via search box or login to access your personalized lists.`
        return errorMessage;
    }

    const bookOptions = {
        method: 'GET',
        url: 'https://openlibrary.org/search.json?q=first_publish_year=[2023+TO+2024]',
        params: {
            limit: 20,
            language: 'eng',
            sort: 'new'
        }
    }

    try {
        const response = await axios.request(bookOptions);
        popularItems.books = response.data.docs;
    }
    catch (err) {
        let errorMessage;
        errorMessage = err.message === 'Network Error' ?
            `${err.message}. Please connect to the internet.` :
            `Couldn't fetch this week's popular lists. Try refreshing the page, fetching lists via search box or login to access your personalized lists.`
        return errorMessage;
    }

    return popularItems;
}

export { getPopularItems };