import { loginSchemaType, registerSchemaType } from '@/app/(auth)/login/schemas/loginSchema';
import { revenueSchemaType } from '@/app/(realApp)/revenue/schemas/revenueSchema';
import axios from 'axios';
import { handleError } from '@/api/services/errorHandler';
import { ProfileFormValues } from '@/app/(realApp)/profile/schemas/profileSchema';
import { paths } from '@/libs/paths';

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
  const result = await req.post<AuthResponse>(paths.api.auth.register, data);
  return result.data;
};

export const loginUser = async (data: loginSchemaType): Promise<AuthResponse> => {
  const result = await req.post<AuthResponse>(paths.api.auth.login, data);

  if (result.data.token) {
    localStorage.setItem('token', result.data.token);
  }
  return result.data;
};

export const handleGoogleLogin = () => {
  const apiUrl = `${process.env.NEXT_PUBLIC_URL_FINREX_API}/login-users/google-login`;
  window.location.href = apiUrl;
};

export const addRevenueValues = async (data: revenueSchemaType): Promise<revenueSchemaType> => {
  const result = await req.post(paths.api.revenue, data);
  return result.data;
};

export const addProfileData = async (data: ProfileFormValues): Promise<ProfileFormValues> => {
  const result = await req.post('https://jsonplaceholder.typicode.com/posts', data);
  return result.data;
};
