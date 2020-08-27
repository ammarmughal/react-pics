import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID v66xXZxYnm7c_fQZoB4dxcKXbmIlfXXLUGG9_Pm1SDY',
	},
});