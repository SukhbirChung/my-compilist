import axios from 'axios';

const categories = {
    Movies: <svg id="Movies" className="navbar-item-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="24px" height="24px" fill="#fff" stroke="#fff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M829.44 911.36c45.245 0 81.92-36.675 81.92-81.92V194.56c0-45.245-36.675-81.92-81.92-81.92H194.56c-45.245 0-81.92 36.675-81.92 81.92v634.88c0 45.245 36.675 81.92 81.92 81.92h634.88zm0 40.96H194.56c-67.866 0-122.88-55.014-122.88-122.88V194.56c0-67.866 55.014-122.88 122.88-122.88h634.88c67.866 0 122.88 55.014 122.88 122.88v634.88c0 67.866-55.014 122.88-122.88 122.88z"></path><path d="M97.28 286.72h829.44c11.311 0 20.48-9.169 20.48-20.48s-9.169-20.48-20.48-20.48H97.28c-11.311 0-20.48 9.169-20.48 20.48s9.169 20.48 20.48 20.48z"></path><path d="M756.64 83.234L594.725 245.149c-7.998 7.998-7.998 20.965 0 28.963s20.965 7.998 28.963 0l161.915-161.915c7.998-7.998 7.998-20.965 0-28.963s-20.965-7.998-28.963 0zm-159.744 0L434.981 245.149c-7.998 7.998-7.998 20.965 0 28.963s20.965 7.998 28.963 0l161.915-161.915c7.998-7.998 7.998-20.965 0-28.963s-20.965-7.998-28.963 0zm-160.768 0L274.213 245.149c-7.998 7.998-7.998 20.965 0 28.963s20.965 7.998 28.963 0l161.915-161.915c7.998-7.998 7.998-20.965 0-28.963s-20.965-7.998-28.963 0zm-158.72-1.024L115.493 244.125c-7.998 7.998-7.998 20.965 0 28.963s20.965 7.998 28.963 0l161.915-161.915c7.998-7.998 7.998-20.965 0-28.963s-20.965-7.998-28.963 0zm597.853 43.146L749.944 250.673c-7.998 7.998-7.998 20.965 0 28.963s20.965 7.998 28.963 0l125.317-125.317c7.998-7.998 7.998-20.965 0-28.963s-20.965-7.998-28.963 0zm-426.9 310.275c-6.817-4.322-15.723.577-15.723 8.649v280.924c0 8.066 8.909 12.969 15.723 8.649l221.645-140.462c6.346-4.021 6.346-13.277-.001-17.298L448.36 435.631zM691.93 541.496c31.727 20.104 31.727 66.39.001 86.494L470.289 768.45c-34.084 21.608-78.611-2.893-78.611-43.245V444.281c0-40.36 44.523-64.853 78.609-43.246L691.93 541.496z"></path></g></svg>,
    Shows: <svg id="Shows" className="navbar-item-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px" fill="none" stroke="#fff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M22 16C22 18.8284 22 20.2426 21.1213 21.1213C20.2426 22 18.8284 22 16 22L8 22C5.17157 22 3.75736 22 2.87868 21.1213C2 20.2426 2 18.8284 2 16L2 12C2 9.17157 2 7.75736 2.87868 6.87868C3.75736 6 5.17157 6 8 6L16 6C18.8284 6 20.2426 6 21.1213 6.87868C22 7.75736 22 9.17157 22 12V16Z" stroke="#fff" strokeWidth="1.5"></path> <path d="M9 2L12 5.5L15 2" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"></path> <path d="M16 6V22" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"></path> <path d="M20 16C20 15.4477 19.5523 15 19 15C18.4477 15 18 15.4477 18 16C18 16.5523 18.4477 17 19 17C19.5523 17 20 16.5523 20 16Z" fill="#fff"></path> <path d="M20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13C19.5523 13 20 12.5523 20 12Z" fill="#fff"></path> </g></svg>,
    Documentaries: <svg id="Documentaries" className="navbar-item-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="24px" height="24px" fill="#fff" stroke="#fff" version="1.1"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M26 27.25h-20c-0.414 0-0.75 0.336-0.75 0.75s0.336 0.75 0.75 0.75v0h20c0.414 0 0.75-0.336 0.75-0.75s-0.336-0.75-0.75-0.75v0zM28 3.25h-24c-1.518 0.002-2.748 1.232-2.75 2.75v16c0.002 1.518 1.232 2.748 2.75 2.75h24c1.518-0.002 2.748-1.232 2.75-2.75v-16c-0.002-1.518-1.232-2.748-2.75-2.75h-0zM29.25 22c-0.001 0.69-0.56 1.249-1.25 1.25h-24c-0.69-0.001-1.249-0.56-1.25-1.25v-16c0.001-0.69 0.56-1.249 1.25-1.25h24c0.69 0.001 1.249 0.56 1.25 1.25v0z"></path> </g></svg>,
    Books: <svg id="Books" className="navbar-item-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="24px" height="24px" fill="#fff" stroke="#fff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M229.75146,196.61035l-8.28173-30.9082-.00049-.00195-.00049-.00184L196.62256,72.97217v-.00086l-8.28223-30.90979a12.00916,12.00916,0,0,0-14.69678-8.48437l-30.90966,8.28222a11.99256,11.99256,0,0,0-3.61182,1.656A12.01237,12.01237,0,0,0,128,36H96a11.93662,11.93662,0,0,0-8,3.081A11.93662,11.93662,0,0,0,80,36H48A12.01343,12.01343,0,0,0,36,48V208a12.01343,12.01343,0,0,0,12,12H80a11.93662,11.93662,0,0,0,8-3.08105A11.93662,11.93662,0,0,0,96,220h32a12.01343,12.01343,0,0,0,12-12V78.02l2.53027,9.44373.00049.00109.00049.00122,24.84619,92.72706v.00122l.00049.00146,8.28174,30.90772a11.98984,11.98984,0,0,0,14.69678,8.48535l30.90966-8.28223a11.99918,11.99918,0,0,0,8.48535-14.69629ZM151.293,89.25781,189.93066,78.9054l22.77588,85.00207-38.63672,10.353ZM96,44h32a4.00427,4.00427,0,0,1,4,4V172H92V48A4.00427,4.00427,0,0,1,96,44ZM48,44H80a4.00427,4.00427,0,0,1,4,4V76H44V48A4.00427,4.00427,0,0,1,48,44ZM80,212H48a4.00427,4.00427,0,0,1-4-4V84H84V208A4.00427,4.00427,0,0,1,80,212Zm48,0H96a4.00427,4.00427,0,0,1-4-4V180h40v28A4.00427,4.00427,0,0,1,128,212ZM142.37549,51.4502a3.97587,3.97587,0,0,1,2.4292-1.86426l30.90918-8.28223a3.99814,3.99814,0,0,1,4.89892,2.82813l7.24756,27.04687L149.22266,81.53113l-7.24659-27.04578A3.9718,3.9718,0,0,1,142.37549,51.4502Zm79.249,150.26562a3.97594,3.97594,0,0,1-2.4292,1.86426l-30.90918,8.28222a4.00907,4.00907,0,0,1-4.89892-2.8291l-7.24707-27.04614,38.63672-10.353,7.24707,27.04663A3.97183,3.97183,0,0,1,221.62451,201.71582Z"></path> </g></svg>
};

let selectedOption = '';
let searchResults = [];

async function getPopularItems() {
    const popularItems = {};

    for (let item of ['movie', 'tv']) {
        const options = {
            method: 'GET',
            url: `https://api.themoviedb.org/3/trending/${item}/week`,
            params: {
                language: 'en-US',
                api_key: process.env.REACT_APP_TMDB_KEY
            }
        };

        try {
            const response = await axios.request(options);
            popularItems[item] = response.data.results;
        }
        catch (err) {
            let errorMessage;
            errorMessage = err.message === 'Network Error' ?
                `${err.message}. Please connect to the internet.` :
                `Couldn't fetch this week's popular lists. Try refreshing the page, fetching lists via search box or login to access your personalized lists.`
            return errorMessage;
        }
    }

    const options = {
        method: 'GET',
        url: 'https://openlibrary.org/search.json?q=first_publish_year=[2023+TO+2024]',
        params: {
            limit: 20,
            language: 'eng',
            sort: 'new'
        }
    }

    try {
        const response = await axios.request(options);
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
        let query = userInputs.query;
        selectedOption = userInputs.selectedOption;
        url = selectedOption === 'books' ?
            `https://openlibrary.org/search.json` :
            `https://api.themoviedb.org/3/search/${selectedOption}`;
        options = {
            ...options,
            url: url,
            params: selectedOption === 'books' ?
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
    }
    else {
        url = userInputs.email ?
            process.env.REACT_APP_ACCOUNT_URL + 'signup' :
            process.env.REACT_APP_ACCOUNT_URL + 'login';
        options = {
            ...options,
            url: url,
            data: userInputs
        };
    }
    
    try {
        const response = await axios.request(options);

        if (userInputs.requestComingFrom === 'searchBox') {
            searchResults = selectedOption === 'books' ?
                response.data.docs : response.data.results;
            return 'success';
        }

        return response;
    }
    catch (err) {
        if (userInputs.requestComingFrom === 'searchBox') {
            return 'Something went wrong on the server side.';
        }

        return err.response;
    }
}

export { categories, selectedOption, searchResults, getPopularItems, validateForm, submitForm };