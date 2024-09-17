'use client';

import Navbar from '@/components/Navbar/Navbar';
import Tabs from '@/components/Tabs';

export default function Home() {
  return (
    <div className='flex justify-center w-full mt-10'>
      <Navbar />
      <Tabs />
    </div>
  );
}
