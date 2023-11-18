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
            'http://localhost:3000/' + 'signup' :
            'http://localhost:3000/' + 'login',
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