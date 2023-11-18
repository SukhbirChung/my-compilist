import axios from 'axios';

async function getUserList(category) {
    const options = {
        method: 'GET',
        url: 'http://localhost:3000/collection/getUserCollection',        
        withCredentials: true,
        params: {
            category: category.toLowerCase()
        }
    };

    try {
        const response = await axios.request(options);
        return response.data;
    }
    catch (err) {
        return err.response;
    }
}

export { getUserList };