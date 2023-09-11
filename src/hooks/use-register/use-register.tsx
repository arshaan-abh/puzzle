import { UseMutationOptions, useMutation } from '@tanstack/react-query';
import http from '../../utils/http';
import { AxiosError } from 'axios';
import { RegisterRequest } from '../../@types/register-request';
import { RegisterResponse } from '../../@types/register-response';

const register = async (data: RegisterRequest): Promise<RegisterResponse> => {
  const res = await http.post('/register', data);
  return res.data;
};

export const useRegister = (
  options: UseMutationOptions<RegisterResponse, AxiosError<any>, RegisterRequest, any> = {},
) => {
  return useMutation({
    mutationFn: register,
    ...options,
  });
};
