import axios from 'axios';

async function removeFromCollection(category, id) {
    const options = {
        method: 'POST',
        url: 'http://localhost:3000/collection/removeFromCollection',
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