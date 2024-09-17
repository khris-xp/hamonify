import { CreateEmotionType } from '@/common/dto/create-emotion-dto';
import { EmotionResponse } from '@/common/dto/emotion-response.dto';
import { PlaylistResponse } from '@/common/dto/playlists-response';
import { apiController } from '@/controllers/api.controller';
import { create } from 'zustand';

interface EmotionStoreInterface {
  emotions: EmotionResponse[];
  playlists: PlaylistResponse;
  setEmotions: (emotions: EmotionResponse[]) => void;
  setPlaylists: (playlists: PlaylistResponse) => void;
  action: {
    getEmotions: () => void;
    getEmotionByDate: (date: string) => void;
    getEmotionPlaylist: (date: string) => void;
    createEmotion: (createEmotion: CreateEmotionType) => void;
  };
}

export const useEmotionStore = create<EmotionStoreInterface>((set) => ({
  emotions: [],
  playlists: {} as PlaylistResponse,
  setEmotions: (emotions) => set({ emotions }),
  setPlaylists: (playlists) => set({ playlists }),
  action: {
    getEmotions: async () => {
      const emotions = await apiController<EmotionResponse[]>(
        '/emotion',
        'get'
      );
      set({ emotions });
    },
    getEmotionByDate: async (date: string) => {
      const emotions = await apiController<EmotionResponse[]>(
        `/emotion/${date}`,
        'get'
      );
      set({ emotions });
    },
    getEmotionPlaylist: async (date: string) => {
      const playlists = await apiController<PlaylistResponse>(
        `/emotion/playlist/${date}`,
        'get'
      );
      set({ playlists });
    },
    createEmotion: async (createEmotion: CreateEmotionType) => {
      const emotion = await apiController<EmotionResponse>(
        '/emotion',
        'post',
        createEmotion
      );
      set((state) => ({ emotions: [...state.emotions, emotion] }));
    },
  },
}));
