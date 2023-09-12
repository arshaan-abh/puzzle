import { UseMutationOptions, useMutation } from '@tanstack/react-query';
import http from '../../utils/http';
import { AxiosError } from 'axios';

interface CreateUserRequest {
  job: string;
  name: string;
}

interface CreateUserResponse {
  name: string;
  job: string;
  id: string;
  createdAt: string;
}

const createUser = async (data: CreateUserRequest): Promise<CreateUserResponse> => {
  const res = await http.post('/users', data);
  return res.data;
};

export const useCreateUser = (
  options: UseMutationOptions<CreateUserResponse, AxiosError<any>, CreateUserRequest, any> = {},
) => {
  return useMutation({
    mutationFn: (data: CreateUserRequest) => createUser(data),
    ...options,
  });
};
