export type EmotionDay = {
  title: string;
  description: string;
  time: string;
  image: string;
};

export const EmotionDayConstants: EmotionDay[] = [
  {
    title: 'Morning',
    description: 'Start your day with a positive emotion.',
    time: '06:00:00 - 11:59:59',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS96Y2z2tA8m4yb0OyRaOWWEUHNZAi_fq5lhw&s',
  },
  {
    title: 'Afternoon',
    description: 'Keep the good vibes going.',
    time: '12:00:00 - 17:59:59',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq8IiwoSILywx0cr1e_a6__fnmeH49lGrOyQ&s',
  },
  {
    title: 'Evening',
    description: 'Unwind and relax.',
    time: '18:00:00 - 23:59:59',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq5_DORBJrEMrEErhhiOuCClOfjIn45OHfkw&s',
  },
  {
    title: 'Night',
    description: 'Get ready for a good night sleep.',
    time: '00:00:00 - 05:59:59',
    image: 'https://cdn-icons-png.flaticon.com/512/4676/4676959.png',
  },
];
