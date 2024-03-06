import axios from 'axios';
const popularItems = {};

async function getPopularItems() {
    if (popularItems.movies){
        return popularItems;
    }

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
        const movies = response.data.results;
        movies.sort((a, b) => {
            return b.vote_average - a.vote_average;
        });

        popularItems.movies = movies;
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
        const shows = response.data.results;
        shows.sort((a, b) => {
            return b.vote_average - a.vote_average;
        });

        popularItems.shows = shows;
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
        url: 'https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=' + process.env.REACT_APP_NYT_KEY,
    }
    try {
        const response = await axios.request(bookOptions);
        const bookCategories = response.data.results.lists;

        const map = new Map();
        bookCategories.map((category) => {
            category.books.forEach(book => map.set(book['book_uri'], book));
        });

        const books = Array.from(map.values());
        popularItems.books = books;
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