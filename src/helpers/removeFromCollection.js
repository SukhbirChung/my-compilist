import axios from 'axios';

async function removeFromCollection(category, id) {
    const options = {
        method: 'POST',
        url: process.env.REACT_APP_ACCOUNT_URL + '/collection/removeFromCollection',
        withCredentials: true,
        data: {
            category: category,
            id: id
        }
    }

    try {
        const response = await axios.request(options);
        return response
    }
    catch (err) {
        return err.response;
    }
}

export { removeFromCollection };