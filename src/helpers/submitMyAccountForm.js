import axios from 'axios';

function validateMyAccountForm(userCredentials) {
    for (let credential in userCredentials) {
        if (userCredentials[credential].includes(' ')) {
            return credential;
        }
    }
    return false;
}

async function submitMyAccountForm(userCredentials) {
    const options = {
        method: 'POST',
        url: userCredentials.email ?
            process.env.REACT_APP_ACCOUNT_URL + '/signup' :
            process.env.REACT_APP_ACCOUNT_URL + '/login',
        data: userCredentials,
        withCredentials: true
    };

    try {
        const response = await axios.request(options);
        return { status: response.status, message: response.data };
    }
    catch (err) {
        return { status: err.response.status, message: err.response.data };
    }
}

export { validateMyAccountForm, submitMyAccountForm };