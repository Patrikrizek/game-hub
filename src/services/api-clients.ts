import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'b2b9577f48294dff9de9c52f9970451c'
    }
})
