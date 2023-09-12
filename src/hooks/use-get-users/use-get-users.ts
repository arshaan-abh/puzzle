import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import http from '../../utils/http';
import { AxiosError } from 'axios';

interface UsersResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: Data[];
  support: Support;
}

interface Support {
  url: string;
  text: string;
}

interface Data {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

const getUsers = async (): Promise<UsersResponse> => {
  const res = await http.get<UsersResponse>('/users?page=1');
  return res.data;
};

export const useGetUsers = (options: UseQueryOptions<UsersResponse, AxiosError<any>> = {}) => {
  return useQuery({
    queryKey: ['GET Users'],
    queryFn: getUsers,
    ...options,
  });
};
