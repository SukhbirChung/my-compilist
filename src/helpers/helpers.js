import axios from 'axios';

let searchResults;

function validateForm(userCredentials) {
    for (let credential in userCredentials) {
        if (userCredentials[credential].includes(' ')) {
            return credential;
        }
    }
    return false;
}

async function submitForm(userInputs) {
    let url = '';
    let options = {
        method: userInputs.requestComingFrom ==='searchBox'?'GET':'POST'
    };

    if (userInputs.requestComingFrom === 'searchBox') {
        let query = userInputs.query.replace('/ /g', "%20");
        url = `https://api.themoviedb.org/3/search/${userInputs.selectedOption}`;
        options = {
            ...options,
            url: url,
            params: {
                api_key: process.env.REACT_APP_TMDB_KEY,
                query: query
            }
        };
    }
    
    try {
        const response = await axios.request(options);
        searchResults = response.data.results;
        return 'success';
    }
    catch (err) {
        return 'Something went wrong on the server side.';
    }

    //else {
    //    url = 'https://mongooseconnections.registerlogin.ca/login';
    //    if (userInputs.email) {
    //        url = 'https://mongooseconnections.registerlogin.ca/signup';
    //    }
    //    options.data = {...userInputs};
    //}



    //try {
            //    const response = await axios.request(options);

            //    console.log(response.data.results[0].poster_path);
            //    /*setSrc('https://image.tmdb.org/t/p/w200/' + response.data.results[0].poster_path);*/

            //}
            //catch (err) {
            //    setErrorMessage('Something went wrong on the server side.');
            //}

    //try {
    //    const response = await axios.post(url, userCredentials);
    //    return ['success', response.data];
    //}
    //catch (err) {
    //    return ['error', err.response.data];
    //}
}

export { searchResults, validateForm, submitForm };