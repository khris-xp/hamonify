'use client';

import Image from 'next/image';

export default function MusicCard() {
  const playlistUrl =
    'https://open.spotify.com/embed/playlist/00GtTy6Ri1cHRaR6QAQpAr';

  return (
    <div className='bg-white p-8 rounded-lg shadow-md w-80'>
      <Image
        src='https://image-cdn-ak.spotifycdn.com/image/ab67706c0000bebb37bf3cb01fcd7620950a15ec'
        alt='Chillaxer Playlist'
        className='w-64 h-64 mx-auto rounded-lg mb-4 shadow-lg shadow-teal-50'
        width={256}
        height={256}
      />
      <h2 className='text-xl font-semibold text-center'>Chillaxer</h2>
      <p className='text-gray-600 text-sm text-center'>
        Curated by everydaypam
      </p>

      <div className='mt-6'>
        <iframe
          src={playlistUrl}
          width='100%'
          height='80'
          frameBorder='0'
          allowTransparency={true}
          allow='encrypted-media'
          className='rounded-lg'
        ></iframe>
      </div>
      <div className='mt-6 flex justify-center items-center'>
        <button
          className='p-3 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none'
          onClick={() => window.open(playlistUrl, '_blank')}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='currentColor'
            className='size-6'
          >
            <path
              fillRule='evenodd'
              d='M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z'
              clipRule='evenodd'
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
