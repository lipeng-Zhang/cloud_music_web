import { AxiosRequestConfig } from 'axios';

interface IMyRequestConfig extends AxiosRequestConfig {
  interceptors?: {
    successRequestFn?: (config: AxiosRequestConfig) => AxiosRequestConfig;
    successResponseFn?: (res: any) => any;
  };
}

export type { IMyRequestConfig };
