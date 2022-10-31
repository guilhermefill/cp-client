import axios from 'axios';

class Service {
	constructor() {
		this.baseUrl =
			process.env.REACT_APP_BASE_URL || 'http://localhost:5005/api';
	}

	getAllPosts = () => {
		return axios.get(`${this.baseUrl}/posts/`);
	};

	getPost = (postId) => {
		return axios.get(`${this.baseUrl}/posts/details/${postId}`);
	};
}

const postService = new Service();
export default postService;
