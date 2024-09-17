import { EmotionDayConstants } from '@/constants/day';
import { useEmotion } from '@/hooks/useEmotion';
import { convertToCurrentTimeISO } from '@/utils/day';
import { Fragment, useMemo } from 'react';
import EmotionCard from '../Card/EmotionCard';
import MusicCard from '../Card/MusicCard';

export default function EmotionTabs({ date }: { date: { title: string } }) {
  const dateData = useMemo(
    () => convertToCurrentTimeISO(date.title),
    [date.title]
  );

  const { emotions, emotionByDate, playlists } = useEmotion(dateData);

  return (
    <Fragment>
      <input
        type='radio'
        name='my_tabs_1'
        role='tab'
        className='tab'
        aria-label={date.title}
      />
      <div role='tabpanel' className='tab-content p-10'>
        <div className='w-full max-w-screen-lg'>
          <div className='flex justify-between space-x-16'>
            <div className='w-2/3'>
              {EmotionDayConstants.map((day, index) => {
                return <EmotionCard key={index} day={day} dateData={dateData} />;
              })}
            </div>
            <div className='w-1/3'>
              {playlists && <MusicCard playlists={playlists} />}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
