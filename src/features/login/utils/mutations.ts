import { useMutation } from '@tanstack/react-query';
import { addRevenueValues, loginUser, registerUser } from '@/shared/lib/api/api';
import { loginSchemaType, registerSchemaType } from '@/features/login/schemas/loginSchema';
import { revenueSchemaType } from '@/app/(realApp)/revenue/schemas/revenueSchema';

export const useLogin = (p0: { onSuccess: () => void }) => {
  return useMutation<any, Error, loginSchemaType>({
    mutationFn: loginUser,
  });
};

export const useAddRegister = (p0: { onSuccess: () => void }) => {
  return useMutation<any, Error, registerSchemaType>({
    mutationFn: registerUser,
  });
};

export const useRevenueValues = () => {
  return useMutation<any, Error, revenueSchemaType>({
    mutationFn: addRevenueValues,
  });
};
