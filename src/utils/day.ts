export const convertToCurrentTimeISO = (dateString: string): string => {
  const now = new Date();
  const date = new Date(dateString);

  date.setHours(now.getHours());
  date.setMinutes(now.getMinutes());
  date.setSeconds(now.getSeconds());

  return date.toISOString();
};
