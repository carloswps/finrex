import { useMutation } from '@tanstack/react-query';
import { addRevenueValues, loginUser, registerUser } from '@/api/api';

export const useAddRegister = ({ onSuccess }: { onSuccess: () => void }) => {
  return useMutation({
    mutationFn: registerUser,
    onSuccess,
  });
};

export const useLogin = ({ onSuccess }: { onSuccess: () => void }) => {
  return useMutation({
    mutationFn: loginUser,
    onSuccess,
  });
};

export const useRevenueValues = () => {
  return useMutation({
    mutationFn: addRevenueValues,
  });
};
