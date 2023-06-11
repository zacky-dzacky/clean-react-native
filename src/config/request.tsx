import { API_KEY, BASE_API_URL } from "./network";
import axios from 'axios';

class Request {
    generateUrl(endpoint: string): string {
        const url = `${BASE_API_URL}${endpoint}?api_key=${API_KEY}`;
        return url;
      }
      async get(endpoint: string) {
        const url = this.generateUrl(endpoint);
        return axios.get(url);
      }
}

export default Request