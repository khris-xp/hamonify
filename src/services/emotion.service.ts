import { CreateEmotionType } from '@/common/dto/create-emotion-dto';
import { EmotionResponse } from '@/common/dto/emotion-response.dto';
import { PlaylistResponse } from '@/common/dto/playlists-response';
import { apiController } from '@/controllers/api.controller';

export const emotionService = {
  getEmotions: async (): Promise<EmotionResponse[]> => {
    return await apiController('/emotions', 'get');
  },
  getEmotionByDate: async (date: string): Promise<EmotionResponse[]> => {
    return await apiController(`/emotions/${date}`, 'get');
  },
  getEmotionPlaylist: async (date: string): Promise<PlaylistResponse> => {
    return await apiController(`/emotions/playlist/${date}`, 'get');
  },
  createEmotion: async (
    createEmotion: CreateEmotionType
  ): Promise<EmotionResponse> => {
    return await apiController('/emotions', 'post', createEmotion);
  },
};
