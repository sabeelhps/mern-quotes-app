import axios from 'axios';
const BACKEND_DOMAIN = 'http://localhost:8000';

export async function getAllQuotes() {
    const response = await axios.get(`${BACKEND_DOMAIN}/allquotes`)
    
    if (response.status !== 200) {
        throw new Error('Could not fetch the quotes');
    }
    return response.data;
}