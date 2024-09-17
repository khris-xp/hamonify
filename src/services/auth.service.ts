import { AuthResponse } from '@/common/dto/auth-response';
import { LoginDto } from '@/common/dto/login-dto';
import { RegisterDto } from '@/common/dto/register-dto';
import { CommonUserModel } from '@/common/dto/user-response';
import { apiController } from '@/controllers/api.controller';

export const authService = {
  login: async (loginRequest: LoginDto): Promise<AuthResponse> => {
    return await apiController('/auth/sign-in', 'post', loginRequest);
  },
  register: async (registerRequest: RegisterDto): Promise<AuthResponse> => {
    return await apiController('/auth/sign-up', 'post', registerRequest);
  },
  getUserProfile: async (): Promise<CommonUserModel> => {
    return await apiController('/users/profile', 'get');
  },
};
