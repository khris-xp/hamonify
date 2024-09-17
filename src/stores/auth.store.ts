import { CommonUserModel } from '@/common/dto/user-response';
import { UserInit } from '@/constants/user.constants';
import Cookies from 'js-cookie';
import { create } from 'zustand';

interface AuthStoreInterface {
  authenticated: boolean;
  setAuthentication: (val: boolean) => void;
  user: CommonUserModel;
  setUser: (user: CommonUserModel) => void;
  action: {
    logout: () => void;
  };
}

export const useAuthStore = create<AuthStoreInterface>((set) => ({
  authenticated: false,
  user: UserInit,
  setAuthentication: (val) => set(() => ({ authenticated: val })),
  setUser: (user) => set({ user }),
  action: {
    logout: () => {
      Cookies.remove('token');
      set({ authenticated: false, user: UserInit });
    },
  },
}));
