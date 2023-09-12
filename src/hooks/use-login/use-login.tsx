import { UseMutationOptions, useMutation } from '@tanstack/react-query';
import http from '../../utils/http';
import { AxiosError } from 'axios';
import { LoginRequest } from '../../@types/login-request';
import { LoginResponse } from '../../@types/login-response';

const login = async (data: LoginRequest): Promise<LoginResponse> => {
  const res = await http.post('/login', data);
  return res.data;
};

export const useLogin = (options: UseMutationOptions<LoginResponse, AxiosError<any>, LoginRequest, any> = {}) => {
  return useMutation({
    mutationFn: login,
    ...options,
  });
};
