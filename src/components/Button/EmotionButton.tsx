import { useAuth } from '@/hooks/useAuth';
import { emotionService } from '@/services/emotion.service';
import Image from 'next/image';

export type Props = {
  title: string;
  image: string;
  score: number;
  dateData: string;
};

export default function EmotionButton(props: Props) {
  const { userProfile } = useAuth();
  const handleCreateEmotion = async () => {
    if (userProfile) {
      const createEmotion = {
        name: props.title,
        score: props.score,
        createdBy: userProfile._id,
        period: props.dateData,
      };
      try {
        await emotionService.createEmotion(createEmotion);
      } catch (error: unknown) {
        console.error(error);
      }
    }
  };
  return (
    <button onClick={handleCreateEmotion}>
      <Image
        src={props.image}
        alt='days-icon'
        width={64}
        height={64}
        className='opacity-100 z-10 transition-opacity duration-300 hover:opacity-60 cursor-pointer'
      />
      <p className='text-gray-500 text-sm text-center'>{props.title}</p>
    </button>
  );
}
