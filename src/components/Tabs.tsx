import { DateConstants } from '@/constants/date';
import { Fragment } from 'react';
import EmotionTabs from './Tabs/EmotionTabs';

export default function Tabs() {
  return (
    <Fragment>
      <div role='tablist' className='tabs tabs-bordered'>
        {DateConstants.map((date, index) => {
          return (
            <EmotionTabs key={index} date={date} />
          );
        })}
      </div>
    </Fragment>
  );
}
