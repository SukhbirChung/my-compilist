import axios from 'axios';

async function addToCollection(category, item) {
    const options = {
        method: 'POST',
        url: 'http://localhost:3000/collection/addToCollection',
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