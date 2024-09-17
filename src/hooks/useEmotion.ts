import { CreateEmotionType } from '@/common/dto/create-emotion-dto';
import { emotionService } from '@/services/emotion.service';
import { useEmotionStore } from '@/stores/emotion.store';
import { useMutation, useQuery } from 'react-query';

export const useEmotion = (date: string) => {
  const { setEmotions, setPlaylists } = useEmotionStore();

  const getEmotionsQuery = useQuery('emotions', emotionService.getEmotions, {
    onSuccess: (data) => {
      setEmotions(data);
    },
    refetchOnWindowFocus: false,
  });

  const getEmotionByDateQuery = useQuery(
    ['emotionsByDate', date],
    ({ queryKey }) => emotionService.getEmotionByDate(queryKey[1]),
    {
      onSuccess: (data) => {
        setEmotions(data);
      },
      refetchOnWindowFocus: false,
    }
  );

  const getEmotionPlaylistQuery = useQuery(
    ['emotionsPlaylist', date],
    ({ queryKey }) => emotionService.getEmotionPlaylist(queryKey[1]),
    {
      onSuccess: (data) => {
        setPlaylists(data);
      },
      refetchOnWindowFocus: false,
    }
  );

  const createEmotionMutation = useMutation(
    async (createEmotion: CreateEmotionType) => {
      return await emotionService.createEmotion(createEmotion);
    }
  );

  return {
    emotions: getEmotionsQuery.data,
    emotionByDate: getEmotionByDateQuery.data,
    playlists: getEmotionPlaylistQuery.data,
    getEmotionsQuery,
    getEmotionByDateQuery,
    getEmotionPlaylistQuery,
    createEmotionMutation,
  };
};
