import axios from 'axios';

function validateForm(userCredentials) {
    for (let credential in userCredentials) {
        if (userCredentials[credential].includes(' ')) {
            return credential;
        }
    }
    return false;
}

async function submitForm(userCredentials) {
    let url = 'https://mongooseconnections.registerlogin.ca/login';

    if (userCredentials.email) {
        url = 'https://mongooseconnections.registerlogin.ca/signup';
    }

    try {
        const response = await axios.post(url, userCredentials);
        return ['success', response.data];
    }
    catch (err) {
        return ['error', err.response.data];
    }
}

export { validateForm, submitForm };