import { useState, useEffect } from 'react';
import axios from 'axios';

interface ApiOptions {
  url: string;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  immediate?: boolean;
  params?: any;
  data?: any;
}

interface ApiResponse<T> {
  loading: boolean;
  error: Error | null;
  response: T | null;
  fetchData: () => Promise<void>;
}

export const useApi = <T = any>(options: ApiOptions): ApiResponse<T> => {
  const { url, method = 'GET', immediate = true, params, data } = options;
  const [loading, setLoading] = useState(immediate);
  const [error, setError] = useState<Error | null>(null);
  const [response, setResponse] = useState<T | null>(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
      const axiosResponse = await axios.request({
        url,
        method,
        params,
        data,
        responseType: 'text', // 明确指定响应类型为文本
      });

      // 尝试解析 JSON 或直接使用字符串
      let responseData: T;
      try {
        responseData = JSON.parse(axiosResponse.data) as T;
      } catch (e) {
        responseData = axiosResponse.data as unknown as T; // 直接作为字符串处理
      }

      setResponse(responseData);
    } catch (err: any) {
      console.error('请求错误:', err);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (immediate) {
      fetchData();
    }
  }, [url, method, immediate, params, data]);

  return { loading, error, response, fetchData };
};
