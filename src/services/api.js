import axios from 'axios';

import {ApiConfig} from '@/helpers/const';

const createApi = () => {
  const instance = axios.create({
    baseURL: ApiConfig.baseURL,
    timeout: ApiConfig.timeout,
    withCredentials: true
  });

  return instance;
};

export default createApi;
