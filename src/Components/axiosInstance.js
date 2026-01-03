import axios from 'axios'
const api = axios.create({
    baseURL:'https://axios-revision-default-rtdb.asia-southeast1.firebasedatabase.app'
});
export default api;