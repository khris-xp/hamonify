import { LoginDto } from '@/common/dto/login-dto';
import { RegisterDto } from '@/common/dto/register-dto';
import axiosInstance from '@/services/api.service';
import axios from 'axios';

export async function apiController<T>(
  url: string,
  method: 'get' | 'post' | 'put' | 'patch' | 'delete',
  data?: LoginDto | RegisterDto
): Promise<T> {
  try {
    const config = {
      url,
      method,
      ...(data && { data }),
    };

    const response = await axiosInstance.request(config);
    return response.data;
  } catch (error: unknown) {
    let errorMessage: string;

    if (axios.isAxiosError(error)) {
      errorMessage = error.response?.data?.message || error.message;
    } else if (error instanceof Error) {
      errorMessage = error.message;
    } else {
      errorMessage = 'An unknown error occurred';
    }
    return Promise.reject(errorMessage);
  }
}
