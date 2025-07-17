// src/services/api.ts
import axios, {
  InternalAxiosRequestConfig,
  AxiosResponse,
  AxiosError,
} from 'axios';

// 定义 API 响应结构
interface ApiResponse<T = any> {
  code: number;
  message: string;
  data: T;
}

// 创建 axios 实例
const api = axios.create({
  baseURL: '/api',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 请求拦截器
api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem('token');
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => {
    console.error('请求错误:', error);
    return Promise.reject(error);
  },
);

// 响应拦截器
api.interceptors.response.use(
  (response: AxiosResponse<ApiResponse>) => {
    const { code, message, data } = response.data;

    // 业务状态码处理
    if (code !== 200) {
      console.error('业务错误:', message);
      return Promise.reject(new Error(message));
    }

    return data;
  },
  (error: AxiosError<ApiResponse>) => {
    // HTTP 状态码处理
    const status = error.response?.status;

    switch (status) {
      case 401:
        // 跳转到登录页
        console.error('未授权，跳转到登录页');
        window.location.href = '/';
        break;
      case 403:
        console.error('权限不足');
        break;
      case 500:
        console.error('服务器内部错误');
        break;
    }

    return Promise.reject(error);
  },
);

export default api;
