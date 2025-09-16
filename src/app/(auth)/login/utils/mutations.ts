import { useMutation } from '@tanstack/react-query';
import { addRevenueValues, loginUser, registerUser } from '@/api/api';

export const useAddRegister = (p0: { onSuccess: () => void }) => {
  return useMutation({
    mutationFn: registerUser,
  });
};

export const useLogin = (p0: { onSuccess: () => void }) => {
  return useMutation({
    mutationFn: loginUser,
  });
};

export const useRevenueValues = () => {
  return useMutation({
    mutationFn: addRevenueValues,
  });
};
