import { loginSchemaType, registerSchemaType } from '@/app/(auth)/login/schemas/loginSchema';
import { revenueSchemaType } from '@/app/(realApp)/revenue/schemas/revenueSchema';
import axios from 'axios';
import { handleError } from '@/api/services/errorHandler';

const req = axios.create({
  //baseURL: process.env.NEXT_PUBLIC_URL_FINREX_API,
  baseURL: 'http://localhost:5023/api/v1',
});

req.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

req.interceptors.response.use(
  response => {
    // Handle successful responses
    if (response.data && !response.data.Success) {
      const errorMessage = response.data.Message || 'Erro desconhecido';
      return Promise.reject(new Error(errorMessage));
    }
    return response;
  },
  error => {
    // Handle error responses
    const message =
      error.response?.data?.Message || error.response?.data?.error || error.message || 'Erro desconhecido';
    handleError(message);
    return Promise.reject(new Error(message));
  }
);

interface AuthResponse {
  token: string;
  user: {
    email: string;
    password: string;
  };
}

export const registerUser = async (data: registerSchemaType): Promise<AuthResponse> => {
  const result = await req.post<AuthResponse>('/LoginUsers/register', data);
  return result.data;
};

export const loginUser = async (data: loginSchemaType): Promise<AuthResponse> => {
  const result = await req.post<AuthResponse>('/LoginUsers/login', data);

  if (result.data.token) {
    localStorage.setItem('token', result.data.token);
  }
  return result.data;
};

export const addRevenueValues = async (data: revenueSchemaType): Promise<revenueSchemaType> => {
  const result = await req.post('/revenue', data);
  return result.data;
};
