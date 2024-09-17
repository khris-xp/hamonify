import { DateConstants } from '@/constants/date';
import { Fragment } from 'react';

export default function Tabs({ children }: { children: React.ReactNode }) {
  return (
    <Fragment>
      <div role='tablist' className='tabs tabs-bordered'>
        {DateConstants.map((date, index) => {
          return (
            <Fragment key={index}>
              <input
                type='radio'
                name='my_tabs_1'
                role='tab'
                className='tab'
                aria-label={date.title}
              />
              <div role='tabpanel' className='tab-content p-10'>
                {children}
              </div>
            </Fragment>
          );
        })}
      </div>
    </Fragment>
  );
}
