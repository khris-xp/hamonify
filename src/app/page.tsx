'use client';

import EmotionCard from '@/components/Card/EmotionCard';
import MusicCard from '@/components/Card/MusicCard';
import Tabs from '@/components/Tabs';
import { EmotionDayConstants } from '@/constants/day';

export default function Home() {
  return (
    <div className='flex justify-center w-full mt-10'>
      <Tabs>
        <div className='w-full max-w-screen-lg'>
          <div className='flex justify-between space-x-16'>
            <div className='w-2/3'>
              {EmotionDayConstants.map((day, index) => {
                return <EmotionCard key={index} day={day} />;
              })}
            </div>
            <div className='w-1/3'>
              <MusicCard />
            </div>
          </div>
        </div>
      </Tabs>
    </div>
  );
}
