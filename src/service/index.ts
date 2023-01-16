import MYRequest from './request';
import { BASE_URL, TIME_OUT } from './config';

const myRequest = new MYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    successRequestFn(config) {
      return config;
    }
  }
});

export default myRequest;
