import { CommonUserModel } from './user-response';

export interface AuthResponse {
  credentials: {
    accessToken: string;
    refreshToken: string;
  };
  user: CommonUserModel;
}
