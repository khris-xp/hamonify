import { EmotionDay } from '@/constants/day';
import { Emotion } from '@/constants/emotion';
import Image from 'next/image';
import EmotionButton from '../Button/EmotionButton';

type Props = {
  day: EmotionDay;
  dateData: string;
};

export default function EmotionCard(props: Props) {
  return (
    <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-5'>
      <div className='p-8 flex'>
        <div className='pr-4'>
          <Image src={props.day.image} alt='days-icon' width={64} height={64} />
        </div>
        <div>
          <div className='uppercase tracking-wide text-sm text-indigo-500 font-semibold'>
            {props.day.title}
          </div>
          <p className='mt-2 text-gray-500'>{props.day.description}</p>
          <p className='mt-2 text-gray-500'>{props.day.time}</p>
          <div className='flex space-x-10 mt-5'>
            {Emotion.map((emotion, index) => {
              return (
                <EmotionButton
                  key={index}
                  title={emotion.title}
                  image={emotion.image}
                  score={emotion.score}
                  dateData={props.dateData}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
