import { useMutation } from '@tanstack/react-query';
import {addRevenueValues, loginUser, registerUser} from '@/api/api';

export const useAddRegister = () => {
  return useMutation({
    mutationFn: registerUser,
  });
};

export const useLogin = () => {
  return useMutation({
    mutationFn: loginUser,
  });
};

export const useRevenueValues = () => {
  return useMutation({
    mutationFn: addRevenueValues,
  });
};