import axios, { AxiosRequestConfig } from "axios";

const $host = axios.create({
    baseURL: process.env.REACT_APP_API
})

const $authHost = axios.create({
    baseURL: process.env.REACT_APP_API + 'auth'
})

  
const authInterceptor: (config: any) => any = (config) => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
  };
  

  $authHost.interceptors.request.use(authInterceptor)

  export {
    $host,
    $authHost
  }
  