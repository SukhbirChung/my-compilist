import axios from 'axios';

async function logout() {
    const options = {
        method: 'POST',
        url: process.env.REACT_APP_ACCOUNT_URL + '/logout',
        withCredentials: true
    }

    try {
        const response = await axios.request(options);
        return {status: response.status, message: response.data};
    }
    catch (err) {
        return { status: err.response.status, message: err.response.data };
    }
}

export { logout };