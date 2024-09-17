export const convertToCurrentTimeISO = (dateString: string): string => {
  const now = new Date();
  const date = new Date(dateString);

  date.setHours(
    now.getHours(),
    now.getMinutes(),
    now.getSeconds(),
    now.getMilliseconds()
  );

  return date.toISOString();
};
