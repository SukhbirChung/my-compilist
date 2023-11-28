import axios from 'axios';

async function addToCollection(category, item) {
    const options = {
        method: 'POST',
        url: process.env.REACT_APP_ACCOUNT_URL + '/collection/addToCollection',
        withCredentials: true,
        data: {category, item}
    }

    try {
        const response = await axios.request(options);
        return response;
    }
    catch (err) {
        return err.response;
    }
}

export { addToCollection };