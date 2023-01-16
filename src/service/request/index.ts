import axios from 'axios';
import type { AxiosInstance } from 'axios';
import type { IMyRequestConfig } from './type';

class MYRequest {
  instance: AxiosInstance;

  constructor(config: IMyRequestConfig) {
    this.instance = axios.create(config);

    this.instance.interceptors.request.use(
      (config) => {
        return config;
      },
      (err) => {
        return err;
      }
    );

    this.instance.interceptors.response.use(
      (res) => {
        return res;
      },
      (err) => {
        return err;
      }
    );

    this.instance.interceptors.request.use(config.interceptors?.successRequestFn);

    this.instance.interceptors.response.use(config.interceptors?.successResponseFn);
  }

  request<T = any>(config: IMyRequestConfig) {
    if (config.interceptors?.successRequestFn) {
      config = config.interceptors.successRequestFn(config);
    }

    return new Promise<T>((resolve) => {
      this.instance.request<any, T>(config).then((res) => {
        if (config.interceptors?.successResponseFn) {
          res = config.interceptors.successResponseFn(res);
        }
        resolve(res);
      });
    });
  }

  get(config: IMyRequestConfig) {
    return this.request({ ...config, method: 'GET' });
  }
  post(config: IMyRequestConfig) {
    return this.request({ ...config, method: 'POST' });
  }
}

export default MYRequest;
