import { loginSchemaType, registerSchemaType } from '@/app/(auth)/login/schemas/loginSchema';
import { revenueSchemaType } from '@/app/(realApp)/revenue/schemas/revenueSchema';
import axios from 'axios';

const req = axios.create({
  baseURL: process.env.NEXT_PUBLIC_URL_FINREX_API,
});

req.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

req.interceptors.response.use(
    response => response,
    error => {
        if (error.response) {
            if (error.response.status === 401) {
                localStorage.removeItem('token');
                window.location.href = '/login';
            }

            return Promise.reject(error.response.data.message || 'Error Desconhecido');
        }

        return Promise.reject('Erro de conexão com o servidor');
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
