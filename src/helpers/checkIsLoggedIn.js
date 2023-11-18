import axios from 'axios';

async function checkIsLoggedIn() {
    const options = {
        method: 'POST',
        url: 'http://localhost:3000',
        withCredentials: true
    }

    try {
        const response = await axios.request(options);
        const username = response.data[0].toUpperCase() + response.data.slice(1);
        return { status: response.status, username: username };
    }
    catch (err) {
        return { status: err.response.status, message: err.response.data };
    }
}

export {checkIsLoggedIn};