import axios from 'axios';

async function getUserList(category) {
    const options = {
        method: 'GET',
        url: process.env.REACT_APP_ACCOUNT_URL + '/collection/getUserCollection',
        withCredentials: true,
        params: {
            category: category.toLowerCase()
        }
    };

    try {
        const response = await axios.request(options);
        const userList = response.data
        userList.sort((a, b) => {
            return b.rating - a.rating;
        });
        return userList;
    }
    catch (err) {
        return err.response;
    }
}

export { getUserList };