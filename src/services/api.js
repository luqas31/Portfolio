import axios from 'axios';

const api = axios.create();

export async function getData() {
	const response = await api.get('/Portfolio/data/data.json');

	return response.data;
}
